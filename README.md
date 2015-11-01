# chai-bignumber
[![Build Status](https://travis-ci.org/asmarques/chai-bignumber.svg)](https://travis-ci.org/asmarques/chai-bignumber)

Chai assertions for comparing arbitrary-precision decimals using the [bignumber.js](https://github.com/MikeMcl/bignumber.js) library.

## Installation

```bash
npm install --save-dev chai-bignumber
```

## Usage

```javascript
var chai = require('chai');
chai.use(require('chai-bignumber'));
```

## Assertions

The following assertion methods are provided and will override the existing
builtin assertions if the `bignumber` property is explicitly set as part of
the chain:
- equal/equals/eq
- above/gt/greaterThan
- least/gte
- below/lt/lessThan
- most/lte

A set of additional assertion properties is also provided:
- finite
- integer
- negative
- zero

Values can be instances of `number`, `BigNumber` or `string` containing a
valid number. Only BDD style (`expect` or `should`) assertions are supported.

## Example

```javascript
// Methods
var result = new BigNumber('100000000000000000').plus(1);
var expected = '100000000000000001';
result.should.be.bignumber.equal(expected);
expect(result).to.be.bignumber.at.most(expected);
'1000'.should.be.bignumber.lessThan(2000);

// Properties
(100 / 0).should.not.be.finite;
expect(10).to.be.integer;
(-100).should.be.negative;
expect(1 - 1).to.be.zero;
```

## License

[MIT](LICENSE)
