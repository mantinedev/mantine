import { ImageCropperArea, ImageCropperFlip, rotateSize } from './compute-crop-area';
import { getCroppedImage } from './get-cropped-image';

type Matrix = [number, number, number, number, number, number];

const IDENTITY: Matrix = [1, 0, 0, 1, 0, 0];

function multiply(m: Matrix, n: Matrix): Matrix {
  return [
    m[0] * n[0] + m[2] * n[1],
    m[1] * n[0] + m[3] * n[1],
    m[0] * n[2] + m[2] * n[3],
    m[1] * n[2] + m[3] * n[3],
    m[0] * n[4] + m[2] * n[5] + m[4],
    m[1] * n[4] + m[3] * n[5] + m[5],
  ];
}

function apply(m: Matrix, x: number, y: number) {
  return { x: m[0] * x + m[2] * y + m[4], y: m[1] * x + m[3] * y + m[5] };
}

interface DrawCall {
  source: unknown;
  matrix: Matrix;
  args: number[];
  canvasSize: { width: number; height: number };
}

interface MockContext {
  canvas: HTMLCanvasElement;
  calls: string[];
  draws: DrawCall[];
}

const contexts: MockContext[] = [];

function createMockContext(canvas: HTMLCanvasElement) {
  let matrix: Matrix = IDENTITY;
  const record: MockContext = { canvas, calls: [], draws: [] };
  contexts.push(record);

  return {
    record,
    context: {
      globalCompositeOperation: 'source-over',
      translate: (x: number, y: number) => {
        record.calls.push('translate');
        matrix = multiply(matrix, [1, 0, 0, 1, x, y]);
      },
      rotate: (angle: number) => {
        record.calls.push('rotate');
        matrix = multiply(matrix, [
          Math.cos(angle),
          Math.sin(angle),
          -Math.sin(angle),
          Math.cos(angle),
          0,
          0,
        ]);
      },
      scale: (x: number, y: number) => {
        record.calls.push('scale');
        matrix = multiply(matrix, [x, 0, 0, y, 0, 0]);
      },
      setTransform: (...values: Matrix) => {
        record.calls.push('setTransform');
        matrix = values;
      },
      drawImage: (source: unknown, ...args: number[]) => {
        record.calls.push('drawImage');
        record.draws.push({
          source,
          matrix,
          args,
          canvasSize: { width: canvas.width, height: canvas.height },
        });
      },
      beginPath: () => record.calls.push('beginPath'),
      arc: () => record.calls.push('arc'),
      closePath: () => record.calls.push('closePath'),
      fill: () => record.calls.push('fill'),
    },
  };
}

function reactEasyCropGetCroppedImage(
  image: HTMLImageElement,
  area: ImageCropperArea,
  flip: ImageCropperFlip
) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d')!;
  const rotation = area.rotation ?? 0;
  const bbox = rotateSize(image.naturalWidth, image.naturalHeight, rotation);

  canvas.width = bbox.width;
  canvas.height = bbox.height;

  ctx.translate(bbox.width / 2, bbox.height / 2);
  ctx.rotate((rotation * Math.PI) / 180);
  ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1);
  ctx.translate(-image.naturalWidth / 2, -image.naturalHeight / 2);
  ctx.drawImage(image, 0, 0);

  const cropped = document.createElement('canvas');
  const croppedCtx = cropped.getContext('2d')!;
  cropped.width = Math.max(1, Math.round(area.width));
  cropped.height = Math.max(1, Math.round(area.height));
  croppedCtx.drawImage(
    canvas,
    area.x,
    area.y,
    area.width,
    area.height,
    0,
    0,
    area.width,
    area.height
  );
}

const image = { naturalWidth: 400, naturalHeight: 300 } as HTMLImageElement;

describe('@mantine/core/ImageCropper/get-cropped-image (mocked 2d context, jsdom has no canvas)', () => {
  let getContext: jest.SpyInstance;
  let toDataURL: jest.SpyInstance;
  let toBlob: jest.SpyInstance;

  beforeEach(() => {
    contexts.length = 0;
    getContext = jest
      .spyOn(HTMLCanvasElement.prototype, 'getContext')
      .mockImplementation(function getMockContext(this: HTMLCanvasElement) {
        return createMockContext(this).context as any;
      });
    toDataURL = jest
      .spyOn(HTMLCanvasElement.prototype, 'toDataURL')
      .mockImplementation(() => 'data:image/png;base64,');
    toBlob = jest
      .spyOn(HTMLCanvasElement.prototype, 'toBlob')
      .mockImplementation((callback: BlobCallback) => callback(new Blob(['x'])));
  });

  afterEach(() => {
    getContext.mockRestore();
    toDataURL.mockRestore();
    toBlob.mockRestore();
  });

  it('draws straight into an integer-sized canvas of the crop size', async () => {
    const area = { x: 37, y: 21, width: 150, height: 100, rotation: 45 };
    await getCroppedImage(image, area, {}, 'rectangle');

    expect(contexts).toHaveLength(1);
    const [record] = contexts;
    expect(record.canvas.width).toBe(150);
    expect(record.canvas.height).toBe(100);
    expect(record.calls).toEqual([
      'translate',
      'translate',
      'rotate',
      'scale',
      'translate',
      'drawImage',
    ]);
    expect(record.draws[0].source).toBe(image);
    expect(record.draws[0].canvasSize).toEqual({ width: 150, height: 100 });
  });

  it('matches the react-easy-crop two-canvas algorithm for right angles and flips', async () => {
    const flips: ImageCropperFlip[] = [
      {},
      { horizontal: true },
      { vertical: true },
      { horizontal: true, vertical: true },
    ];

    for (const rotation of [0, 90, 180, 270]) {
      for (const flip of flips) {
        const area = { x: 37, y: 21, width: 150, height: 100, rotation };

        contexts.length = 0;
        reactEasyCropGetCroppedImage(image, area, flip);
        const [bboxDraw] = contexts[0].draws;
        const [copyDraw] = contexts[1].draws;
        const referenceSize = {
          width: contexts[1].canvas.width,
          height: contexts[1].canvas.height,
        };

        contexts.length = 0;
        await getCroppedImage(image, area, flip, 'rectangle');
        const [draw] = contexts[0].draws;

        expect(draw.canvasSize).toEqual(referenceSize);

        for (const [x, y] of [
          [0, 0],
          [400, 0],
          [0, 300],
          [400, 300],
          [123, 45],
        ]) {
          const onBBox = apply(bboxDraw.matrix, x, y);
          const expected = { x: onBBox.x - copyDraw.args[0], y: onBBox.y - copyDraw.args[1] };
          const actual = apply(draw.matrix, x, y);
          expect(actual.x).toBeCloseTo(expected.x, 6);
          expect(actual.y).toBeCloseTo(expected.y, 6);
        }
      }
    }
  });

  it('masks the circle crop shape in canvas coordinates', async () => {
    await getCroppedImage(
      image,
      { x: 0, y: 0, width: 100, height: 100, rotation: 0 },
      {},
      'circle'
    );
    const [record] = contexts;
    expect(record.calls.slice(-5)).toEqual([
      'setTransform',
      'beginPath',
      'arc',
      'closePath',
      'fill',
    ]);
  });

  it('resolves a data URL or a Blob', async () => {
    const area = { x: 0, y: 0, width: 10, height: 10, rotation: 0 };
    await expect(
      getCroppedImage(image, area, {}, 'rectangle', { output: 'dataURL' })
    ).resolves.toBe('data:image/png;base64,');
    await expect(getCroppedImage(image, area, {}, 'rectangle')).resolves.toBeInstanceOf(Blob);
  });

  it('rejects instead of throwing synchronously when the canvas is tainted', async () => {
    toDataURL.mockImplementation(() => {
      throw new Error('SecurityError');
    });
    const area = { x: 0, y: 0, width: 10, height: 10, rotation: 0 };

    let promise: Promise<unknown> | undefined;
    expect(() => {
      promise = getCroppedImage(image, area, {}, 'rectangle', { output: 'dataURL' });
    }).not.toThrow();
    await expect(promise).rejects.toThrow('SecurityError');
  });

  it('rejects when the canvas produces no blob or has no 2d context', async () => {
    const area = { x: 0, y: 0, width: 10, height: 10, rotation: 0 };
    toBlob.mockImplementation((callback: BlobCallback) => callback(null));
    await expect(getCroppedImage(image, area, {}, 'rectangle')).rejects.toThrow(/empty/);

    getContext.mockImplementation(() => null);
    await expect(getCroppedImage(image, area, {}, 'rectangle')).rejects.toThrow(/2d context/);
  });
});
