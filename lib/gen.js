const { range, charRange, flatten, rand } = require('./utils');


module.exports = function(size = 8, opts = {}) {
  const lower = charRange('a', 'z');
  const upper = charRange('A', 'Z');
  const number = charRange('0', '9');
  const symbol = '~!@#$%^&?,.;:[]'.split(/\B/);

  const map = {
    lower, upper, number, symbol
  };

  const types = opts.all ?
    Object.keys(map) :
    Object.keys(opts).filter(name => opts[name] && map[name]);

  const list = flatten(types.map(type => map[type]));
  return range(1, size).map(() => list[rand(list.length)]).join('');
};

