import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline';

export const Mark = ({mark}) => {
  return (
    <div className='mb-1 box-border border-2 border-emerald-400'>
      <div>
        <img
          src={mark.image}
          alt={mark.title}
          className='max-h-[100px] w-full'
        />
    </div>
      <h3 className='text-slate-700 font-medium m-1'> {mark.title} </h3>
      <p className='text-sm text-gray-500 m-1'> {mark.Description} </p>
      
      {/* 수정 삭제를 붙일거다 */}
      <div className='item-center mr-3 flex justify-end'>

        <button className='rounded-full bg-emerald-500 p-2 mb-1 mr-1 hover:bg-emerald-700'>
        <PencilSquareIcon className='h-4 text-white' />
        </button>

        <button className='hover:bg-rose-700 rounded-full bg-rose-500 p-2 mb-1 mr-1'>
          <TrashIcon className='h-4 text-white' />
        </button>

      </div>
    </div>
  );
};
