export function colorInverter(rgba: string) {
  const MAX = 255;
  const rgbaStrs = rgba.slice(5, -3).split(',');
  const invertedRgba = rgbaStrs.map((el: string) => 255 - Number(el));
  rgba = `rgba(${invertedRgba})`;

  return rgba;
}