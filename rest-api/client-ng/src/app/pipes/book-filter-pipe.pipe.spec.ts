import { BookFilterPipe } from './book-filter-pipe.pipe';

describe('BookFilterPipePipe', () => {
  it('create an instance', () => {
    const pipe = new BookFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
