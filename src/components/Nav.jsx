import {MagnifyingGlassCircleIcon} from '@heroicons/react/24/outline';
import {BookmarkIcon} from '@heroicons/react/24/outline';


export const Nav = () => {
  return (
    <nav>
      <div className = 'flex items-center justify-between px-2 shadow'>
        <div className='flex'> 
          <BookmarkIcon className='w-13 h-6'/> Jeje Index
        </div>
        <div className='flex'> 
          <MagnifyingGlassCircleIcon className='w-13 h-5'/>
          <input type='text' placeholder='search...' className = 'w-24 h-10'/>
        </div>
      </div>
    </nav>
)};
