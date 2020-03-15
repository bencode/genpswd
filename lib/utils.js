function range(from, to) {
  const list = [];
  for (; from <= to; from++) {
    list.push(from);
  }
  return list;
}


function charRange(from, to) {
  const tr = c => c.charCodeAt(0);
  return range(tr(from), tr(to)).map(code => String.fromCharCode(code));
}


function flatten(list) {
  return list.reduce((acc, item) => acc.concat(item), []);
}


function rand(max) {
  return Math.floor(Math.random() * max);
}


module.exports = { range, charRange, flatten, rand };
