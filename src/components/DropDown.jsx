// import { BookmarkSlashIcon } from '@heroicons/react/24/outline';
import { Route } from 'react-router-dom';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useData } from '../hooks/data-context';

// import { useData } from '../hooks/data-context';

export const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useData();
  const [_data, setData] = useState();
  const params = useParams();
  const bookId = params.bookId;

  const dropDownClicked = () => {
    setIsOpen(!isOpen);
  };

  const BookList = () => {
    setData({ ..._data, _data });

    let BookTitleList = [];
    for (let i = 0; i < _data.books.length; i++) {
      BookTitleList.push(
        <li>
          <Link to={'/BookList/' + _data.books[i].id}>
            {_data.books[i].title}
          </Link>
        </li>
      );
    }
    return (
      <div>
        {isOpen && (
          <>
            <Route path='/BookList/*'></Route>
            <ul>{BookTitleList}</ul>
          </>
        )}
      </div>
    );
  };
};

export default DropDown;

//   return (
//     <div>
//       <button onClick={dropDownClicked}> 메뉴 보기 </button>

//       {isOpen && (
//         <ul>
//           <li>
//             <Link to={`/book/1`}>BOOk 1</Link>
//           </li>
//           <li>
//             <Link to={`/book/2`}>BOOk 2</Link>
//           </li>
//           <li>
//             <Link to={`/book/3`}>BOOK 3</Link>
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// };
