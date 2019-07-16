const assert = require('assert');
const mathServices = require('../index');

const cbNum = () => 5;
const cbString = () => 'test';
const cbTruthy = () => true;

const mathServicesFuncs = [
  {
    name: 'callOneService()',
    func: mathServices.callOneService
  },
  {
    name: 'callTwoService()',
    func: mathServices.callTwoService
  },
];

mathServicesFuncs.forEach(function(mathFunction) {
  describe(mathFunction.name, () => {
    it('returns 5', async () => {
      const result = await mathFunction.func(cbNum);
      assert.equal(result, 5, 'result should equal 5');
    });

    it('returns a string', async () => {
      const returnVal = await mathFunction.func(cbString);
      const result = typeof returnVal;
      assert.equal(result, 'string', 'result should return a string');
    });

    it('returns a truthy value', async () => {
      const result = await mathFunction.func(cbTruthy);
      assert.ok(result, 'result should be truthy but is falsey');
    });
  });
});

describe('remoteMathService', () => {
  it('returns 3', async function() {
    this.timeout(3000);
    const result = await mathServices.remoteMathService((err, answer) => answer);
    assert.equal(result, 3, 'result should equal 3');
  });
});
