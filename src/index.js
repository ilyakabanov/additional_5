module.exports = function check(str, bracketsConfig) {

  let condition = [],
      string = str;

  for (let i = 0, len = bracketsConfig.length; i < len; i++) {

    let item = bracketsConfig[i].join('');
    item = item.replace(/(\.|\^|\$|\*|\+|\?|\(|\)|\[|\]\{|\}|\\|\|)/g, '\\$&');
    condition.push(item);
  }

  const re = new RegExp('('+ condition.join('|') + ')', 'i');

  while (string.search(re) != -1) {
    string = string.replace(re, '');
  }

  return !string;
}