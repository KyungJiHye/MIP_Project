import { createContext, useContext, useReducer, useState } from 'react';

const SKEY = 'mipdata';

const SampleData = {
  books: [
    {
      id: 1,
      title: 'Movie',
      marks: [
        {
          id: 1,
          title: '어벤져스',
          image:
            'https://upload.wikimedia.org/wikipedia/ko/thumb/f/f2/%EC%96%B4%EB%B2%A4%EC%A0%B8%EC%8A%A4-_%EC%97%94%EB%93%9C%EA%B2%8C%EC%9E%84_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg/800px-%EC%96%B4%EB%B2%A4%EC%A0%B8%EC%8A%A4-_%EC%97%94%EB%93%9C%EA%B2%8C%EC%9E%84_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg',
          description: '재밌었다 아이언맨 채고>.<',
        },
      ],
    },
    {
      id: 2,
      title: 'Drama',
      marks: [
        {
          id: 2,
          title: '',
          marks: [
            {
              id: 2,
              title: '비밀의숲',
              image:
                'https://upload.wikimedia.org/wikipedia/ko/4/4c/%EB%93%9C%EB%9D%BC%EB%A7%88_%EB%B9%84%EB%B0%80%EC%9D%98_%EC%88%B2_%EB%8C%80%ED%91%9C_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg',
              description: '이게 그렇게 재밌다던데',
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'Music',
      marks: [
        {
          id: 3,
          title: '',
          marks: [
            {
              id: 3,
              title: 'Ella fitzgerald - Misty',
              image:
                'https://i1.sndcdn.com/artworks-000116410667-8amk4j-t500x500.jpg',
              description: '최애노래',
            },
          ],
        },
      ],
    },
  ],
};

// action: {type: 'save', payload: newData}
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
  // const [data, setData] = useState(SampleData);
  const [data, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem(SKEY)) || SampleData
  );

  const [searchStr, setSearchStr] = useState('');

  // Add Book 버튼 클릭시 호출되며, id=0인 book을 하나 끼워 넣는다!
  const addBook = () => {
    // setData({
    //   ...data,
    //   books: [...data.books, { id: 0, title: '', marks: [] }],
    // });
    dispatch({ type: 'add' });
  };

  // 수정(등록포함)
  const saveBook = (book) => {
    // 1. 현재 수정중인 book을 제외한 book 필터링
    // const books = data.books.filter((_book) => _book.id !== book.id);

    // 2. 만약 id=0인 등록 상태라면 기존 id 가장 큰 값에서 +1 해서 신규 id 생성
    if (!book.id) {
      book.id = Math.max(...data.books.map((_book) => _book.id)) + 1;
    }

    // 3. 새롭게 데이터를 만들 때, 현재 수정중인것을 제외한 books에,
    // 현재 수정중인 book 추가해서 새로운 books 생성
    // setData({
    //   ...data,
    //   books: [...books, book],
    // });
    dispatch({ type: 'save', payload: book });
  };

  const removeBook = (bookId) => {
    // setData({
    //   ...data,
    //   books: [...data.books.filter((_book) => _book.id !== bookId)],
    // });
    dispatch({ type: 'remove', payload: bookId });
  };

  const addMark = (book) => {
    book.marks.push({ id: 0, image: '', title: '', description: '' });
    dispatch({ type: 'add-mark', payload: book });
  };

  const saveMark = (book, mark) => {
    if (!mark.id || isNaN(mark.id)) {
      const allMarks = [...data.books.map((book) => book.marks)];
      console.log('allMarks>>>>', allMarks);
      mark.id = Math.max(...allMarks.flat().map((_mark) => _mark.id)) + 1;
    }
    // book.marks = [...book.marks.filter((_mark) => _mark.id !== mark.id), mark];
    dispatch({ type: 'save', payload: book });
  };

  const removeMark = (book, markId) => {
    console.log('book>>>', book);
    console.log('markId>>>', markId);
    // 해당 북에서 삭제하고자 하는 마크를 제외시키고
    book.marks = [...book.marks.filter((mark) => mark.id !== markId)];
    // 해당 북을 저장
    dispatch({ type: 'save', payload: book });
  };

  // useEffect(() => {
  //   // 브라우저의 localStorage에 값이 있으면 그것을 기본 데이터로 사용!
  //   const mipData = localStorage.getItem(SKEY);
  //   console.log(mipData);
  //   if (mipData) setData(JSON.parse(mipData));
  // }, []);

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
        searchStr,
        setSearchStr,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
