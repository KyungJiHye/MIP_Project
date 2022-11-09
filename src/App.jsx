import { Book } from './components/Book';
import { Nav } from './components/Nav';
import Footer from './components/Footer';
// import NotFound from './components/NotFound';
// import { useData } from './hooks/data-context';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div className='bg-cyan-100x h-screen  w-full overflow-y-hidden overflow-x-scroll'>
      <Routes>
        <Nav />
        <Book />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

//     <div className='bg-cyan-100x h-screen  w-full overflow-y-hidden overflow-x-scroll'>
//       <Nav />
//       <Routes>
//         <Route
//           path='/'
//           element={<div> 메뉴 보기에서 보고자 하는 BOX를 클릭하세요 </div>}
//         />
//         <Route path='/book/:category' element={<Book />} />
//         <Route path='/*' element={<NotFound />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// <div className='flex items-start p-4'></div>
//  {data.books
//       .sort((a, b) =>
//         a.id === 0 ? Number.MAX_SAFE_INTEGER : a.id - b.id
//       )
//       .map((book) => (
//         <Route
//           key={book.id}
//           book={book}
//           path='/box/:boxId'
//           element={<Book />}
//         />
//       ))}
//     <div>
//       {data.books.find((book) => !book.id) ? (
//         ''
//       ) : (
//         <button
//           onClick={addBook}
//           className='mr-2 w-64 rounded-sm bg-cyan-400 px-5 py-1 font-medium text-white hover:bg-cyan-500'
//         >
//           + Add Book
//         </button>
//       )}
