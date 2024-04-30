export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8 = new Uint8Array(buffer);
  if (position - 1 <= length) {
    int8[position] = value;
  } else {
    throw new Error('Position outside range');
  }
  return int8;
}
