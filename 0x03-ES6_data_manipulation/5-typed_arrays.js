export default function createInt8TypedArray(length, position, value) {
  if (position - 1 <= length) {
    const buf = new DataView(new ArrayBuffer(length), 0, length);
    buf.setInt8(position, value);
    return buf;
  }
  throw new Error('Position outside range');
}
