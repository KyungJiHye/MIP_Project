import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline';
import { BookmarkIcon } from '@heroicons/react/24/outline';

export const Nav = () => {
  return (
    <nav>
      <div className='flex items-center justify-between px-2 shadow'>
        <div>
          <h1 className='flex text-2xl font-bold'>
            <BookmarkIcon className='w-13 h-6 text-emerald-500' /> Jeje Index
          </h1>
        </div>
        <div className='flex'>
          <MagnifyingGlassCircleIcon className='w-15 h-8' />
          <input type='text' placeholder='search...' className='w-26 h-10' />
        </div>
      </div>
    </nav>
  );
};
