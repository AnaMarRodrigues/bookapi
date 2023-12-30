import BookList from "./components/BookList";
import "./App.css";
import BookDisplay from "./components/BookDisplay";
import axios from "axios";
import {useState,useEffect, SetStateAction} from "react";
import Filters from "./components/Filters";


function App() {
  const[search,setSearch]=useState("");
  const[bookData,setData]=useState([]);
  const [sortingOption, setSortingOption] = useState("relevance");

  const handleSortingChange = (newSortingOption: SetStateAction<string>) => {
    setSortingOption(newSortingOption);
  };

  const searchBook =(evt: { key: string; }) =>{
    if(evt.key==="Enter")
    {
      //console.log("hello") para testar , ordem é por relevance quando nao se diz nada
      const sortingQuery = sortingOption === "newest" ? "orderBy=newest" : "";
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${search}&${sortingQuery}&key=AIzaSyCB1apotem-S_Mr5tYfQk24rW_rAz6W_3w&maxResults=30`
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };

  

  
  useEffect(() => {
    // Default behavior or any other logic to determine initial sorting option
    const initialSortingQuery = sortingOption === "newest" ? "orderBy=newest" : "";

    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&${initialSortingQuery}&key=AIzaSyCB1apotem-S_Mr5tYfQk24rW_rAz6W_3w&maxResults=20`
      )
      .then((res) => {
        console.log("API response:", res.data);
        setData(res.data.items);
      })
      .catch((err) => console.log("API error:", err));
  }, [sortingOption]);



  return (
    <>
      <div className="header">
         
        <a href="#" className="logo">
          <img src="./src/assets/logo.svg" id="logo"></img>
        </a> 
        <div className="row1">
          <h1>
            Search for any book,
            <br />
            the world is endless!
          </h1>
          <img src="./src/assets/painting.svg" alt="painting_girl_reading"></img>
         
        </div>
        <div className="row2">
          <h2>What book are you looking for?</h2>
          <div className="search">
            <input type="text" placeholder="Example: Cruel Prince" 
            value={search} onChange={ (e) => setSearch(e.target.value)}
            onKeyPress={searchBook}/>
            
            <button>
              <img src="./src/assets/search.svg"></img>
            </button>
          </div>
        </div>
      </div>

      <div className="all">
        <div className="booklist">
        <BookList />
        </div>
        <div className="order">
        <Filters onFilterChange={handleSortingChange} />
        </div>
        <div className="container">
             {bookData.length > 0 && <BookDisplay book={bookData} />}        
        </div>
      </div>
    </>
  );
}


export default App;
