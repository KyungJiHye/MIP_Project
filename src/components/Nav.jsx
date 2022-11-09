// import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline';
import { BookmarkSquareIcon } from '@heroicons/react/24/outline';
import { useData } from '../hooks/data-context';
import { DropDown } from './DropDown';

export const Nav = () => {
  const { searchStr, setSearchStr, addBook } = useData();

  return (
 
      <div className='bg-cyan-100x h-screen  w-full overflow-y-hidden overflow-x-scroll'>
        <nav className='flex items-center justify-between px-2 shadow '>
          <div>
            <h1 className='flex text-2xl font-bold'>
              <BookmarkSquareIcon className='w-8 text-cyan-500' /> Review
            </h1>
          </div>

          <div>
            <DropDown />
            <button
              onClick={addBook}
              className='w-13 mr-2 rounded-sm bg-cyan-400 px-5 py-1 text-sm text-white hover:bg-cyan-500'
            >
              + Add Book
            </button>
          </div>

          <div>
            {/* <MagnifyingGlassCircleIcon className='w-4 absolute h-8' /> */}
            <input
              type='text'
              value={searchStr}
              onChange={(evt) => setSearchStr(evt.target.value)}
              placeholder='search...'
              className='h-6 w-24 rounded border border-slate-300 px-2'
            />
          </div>
        </nav>
      </div>
    </header>
  );
};
