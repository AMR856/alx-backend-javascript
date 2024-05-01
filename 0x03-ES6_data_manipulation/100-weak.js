export const weakMap = new WeakMap();

export function queryAPI(myArgument) {
  if (!weakMap.has(myArgument)) {
    weakMap.set(myArgument, 1);
  } else if (weakMap.get(myArgument) < 5) {
    weakMap.set(myArgument, weakMap.get(myArgument) + 1);
  } else {
    throw new Error('Endpoint load is high');
  }
}
