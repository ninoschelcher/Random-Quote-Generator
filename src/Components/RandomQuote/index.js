import { useEffect, useState } from "react";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style.css";
import AuthorQuote from "../AuthorQuote";
import Footer from "../Footer";

const RandomQuote = () => {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
      .then((response) => response.json())
      .then((data) => setQuote(data.data[0]));
  }, []);

  const handleClick = () => {
    fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
      .then((response) => response.json())
      .then((data) => setQuote(data.data[0]));
  };

  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <button onClick={handleClick}>
                  random <i className="material-icons autorenew">autorenew</i>
                </button>
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <section>
              <h1> &quot;{quote.quoteText} &quot;</h1>
              <Link to={"/" + quote.quoteAuthor}>
                <div>
                  <dl>
                    <dt>{quote.quoteAuthor}</dt>
                    <dt>{quote.quoteGenre}</dt>
                  </dl>
                  <span className="material-icons arrow_right_alt">
                    arrow_right_alt
                  </span>
                </div>
              </Link>
            </section>
          </Route>
          <Route exact path={"/" + quote.quoteAuthor}>
            <AuthorQuote author={quote.quoteAuthor} />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default RandomQuote;
