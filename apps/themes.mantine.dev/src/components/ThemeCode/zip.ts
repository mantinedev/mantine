export interface ZipFile {
  name: string;
  content: string;
}

const CRC_TABLE = Array.from({ length: 256 }, (_, index) => {
  let value = index;
  for (let bit = 0; bit < 8; bit += 1) {
    value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
  }
  return value >>> 0;
});

function crc32(bytes: Uint8Array) {
  let crc = 0xffffffff;
  bytes.forEach((byte) => {
    crc = CRC_TABLE[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  });
  return (crc ^ 0xffffffff) >>> 0;
}

function dosDateTime(date: Date) {
  const time = (date.getHours() << 11) | (date.getMinutes() << 5) | (date.getSeconds() >> 1);
  const day = ((date.getFullYear() - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate();
  return { time, day };
}

class ByteWriter {
  private chunks: Uint8Array[] = [];
  length = 0;

  u16(value: number) {
    this.bytes(new Uint8Array([value & 0xff, (value >>> 8) & 0xff]));
  }

  u32(value: number) {
    this.bytes(
      new Uint8Array([
        value & 0xff,
        (value >>> 8) & 0xff,
        (value >>> 16) & 0xff,
        (value >>> 24) & 0xff,
      ])
    );
  }

  bytes(value: Uint8Array) {
    this.chunks.push(value);
    this.length += value.length;
  }

  toBlob(type: string) {
    return new Blob(this.chunks as BlobPart[], { type });
  }
}

export function createZip(files: ZipFile[]) {
  const encoder = new TextEncoder();
  const { time, day } = dosDateTime(new Date());
  const body = new ByteWriter();
  const central = new ByteWriter();

  files.forEach((file) => {
    const name = encoder.encode(file.name);
    const data = encoder.encode(file.content);
    const crc = crc32(data);
    const offset = body.length;

    body.u32(0x04034b50);
    body.u16(20);
    body.u16(0x0800);
    body.u16(0);
    body.u16(time);
    body.u16(day);
    body.u32(crc);
    body.u32(data.length);
    body.u32(data.length);
    body.u16(name.length);
    body.u16(0);
    body.bytes(name);
    body.bytes(data);

    central.u32(0x02014b50);
    central.u16(20);
    central.u16(20);
    central.u16(0x0800);
    central.u16(0);
    central.u16(time);
    central.u16(day);
    central.u32(crc);
    central.u32(data.length);
    central.u32(data.length);
    central.u16(name.length);
    central.u16(0);
    central.u16(0);
    central.u16(0);
    central.u16(0);
    central.u32(0);
    central.u32(offset);
    central.bytes(name);
  });

  const centralOffset = body.length;
  const centralLength = central.length;
  const end = new ByteWriter();
  end.u32(0x06054b50);
  end.u16(0);
  end.u16(0);
  end.u16(files.length);
  end.u16(files.length);
  end.u32(centralLength);
  end.u32(centralOffset);
  end.u16(0);

  return new Blob([body.toBlob(''), central.toBlob(''), end.toBlob('')], {
    type: 'application/zip',
  });
}
