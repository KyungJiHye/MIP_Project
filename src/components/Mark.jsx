import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import { useEffect, useReducer, useRef } from 'react';
import { useData } from '../hooks/data-context';

export const Mark = ({ book, mark }) => {
  const { saveMark, removeMark } = useData();
  const [isEditing, toggleEditing] = useReducer((pre) => !pre, !mark.id);
  const urlRef = useRef();

  const save = () => {
    if (isEditing) {
      mark.image = null;
      mark.title = 'ttt';
      mark.description = 'ddd';
      mark.url = urlRef.current.value;
      saveMark(book, mark);
    }
    toggleEditing();
  };

  useEffect(() => {
    if (urlRef.current)
      urlRef.current.value = mark.url || 'https://tailwindcss.com';
  }, [isEditing]);

  return (
    <div className='mb-1 box-border border-2 border-emerald-400'>
      {isEditing ? (
        <>
          <input
            type='text'
            ref={urlRef}
            className='mb-2 w-full rounded p-1.5'
            placeholder='https://....'
          />
        </>
      ) : (
        <div>
          <div>
            {mark.image && (
              <img
                alt={mark.title}
                src={mark.image}
                className='max-h-[100px] w-full'
              />
            )}
          </div>
          <h3 className='m-1 font-medium text-slate-700'>
            {mark.id}.{mark.title}
          </h3>
          <p className='m-1 text-sm text-gray-500'> {mark.description} </p>
        </div>
      )}
      {/* 수정 삭제를 붙일거다 */}
      <div className='item-center mr-3 flex justify-end'>
        <button
          onClick={save}
          className='mb-1 mr-1 rounded-full bg-emerald-500 p-2 hover:bg-emerald-700'
        >
          <PencilSquareIcon className='h-4 text-white' />
        </button>

        <button
          onClick={() => removeMark(book, mark.id)}
          className='mb-1 mr-1 rounded-full bg-rose-500 p-2 hover:bg-rose-700'
        >
          <TrashIcon className='h-4 text-white' />
        </button>
      </div>
    </div>
  );
};
