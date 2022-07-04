const arrayMap = (array: any[], callback: (item: any, index: number, arry: any[]) => any): any[] => {
  let i = -1;
  const len = array.length;
  const resArray = [];
  while (++i < len) {
    resArray.push(callback(array[i], i, array));
  }
  return resArray;
}

export = arrayMap
