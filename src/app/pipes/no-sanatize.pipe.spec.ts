import { NoSanatizePipe } from './no-sanatize.pipe';

describe('NoSanatizePipe', () => {
  it('create an instance', () => {
    const pipe = new NoSanatizePipe();
    expect(pipe).toBeTruthy();
  });
});
