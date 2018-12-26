import hello from '../hello'
import {expect} from 'chai'

describe('hello', () => {
  it('1+1 === 2', () => {
    expect(1 + 1).to.equal(2);
  });
  it('2+2 === 4', () => {
    expect(2 + 2).to.equal(4);
  })
});
