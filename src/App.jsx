import { useState } from 'react';
import { Book } from './components/Book';
import { Nav } from './components/Nav';

const SampleData = {
  books: [
    {
      id: 1,
      title: 'Private Book',
      marks: [
        {
          id: 1,
          title: 'Mark Title...',
          image: 'https://tailwindcss.com/api/og?path=/docs/stroke-width',
          description: 'mark description',
        },
        {
          id: 2,
          title: 'Mark Title2...',
          image: 'https://tailwindcss.com/api/og?path=/docs/stroke-width',
          description: 'mark description2',
        },
      ],
    },
    { id: 2, title: 'React Study', marks: [] },
    { id: 3, title: 'JS Study', marks: [] },
  ],
};


function App() {
  const [data, setData] = useState(SampleData);

  return (
    <div>
      <header>
        <Nav />
      </header>
      <main className='justify - start px - 6 container mx-auto mt-5 flex max-w-full space-y-0 overflow-scroll'>
        {data.books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
        <div>
          <button className='md: - 0 shrink rounded-sm bg-emerald-500 px-5 py-1 font-medium text-white hover:bg-emerald-700'>
            {' '}
            + Add book{' '}
          </button>
        </div>

        <div className='justify - start px - 6 container mx-auto mt-5 flex max-w-full space-y-0 overflow-scroll'>
          {data.books.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </div>
        <div>
          <button className='md: - 0 shrink rounded-sm bg-emerald-500 px-5 py-1 font-medium text-white hover:bg-emerald-700'>
            {' '}
            + Add book{' '}
          </button>
        </div>
        ;
      </main>
      {/* <footer>
        Copyright Indiflex Jeje Cording
      </footer> */}
    </div>
  );
}

export default App;
