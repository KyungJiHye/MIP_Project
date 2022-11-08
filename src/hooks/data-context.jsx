import { createContext, useContext, useReducer } from 'react';

const SKEY = 'mipdata';

const SampleData = {
  books: [
    {
      id: 1,
      title: 'My Private Book',
      marks: [],
    },
  ],
};

const reducer = (data, action) => {
  let newData;
  switch (action.type) {
    case 'add':
      newData = {
        ...data,
        books: [...data.books, { id: 0, title: '', marks: [] }],
      };
      break;

    case 'save':
      newData = {
        ...data,
        books: [
          ...data.books.filter((_book) => _book.id !== action.payload.id),
          action.payload,
        ],
      };
      break;

    case 'remove':
      newData = {
        ...data,
        books: [...data.books.filter((_book) => _book.id !== action.payload)],
      };
      break;

    case 'add-mark':
      newData = {
        ...data,
      };
      break;

    // case 'save-mark':
    //   newData = {
    //     ...data,
    //     books: [
    //       ...data.books.filter((_book) => _book.id !== action.payload),
    //       action.payload,
    //     ],
    //   };
    //   break;

    case 'remove-mark':
      newData = {
        ...data,
        books: [...data.books.filter((_book) => _book.id !== action.payload)],
      };
      break;

    default:
      throw new Error('Not Defined Action!!');
  }

  localStorage.setItem(SKEY, JSON.stringify(newData));
  return newData;
};

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem(SKEY)) || SampleData
  );

  const addBook = () => {
    dispatch({ type: 'add' });
  };

  // 수정(등록포함)
  const saveBook = (book) => {
    if (!book.id) {
      book.id = Math.max(...data.books.map((_book) => _book.id)) + 1;
    }
    dispatch({ type: 'save', payload: book });
  };

  const removeBook = (bookId) => {
    dispatch({ type: 'remove', payload: bookId });
  };

  const addMark = (book) => {
    book.marks.push({ id: 0, image: '', title: '', description: '' });
    dispatch({ type: 'add-mark', payload: book });
  };

  const saveMark = (book, mark) => {
    if (!mark.id || isNaN(mark.id)) {
      const allMarks = [...data.books.map((book) => book.marks)];
      console.log('allMarks>>>', allMarks);
      mark.id = Math.max(...allMarks.flat().map((_mark) => _mark.id)) + 1;
    }
    dispatch({ type: 'save', payload: book });
  };

  const removeMark = (book, markId) => {
    console.log('book>>', book);
    console.log('markId>>', markId);
    book.marks = [...book.marks.filter((mark) => mark.id !== markId)];
    dispatch({ type: 'save', payload: book });
  };

  return (
    <DataContext.Provider
      value={{
        data,
        addBook,
        saveBook,
        removeBook,
        addMark,
        saveMark,
        removeMark,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
