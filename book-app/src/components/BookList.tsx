//import { Fragment } from "react"; Posso usar Fragment dentro das <> </> mas se deixar vazio ja assume como se estivesse lá o fragament
//list de categorias dos livros

function BookList() {
  const categories = [
   //
      { name: "Action", link: "/action" },
      { name: "Crime", link: "/crime" },
      { name: "Drama", link: "/drama" },
      { name: "Fantasy", link: "/fantasy" },
      { name: "Horror", link: "/horror" },
      { name: "Manga", link: "/manga" },
      { name: "Mistery", link: "/mistery" },
      { name: "Romance", link: "/romance" },
      { name: "Sci-Fi", link: "/sci-fi" },
      { name: "Supernatural", link: "/supernatural" },
      { name: "Thriller", link: "/thriller" },
        
  ];

 
  return (
    <div className="categories">
      <h1>Categories</h1>
      <ul className="list-group">
        {categories.map((category) => (
          <li key={category.name}>
            <a href={category.link}>{category.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;


