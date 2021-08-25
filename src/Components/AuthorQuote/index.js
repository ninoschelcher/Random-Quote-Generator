import { useEffect, useState } from "react";
import "./style.css";

const AuthorQuote = (props) => {
  const [quoteAuthor, setQuoteAuthor] = useState([]);

  useEffect(() => {
    fetch(
      `https://quote-garden.herokuapp.com/api/v3/quotes/?author=${props.author}`
    )
      .then((response) => response.json())
      .then((data) => setQuoteAuthor(data.data));
  }, [props.author]);

  return (
    <div id="authorsection">
      <h1>{props.author}</h1>
      <div>
        {quoteAuthor.map((quote) => {
          return <h2 key={quote._id}>{quote.quoteText}</h2>;
        })}
      </div>
    </div>
  );
};

export default AuthorQuote;
