var BigNumber = require('bignumber.js');
var chai = require('chai');

chai.should();
chai.use(require('../chai-bignumber'));
chai.config.includeStack = true;

describe('chai-bignumber', function() {
  var matchInvalidError = /to be an instance of string, number or BigNumber/;

  describe('equal/equals/eq', function() {
    it('should be equal', function() {
      var tests = [
        [10, 10],
        ['10', 10],
        [10, '10'],
        ['10', '10'],
        [10.5, 10.5],
        ['10.5', 10.5],
        [10.5, '10.5'],
        ['10.5', '10.5'],
        ['1.000000000000000001', '1.000000000000000001'],
        [new BigNumber('1.000000000000000001'), '1.000000000000000001'],
        ['1.000000000000000001', new BigNumber('1.000000000000000001')],
        [new BigNumber('1.000000000000000001'), new BigNumber('1.000000000000000001')]
      ];

      for (var i = 0; i < tests.length; i++) {
        var a = tests[i][0];
        var b = tests[i][1];
        a.should.be.bignumber.equal(b);
      }
    });

    it('should not be equal', function() {
      var tests = [
        [10, 11],
        ['11', 10],
        [10, '11'],
        ['10', '11'],
        [10.5, 10.6],
        ['10.5', 10.6],
        [10.6, '10.5'],
        ['10.6', '10.5'],
        ['1.000000000000000001', '1.000000000000000002'],
        [new BigNumber('1.000000000000000002'), '1.000000000000000001'],
        ['1.000000000000000002', new BigNumber('1.000000000000000001')],
        [new BigNumber('1.000000000000000001'), new BigNumber('1.000000000000000002')]
      ];

      for (var i = 0; i < tests.length; i++) {
        var a = tests[i][0];
        var b = tests[i][1];
        a.should.not.be.bignumber.equal(b);
      }
    });

    it('should fail if arguments are not string, number or BigNumber', function() {
      var tests = [
        [{}, 1],
        [1, {}],
        [function(){}, []]
      ];

      for (var i = 0; i < tests.length; i++) {
        var a = tests[i][0];
        var b = tests[i][1];
        (function() {
          a.should.be.bignumber.equal(b);
        }).should.throw(matchInvalidError);
      }
    });
  });

  describe('above/gt/greaterThan', function() {
    it('should be greater than', function() {
      var tests = [
        [15, 10],
        ['15', 10],
        [15, '10'],
        ['15', '10'],
        [10.6, 10.5],
        ['10.6', 10.5],
        [10.6, '10.5'],
        ['10.6', '10.5'],
        ['1.000000000000000002', '1.000000000000000001'],
        [new BigNumber('1.000000000000000002'), '1.000000000000000001'],
        ['1.000000000000000002', new BigNumber('1.000000000000000001')],
        [new BigNumber('1.000000000000000002'), new BigNumber('1.000000000000000001')]
      ];

      for (var i = 0; i < tests.length; i++) {
        var a = tests[i][0];
        var b = tests[i][1];
        a.should.be.bignumber.greaterThan(b);
      }
    });

    it('should not be greater than', function() {
      var tests = [
        [10, 10],
        ['10', 10],
        [10, '10'],
        ['10', '10'],
        [10.4, 10.5],
        ['10.4', 10.5],
        [10.4, '10.5'],
        ['10.4', '10.5'],
        ['1.000000000000000001', '1.000000000000000002'],
        [new BigNumber('1.000000000000000001'), '1.000000000000000002'],
        ['1.000000000000000001', new BigNumber('1.000000000000000002')],
        [new BigNumber('1.000000000000000001'), new BigNumber('1.000000000000000002')]
      ];

      for (var i = 0; i < tests.length; i++) {
        var a = tests[i][0];
        var b = tests[i][1];
        a.should.not.be.bignumber.greaterThan(b);
      }
    });

    it('should fail if arguments are not string, number or BigNumber', function() {
      var tests = [
        [{}, 1],
        [1, {}],
        [function(){}, []]
      ];

      for (var i = 0; i < tests.length; i++) {
        var a = tests[i][0];
        var b = tests[i][1];
        (function() {
          a.should.be.bignumber.greaterThan(b);
        }).should.throw(matchInvalidError);
      }
    });
  });

  describe('least/gte', function() {
    it('should be greater than or equal to', function() {
      var tests = [
        [15, 10],
        ['15', 10],
        [15, '10'],
        ['15', '10'],
        [10.5, 10.5],
        ['10.5', 10.5],
        [10.6, '10.5'],
        ['10.6', '10.5'],
        ['1.000000000000000002', '1.000000000000000001'],
        [new BigNumber('1.000000000000000002'), '1.000000000000000001'],
        ['1.000000000000000001', new BigNumber('1.000000000000000001')],
        [new BigNumber('1.000000000000000002'), new BigNumber('1.000000000000000001')]
      ];

      for (var i = 0; i < tests.length; i++) {
        var a = tests[i][0];
        var b = tests[i][1];
        a.should.be.bignumber.at.least(b);
      }
    });

    it('should not be greater than or equal to', function() {
      var tests = [
        [10, 15],
        ['10', 15],
        [10, '15'],
        ['10', '15'],
        [10.5, 10.6],
        ['10.5', 10.6],
        [10.5, '10.6'],
        ['10.5', '10.6'],
        ['1.000000000000000001', '1.000000000000000002'],
        [new BigNumber('1.000000000000000001'), '1.000000000000000002'],
        ['1.000000000000000001', new BigNumber('1.000000000000000002')],
        [new BigNumber('1.000000000000000001'), new BigNumber('1.000000000000000002')]
      ];

      for (var i = 0; i < tests.length; i++) {
        var a = tests[i][0];
        var b = tests[i][1];
        a.should.not.be.bignumber.at.least(b);
      }
    });

    it('should fail if arguments are not string, number or BigNumber', function() {
      var tests = [
        [{}, 1],
        [1, {}],
        [function(){}, []]
      ];

      for (var i = 0; i < tests.length; i++) {
        var a = tests[i][0];
        var b = tests[i][1];
        (function() {
          a.should.not.be.bignumber.at.least(b);
        }).should.throw(matchInvalidError);
      }
    });
  });

  describe('below/lt/lessThan', function() {
    it('should be less than', function() {
      var tests = [
        [10, 15],
        ['10', 15],
        [10, '15'],
        ['10', '15'],
        [10.5, 10.6],
        ['10.5', 10.6],
        [10.5, '10.6'],
        ['10.5', '10.6'],
        ['1.000000000000000001', '1.000000000000000002'],
        [new BigNumber('1.000000000000000001'), '1.000000000000000002'],
        ['1.000000000000000001', new BigNumber('1.000000000000000002')],
        [new BigNumber('1.000000000000000001'), new BigNumber('1.000000000000000002')]
      ];

      for (var i = 0; i < tests.length; i++) {
        var a = tests[i][0];
        var b = tests[i][1];
        a.should.be.bignumber.lessThan(b);
      }
    });

    it('should not be less than', function() {
      var tests = [
        [15, 10],
        ['15', 10],
        [15, '10'],
        ['15', '10'],
        [10.5, 10.5],
        ['10.5', 10.5],
        [10.6, '10.5'],
        ['10.6', '10.5'],
        ['1.000000000000000002', '1.000000000000000001'],
        [new BigNumber('1.000000000000000002'), '1.000000000000000001'],
        ['1.000000000000000001', new BigNumber('1.000000000000000001')],
        [new BigNumber('1.000000000000000002'), new BigNumber('1.000000000000000001')]
      ];

      for (var i = 0; i < tests.length; i++) {
        var a = tests[i][0];
        var b = tests[i][1];
        a.should.not.be.bignumber.lessThan(b);
      }
    });

    it('should fail if arguments are not string, number or BigNumber', function() {
      var tests = [
        [{}, 1],
        [1, {}],
        [function(){}, []]
      ];

      for (var i = 0; i < tests.length; i++) {
        var a = tests[i][0];
        var b = tests[i][1];
        (function() {
          a.should.not.be.bignumber.lessThan(b);
        }).should.throw(matchInvalidError);
      }
    });
  });

  describe('most/lte', function() {
    it('should be less than or equal to', function() {
      var tests = [
        [10, 10],
        ['10', 10],
        [10, '10'],
        ['10', '10'],
        [10.4, 10.5],
        ['10.4', 10.5],
        [10.4, '10.5'],
        ['10.4', '10.5'],
        ['1.000000000000000001', '1.000000000000000002'],
        [new BigNumber('1.000000000000000001'), '1.000000000000000002'],
        ['1.000000000000000001', new BigNumber('1.000000000000000002')],
        [new BigNumber('1.000000000000000001'), new BigNumber('1.000000000000000002')]
      ];

      for (var i = 0; i < tests.length; i++) {
        var a = tests[i][0];
        var b = tests[i][1];
        a.should.be.bignumber.at.most(b);
      }
    });

    it('should not be less than or equal to', function() {
      var tests = [
        [15, 10],
        ['15', 10],
        [15, '10'],
        ['15', '10'],
        [10.6, 10.5],
        ['10.6', 10.5],
        [10.6, '10.5'],
        ['10.6', '10.5'],
        ['1.000000000000000002', '1.000000000000000001'],
        [new BigNumber('1.000000000000000002'), '1.000000000000000001'],
        ['1.000000000000000002', new BigNumber('1.000000000000000001')],
        [new BigNumber('1.000000000000000002'), new BigNumber('1.000000000000000001')]
      ];

      for (var i = 0; i < tests.length; i++) {
        var a = tests[i][0];
        var b = tests[i][1];
        a.should.not.be.bignumber.at.most(b);
      }
    });

    it('should fail if arguments are not string, number or BigNumber', function() {
      var tests = [
        [{}, 1],
        [1, {}],
        [function(){}, []]
      ];

      for (var i = 0; i < tests.length; i++) {
        var a = tests[i][0];
        var b = tests[i][1];
        (function() {
          a.should.not.be.bignumber.most(b);
        }).should.throw(matchInvalidError);
      }
    });
  });

  describe('finite', function() {
    it('should be finite', function() {
      var tests = [
        -100.5,
        -100,
        0,
        100,
        100.5,
        '1000000000000000001',
        new BigNumber('1000000000000000001')
      ];

      for (var i = 0; i < tests.length; i++) {
        var a = tests[i];
        a.should.be.finite;
      }
    });

    it('should not be finite', function() {
      var tests = [
        100.5 / 0,
        NaN,
        Infinity,
        -Infinity,
        +Infinity,
        new BigNumber(100).dividedBy(0)
      ];

      for (var i = 0; i < tests.length; i++) {
        var a = tests[i];
        a.should.not.be.finite;
      }
    });

    it('should fail if argument is not string, number or BigNumber', function() {
      var tests = [
        {},
        [],
        function(){}
      ];

      for (var i = 0; i < tests.length; i++) {
        var a = tests[i];
        (function() {
          a.should.be.finite;
        }).should.throw(matchInvalidError);
      }
    });
  });

  describe('integer', function() {
    it('should be integer', function() {
      var tests = [
        0,
        100,
        '1000000000000000001',
        new BigNumber('1000000000000000001')
      ];

      for (var i = 0; i < tests.length; i++) {
        var a = tests[i];
        a.should.be.an.integer;
      }
    });

    it('should not be integer', function() {
      var tests = [
        NaN,
        100.5,
        Infinity,
        -Infinity,
        +Infinity,
        '1.000000000000000001',
        new BigNumber('1.000000000000000001')
      ];

      for (var i = 0; i < tests.length; i++) {
        var a = tests[i];
        a.should.not.be.an.integer;
      }
    });

    it('should fail if argument is not string, number or BigNumber', function() {
      var tests = [
        {},
        [],
        function(){}
      ];

      for (var i = 0; i < tests.length; i++) {
        var a = tests[i];
        (function() {
          a.should.be.integer;
        }).should.throw(matchInvalidError);
      }
    });
  });

  describe('negative', function() {
    it('should be negative', function() {
      var tests = [
        -100,
        -100.50,
        -Infinity,
        '-1000000000000000001',
        new BigNumber('-1000000000000000001')
      ];

      for (var i = 0; i < tests.length; i++) {
        var a = tests[i];
        a.should.be.negative;
      }
    });

    it('should not be negative', function() {
      var tests = [
        NaN,
        0,
        100,
        100.50,
        Infinity,
        +Infinity,
        '1000000000000000001',
        new BigNumber('1000000000000000001')
      ];

      for (var i = 0; i < tests.length; i++) {
        var a = tests[i];
        a.should.not.be.negative;
      }
    });

    it('should fail if argument is not string, number or BigNumber', function() {
      var tests = [
        {},
        [],
        function(){}
      ];

      for (var i = 0; i < tests.length; i++) {
        var a = tests[i];
        (function() {
          a.should.be.negative;
        }).should.throw(matchInvalidError);
      }
    });
  });

  describe('zero', function() {
    it('should be zero', function() {
      var tests = [
        0,
        -0,
        '+0',
        new BigNumber('0')
      ];

      for (var i = 0; i < tests.length; i++) {
        var a = tests[i];
        a.should.be.zero;
      }
    });

    it('should not be zero', function() {
      var tests = [
        NaN,
        -100.50,
        -100,
        100,
        100.50,
        Infinity,
        +Infinity,
        -Infinity,
        '1000000000000000001',
        new BigNumber('1000000000000000001')
      ];

      for (var i = 0; i < tests.length; i++) {
        var a = tests[i];
        a.should.not.be.zero;
      }
    });

    it('should fail if argument is not string, number or BigNumber', function() {
      var tests = [
        {},
        [],
        function(){}
      ];

      for (var i = 0; i < tests.length; i++) {
        var a = tests[i];
        (function() {
          a.should.be.zero;
        }).should.throw(matchInvalidError);
      }
    });
  });
});
