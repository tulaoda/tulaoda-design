/**
 * 功能：格式化数据
 * 作者：tulaoda
 * 日期：2021.03.11
 */
const formatData = (dataSource: any, parentId = 0, arr = []) => {
  if (!Array.isArray(dataSource)) {
    return [];
  }

  dataSource.forEach((item) => {
    const tempItem = { ...item };
    tempItem.pParent = parentId;
    tempItem.pOpen = 1;
    if (!tempItem.children) {
      tempItem.pGroup = 0;
      tempItem.pClass = 'blue';
    }

    if (item.children) {
      tempItem.pGroup = 1;
      formatData(item.children, item.pID, arr);
    }

    delete tempItem.children;
    arr.push(tempItem);
  });
  return arr;
};

export { formatData };
