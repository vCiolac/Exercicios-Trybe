const { myRemove } = require('./myRemove');

describe('função myRemove()', () => {

  it('"[1, 2, 3, 4], 3" must be [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  })
  it('"[1, 2, 3, 4]" must not be [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })
  it('"[1, 2, 3, 4], 5" must be [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
});

