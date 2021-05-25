import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


const book = document.getElementById('book');

const fetchNames = () => {

    // empty array of promises
    const promises = [];

    //iterate thru all 11 and log it out
    for (let i = 1; i <= 11; i++) { 
        const url = `https://kekambas-bs.herokuapp.com/kekambas`;

        // for each one of our requests, push that promise onto our list of promises
        promises.push(fetch(url).then((res) => res.json()));
    }
    
    // lets every individual asynchronally run in paralell (loads everything at once instead of one by one)
    Promise.all(promises).then((results) => {

        // initialize it all in one line so we dont have to recreate it
        const book = results.map((result) => ({
            name: result.name,
            image: result.sprites["front_default"],
            shiny: result.sprites["front_shiny"],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id
        }));
        displayBook(book);
    });
};

// call this function...
// we want to take each one, and transform it into something that fits the format
const displayBook = (book) => {
    console.log(book);

    // 
    const bookHTMLString = book
        .map(
            // name for each individual entry: b
            // when b is called, a list (li) of strings is returned
            (b) => `
        <li class="card">

            <h2 class="card-title">${b.first_name}</h2>
            <h2 class="card-title">${b.last_name}</h2>
            <a class="btn btn-success" href="https://kekambas-bs.herokuapp.com/kekambas" role="button">Info</a>
        </li>
    `
        )
        // (above) display name
        .join('');
    book.innerHTML = bookHTMLString;
};

fetchBook();