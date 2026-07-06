import { useState } from 'react';
import { Button } from '../Button';
import { ImageCropperCropData } from './compute-crop-area';
import { ImageCropper } from './ImageCropper';
import { useImageCropper } from './use-image-cropper';

export default { title: 'ImageCropper' };

const image = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&q=80';

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
