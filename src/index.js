module.exports = function check(str, bracketsConfig) {

  let condition = [];

  for (let i = 0; i < bracketsConfig.length; i++) {

    let item = bracketsConfig[i].join('');
    item = item.replace(/(\.|\^|\$|\*|\+|\?|\(|\)|\[|\]\{|\}|\\|\|)/g, '\\$&');
    condition.push( item );
  }

  let re = new RegExp('('+ condition.join('|') + ')', 'i');

  while (str.search(re) != -1 ) {
    str = str.replace(re, '');
  }

  return !str;
}