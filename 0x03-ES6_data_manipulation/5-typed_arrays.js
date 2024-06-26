export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  try {
    view.setInt8(position, value);
    return view;
  } catch (error) {
    throw new Error('Position outside range');
  }
}
