declare module 'ico-endec' {
  export interface IconEntry {
    width: number
    height: number
    colors: number
    colorPlanes: number
    bitsPerPixel: number
    horizontalHotspot: number
    verticalHotspot: number
    imageSize: number
    imageOffset: number
    imageType: "png" | "bmp"
    imageData: Uint8Array
  }

  export function encode(images: Uint8Array[]): Uint8Array;
  export function decode(buffer: Uint8Array): IconEntry[];
};