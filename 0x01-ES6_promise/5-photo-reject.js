export default function uploadPhoto(filename) {
  const myPromise = new Promise((_, reject) => {
    reject(new Error(`${filename} cannot be processed`));
  });
  return myPromise;
}
