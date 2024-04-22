export default function iterateThroughObject(reportWithIterator) {
  let text = '';
  let counter = 0;
  const reportLength = reportWithIterator.length;
  for (const name of reportWithIterator) {
    counter += 1;
    if (counter === reportLength) {
      text = text.concat(name);
    } else {
      text = text.concat(name, ' | ');
    }
  }
  return text;
}
