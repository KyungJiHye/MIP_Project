import { Mark } from './Mark';

export const Book = ({ book }) => {
  return (
    <div className='mr-2 box-border basis-[360px] flex-none border-4 p-1.5'>
      <div className='text-xl font-bold text-slate-700'> {book.title} </div>
        {book.marks.length ? (
        book.marks.map((mark) => <Mark key={mark.id} mark={mark} />)
      ) : (
        <hr className='border-3 mt-0 mb-3' />
      )}
      <button className='float-right rounded-full bg-emerald-500 px-4 py-1 font-medium text-white hover:bg-emerald-700 '>
        + Add
      </button>
    </div>
  );
};
