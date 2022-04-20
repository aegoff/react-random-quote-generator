import React, {useEffect,useState} from "https://cdn.skypack.dev/react";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

  function getQuote() {
    var x = Math.floor(Math.random() * (103 - 1) + 1);
    return fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson["quotes"][x]);
        return responseJson["quotes"][x];
      })
  
      .catch((error) => {
        console.error(error);
      });
  }



//////////
function Header(){
  return(
    <div className='row' style={{minHeight:'15vh'}}>
      <div className="col-12 text-center pt-3" style={{backgroundColor:'purple'}}>
          <h1 style={{color:'white'}}>Random Quote Generator</h1>
      </div>
    </div>
  );
}

function Footer(){
  return(
    <div className="row mb-0" style={{overflow:'hidden',minHeight:'5vh'}}>
      <div className='col-12' style={{width:'100%',backgroundColor:'purple'}}>
          <h4 style={{color:'white'}}>&copy; React, 2022</h4>
      </div>
    </div>
  );
}

function Wrapper(){
  const [quote, setQuote] = useState("");

  useEffect(() => {
    getQuote().then((newQuote) => setQuote(newQuote));
  }, []);
  return(
      <div className="row" style={{backgroundColor:'aliceblue',minHeight:'80vh',}}>
        <div className='col-md-6 mx-auto'>
          <div className="card mx-auto my-3 px-5 w-5 text-center" id="quote-box" style={{}}>
            <div className='card-header bg-white'>
            <h4>Random Quote Generator</h4>
            </div>
            <div className='card-body'>
              <span style={{display:'inline-block'}}><i className="fa fa-quote-left"/><p id="text">{quote.quote}</p><i className="fa fa-quote-right"></i></span>
              <p id="author">-{quote.author}</p>
              
            </div>
            <div className='card-footer row bg-white'>
              <div className='col-6'>
              <a
                className="btn"
                id="tweet-quote"
                title="Tweet this quote!"
                target="_blank"
                href="twitter.com/intent/tweet"
                
              >
                <i className="fa fa-twitter" style={{}}></i>
              </a>
              </div>
              <div className='col-6'>
            <button  id="new-quote" className="btn btn-primary w-5" onClick={() => getQuote().then((newQuote) => setQuote(newQuote))}>New Quote</button>
            </div>
            </div>
          </div>
        </div>
      </div>
  );
}


const App=()=> {
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getQuote().then((newAuthor) => setAuthor(newAuthor));
  }, []);
  return (
    <div className="container-fluid">
      <Header/>
      <Wrapper author={author} />
      <Footer/>
    </div>
  );
}


ReactDOM.render(<App/>, document.getElementById('root'));
