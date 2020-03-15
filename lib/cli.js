const args = require('minimist')(process.argv.slice(2));
const gen = require('./gen');

const size = +args._ || 8;

const opts = {
  ...args,
  lower: args.lower !== 'false',
  number: args.number !== 'false'
};

const pswd = gen(size, opts);
console.log(pswd);  // eslint-disable-line
