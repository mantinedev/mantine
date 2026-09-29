import { useState } from 'react';
import { Button } from '../Button';
import { Group } from '../Group';
import { Slider } from '../Slider';
import { Text } from '../Text';
import { ImageCropperCropData } from './compute-crop-area';
import { ImageCropper } from './ImageCropper';
import { useImageCropper } from './use-image-cropper';

export default { title: 'ImageCropper' };

const image = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&q=80';
const smallImage = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&q=80';
const secondImage = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&q=80';

export function Usage() {
  return (
    <div style={{ maxWidth: 400, padding: 40 }}>
      <ImageCropper src={image} crossOrigin="anonymous" withControls />
    </div>
  );
}

export function Circle() {
  return (
    <div style={{ maxWidth: 360, padding: 40 }}>
      <ImageCropper src={image} crossOrigin="anonymous" cropShape="circle" withControls />
    </div>
  );
}

export function AspectRatio() {
  return (
    <div style={{ maxWidth: 480, padding: 40 }}>
      <ImageCropper
        src={image}
        crossOrigin="anonymous"
        aspectRatio={16 / 9}
        withGrid
        withControls
      />
    </div>
  );
}

export function Grid() {
  return (
    <div style={{ maxWidth: 400, padding: 40 }}>
      <ImageCropper src={image} crossOrigin="anonymous" withGrid />
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ maxWidth: 400, padding: 40 }}>
      <ImageCropper src={image} crossOrigin="anonymous" disabled defaultZoom={1.4} withControls />
    </div>
  );
}

export function CropChange() {
  const [crop, setCrop] = useState<ImageCropperCropData | null>(null);
  return (
    <div style={{ maxWidth: 400, padding: 40 }}>
      <ImageCropper src={image} crossOrigin="anonymous" withControls onCropChange={setCrop} />
      <pre style={{ fontSize: 12 }}>{JSON.stringify(crop?.pixels, null, 2)}</pre>
    </div>
  );
}

export function ControllerExport() {
  const controller = useImageCropper({ cropShape: 'circle' });
  const [preview, setPreview] = useState<string | null>(null);

  const exportImage = async () => {
    const dataUrl = (await controller.getCroppedImage({ output: 'dataURL' })) as string;
    setPreview(dataUrl);
  };

  return (
    <div style={{ maxWidth: 360, padding: 40 }}>
      <ImageCropper src={image} crossOrigin="anonymous" controller={controller} withControls />
      <Button mt="md" onClick={exportImage}>
        Export
      </Button>
      {preview && (
        <img src={preview} alt="cropped" style={{ marginTop: 20, width: 160, borderRadius: 999 }} />
      )}
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ maxWidth: 400, padding: 40 }}>
      <ImageCropper src={image} crossOrigin="anonymous" withControls unstyled />
    </div>
  );
}

export function SmallImage() {
  const [cropData, setCropData] = useState<ImageCropperCropData | null>(null);
  const controller = useImageCropper({ onCropChange: setCropData });
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <div style={{ maxWidth: 400, padding: 40 }}>
      <ImageCropper src={smallImage} crossOrigin="anonymous" controller={controller} withControls />
      <Button
        mt="md"
        onClick={async () =>
          setPreview((await controller.getCroppedImage({ output: 'dataURL' })) as string)
        }
      >
        Export
      </Button>
      <pre style={{ fontSize: 12 }}>{JSON.stringify(cropData?.pixels ?? null)}</pre>
      {preview && <img src={preview} alt="cropped" style={{ marginTop: 20, width: 160 }} />}
    </div>
  );
}

export function ControlledZoom() {
  const [zoom, setZoom] = useState(1.5);
  return (
    <div style={{ maxWidth: 400, padding: 40 }}>
      <ImageCropper src={image} crossOrigin="anonymous" zoom={zoom} onZoomChange={setZoom} />
      <Text mt="md">Zoom: {zoom.toFixed(2)}</Text>
      <Slider value={zoom} onChange={setZoom} min={1} max={5} step={0.1} thumbLabel="Zoom" />
    </div>
  );
}

export function SrcSwitch() {
  const [src, setSrc] = useState(image);
  return (
    <div style={{ maxWidth: 400, padding: 40 }}>
      <ImageCropper src={src} crossOrigin="anonymous" withControls />
      <Group mt="md">
        <Button onClick={() => setSrc(image)}>Portrait</Button>
        <Button onClick={() => setSrc(secondImage)}>Landscape</Button>
      </Group>
    </div>
  );
}

export function BrokenImage() {
  const controller = useImageCropper();
  const [result, setResult] = useState('');

  const exportImage = () =>
    controller
      .getCroppedImage()
      .then(() => setResult('resolved'))
      .catch((error: Error) => setResult(`rejected: ${error.message}`));

  return (
    <div style={{ maxWidth: 400, padding: 40 }}>
      <ImageCropper
        src="https://example.invalid/missing.png"
        controller={controller}
        withControls
      />
      <Button mt="md" onClick={exportImage}>
        Export
      </Button>
      <Text mt="md">{result}</Text>
    </div>
  );
}

export function CustomLayout() {
  const controller = useImageCropper({ aspectRatio: 4 / 3 });
  return (
    <div style={{ maxWidth: 400, padding: 40 }}>
      <ImageCropper src={image} crossOrigin="anonymous" controller={controller} withGrid>
        <ImageCropper.Viewport aria-label="Cover image cropper">
          <ImageCropper.Image />
        </ImageCropper.Viewport>
        <ImageCropper.Controls>
          <Button variant="default" onClick={() => controller.rotateBy(90)}>
            Rotate right
          </Button>
          <Button variant="default" onClick={() => controller.zoomBy(controller.zoomStep)}>
            Zoom in
          </Button>
          <Button variant="default" onClick={controller.reset}>
            Reset
          </Button>
        </ImageCropper.Controls>
      </ImageCropper>
    </div>
  );
}
