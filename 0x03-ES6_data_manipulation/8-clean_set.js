function trimDashes(str) {
  return str.replace(/^-*|-*$/g, '');
}

export default function cleanSet(mySet, startString) {
  if (!mySet || !startString || !(mySet instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  let finalString = '';
  let addedString = '';
  for (const elm of mySet) {
    if (typeof elm === 'string') {
      if (elm.slice(0, 3) === startString) {
        addedString = elm.slice(3);
        finalString = finalString.concat(addedString, '-');
      }
    }
  }
  return trimDashes(finalString);
}
