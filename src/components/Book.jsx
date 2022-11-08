import { useReducer, useState } from 'react';
import { ArrowPathIcon, Cog8ToothIcon } from '@heroicons/react/24/outline';
import { Mark } from './Mark';
import { useData } from '../hooks/data-context';

export const Book = ({ book }) => {
  const { saveBook, removeBook, addMark } = useData();
  const [bookTitle, setBookTitle] = useState(book.title);
  const [isEditing, toggleEditing] = useReducer((pre) => !pre, false);

  const changeBookTilte = () => {
    book.title = bookTitle;
    saveBook(book);
    toggleEditing();
  };

  return (
    <div className='mr-3 w-64 flex-shrink-0 rounded bg-gray-200 p-1.5'>
      <div className='xs:h-[78vh] h-[76vh] overflow-y-scroll sm:h-[80vh] md:h-[82vh] xl:h-[84vh]'>
        <div className='flex items-center justify-between text-xl font-bold text-slate-700'>
          <h3>{book.title}</h3>
          <button
            onClick={toggleEditing}
            className='text-sm text-emerald-500 hover:text-emerald-700'
          >
            {isEditing ? (
              <ArrowPathIcon className='w-5 text-emerald-500' />
            ) : (
              <Cog8ToothIcon className='w-5 text-emerald-500' />
            )}
          </button>
        </div>

        {book?.id === 0 || isEditing ? (
          <div className='px-1.5'>
            <input
              type='text'
              value={bookTitle}
              onChange={(evt) => setBookTitle(evt.target.value)}
              className='w-full rounded px-1'
              placeholder='타이틀..'
            />
            <button
              onClick={() => removeBook(book.id)}
              className='float-left text-rose-500 hover:text-rose-700'
            >
              Remove
            </button>
            <button
              onClick={changeBookTilte}
              className='text-emerald-500-500 hover:text-emerald-700-700 float-right'
            >
              Save
            </button>
          </div>
        ) : book?.marks?.length ? (
          book?.marks.map((mark) => (
            <Mark key={mark.id} book={book} mark={mark} />
          ))
        ) : (
          <hr className='border-3 mt-0 mb-3 border-white' />
        )}
      </div>
      <button
        onClick={() => addMark(book)}
        className='float-right mt-2 rounded-full bg-cyan-400 px-4 py-1 font-medium text-white hover:bg-cyan-500'
      >
        + Add Mark
      </button>
    </div>
  );
};
