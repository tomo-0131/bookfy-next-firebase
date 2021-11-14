import { useContext, useState } from "react";
import axios from 'axios';
import Paper from '@mui/material/Paper';
import { InputText } from "/components/InputText";
// import { MovieList } from "./components/MovieList";
import { BookList } from "../components/BookList";
import dig from  "object-dig"
import { AuthProvider } from "/providers/AuthProvider";
import { AuthContext } from "/providers/AuthProvider";
import { TheHeader } from '../components/TheHeader'

export default function App() {
  // const [movies, setMovies] = useState([]);
  const [ books, setBooks ] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage ] = useState('');
  const [searchText, setSearchText] = useState("")
  const currentUser = useContext(AuthContext);

  const bookRender = () => {
    let bookDom
    if(dig(currentUser, 'currentUser', 'uid')) {
      bookDom =
      <div>
        <Paper component="form" sx={{ p: '5px 4px', display: 'flex' }}>
          <InputText
            searchRakutenBooks={searchRakutenBooks}
          />
        </Paper>
        <div className="books">
          <div className="books">
            {isLoading && !errorMessage ? (
              <span>Loading...</span>
            ) : errorMessage ? (
              <div>{ errorMessage }</div>
            ) : (
              books.map((book, index) => (
                <BookList key={`${index} - ${book.Item.title}`} book={book} />
              ))
            )}
          </div>
        </div>
      </div>
    } else {
      return null
    }
    return bookDom
  }

  // 楽天API 書籍検索
  const searchRakutenBooks = (searchText) => {
    setIsLoading(true);
    setErrorMessage(null);
    const encodeUrl = encodeURI(searchText)
    console.log(encodeUrl)
    axios.get(`https://app.rakuten.co.jp/services/api/BooksBook/Search/20130522?applicationId=1086884900424216159&title=${encodeUrl}&format=json`)
    .then((res)=>{
      if(res.data) {
        setBooks(res.data.Items)
        console.log(res.data)
        setIsLoading(false);
      } else {
        setErrorMessage("エラーが発生しました")
        setIsLoading(false)
      }
    })
  }

  return (
    <>
    <AuthProvider>
      <TheHeader />
      {bookRender()}
    </AuthProvider>
    </>
  );
}
