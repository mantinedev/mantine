import { useEffect, useRef } from 'react';
import { Button, Stack } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useEffect, useRef } from 'react';
import { useClipboard } from '@mantine/hooks';
import { Button, Stack } from '@mantine/core';

function Demo() {
  const clipboard = useClipboard();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) {
      return;
    }

    const gradient = ctx.createLinearGradient(0, 0, 240, 120);
    gradient.addColorStop(0, '#4c6ef5');
    gradient.addColorStop(1, '#e64980');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 240, 120);
    ctx.fillStyle = 'white';
    ctx.font = 'bold 22px sans-serif';
    ctx.fillText('Mantine', 20, 68);
  }, []);

  const copyImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    // Construct the ClipboardItem with a Promise synchronously so that the write
    // stays within the user gesture (required by Safari)
    const blob = new Promise<Blob>((resolve, reject) => {
      canvas.toBlob(
        (result) => (result ? resolve(result) : reject(new Error('Failed to export image'))),
        'image/png'
      );
    });

    clipboard.copy(new ClipboardItem({ 'image/png': blob }));
  };

  return (
    <Stack align="center">
      <canvas ref={canvasRef} width={240} height={120} style={{ borderRadius: 8 }} />
      <Button
        color={clipboard.copied ? 'teal' : undefined}
        disabled={!clipboard.supported}
        onClick={copyImage}
      >
        {clipboard.copied ? 'Image copied' : 'Copy image'}
      </Button>
    </Stack>
  );
}`;

function Demo() {
  const clipboard = useClipboard();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) {
      return;
    }

    const gradient = ctx.createLinearGradient(0, 0, 240, 120);
    gradient.addColorStop(0, '#4c6ef5');
    gradient.addColorStop(1, '#e64980');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 240, 120);
    ctx.fillStyle = 'white';
    ctx.font = 'bold 22px sans-serif';
    ctx.fillText('Mantine', 20, 68);
  }, []);

  const copyImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const blob = new Promise<Blob>((resolve, reject) => {
      canvas.toBlob(
        (result) => (result ? resolve(result) : reject(new Error('Failed to export image'))),
        'image/png'
      );
    });

    clipboard.copy(new ClipboardItem({ 'image/png': blob }));
  };

  return (
    <Stack align="center">
      <canvas ref={canvasRef} width={240} height={120} style={{ borderRadius: 8 }} />
      <Button
        color={clipboard.copied ? 'teal' : undefined}
        disabled={!clipboard.supported}
        onClick={copyImage}
      >
        {clipboard.copied ? 'Image copied' : 'Copy image'}
      </Button>
    </Stack>
  );
}

export const image: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
