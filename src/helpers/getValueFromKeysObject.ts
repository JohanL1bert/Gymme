const flattenObject = (obj: any): any => {
  return Object.keys(obj).reduce((acc: any, curr: any) => {
    if (typeof obj[curr] === 'object') {
      return { ...acc, ...flattenObject(obj[curr]) };
    }
    acc[curr] = obj[curr];
    return acc;
  }, {});
};

export const getValueFromKeysObject = (arrOfKey: Array<string>, obj: any) => {
  const nestedObject = flattenObject(obj);

  return arrOfKey.reduce((acc: any, curr: any) => {
    if (nestedObject[curr]) {
      acc += nestedObject[curr] + ' ';
    }
    return acc;
  }, '');
};
