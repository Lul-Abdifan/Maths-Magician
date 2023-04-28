import React, { useState, useEffect } from "react";
const JOKE_URL = "https://api.api-ninjas.com/v1/jokes?limit=30";
const API_KEY = "0bwHBZbvIbFq4b7VVYxi/g==jQQ3THRSKXzpCxih";

function Quote() {
  const [randomJoke, setRandomJoke] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(JOKE_URL, {
          headers: {
            "X-Api-Key": API_KEY,
          },
        });
        const data = await response.json();
        const randomQuote = data[Math.floor(Math.random() * data.length)].joke;
        setRandomJoke(randomQuote);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <h1 className="notification">It is loading</h1>;
  }
  if (error) {
    return <div className="notification">There is some error</div>;
  }

  return (
    <div className="quote">
      <h2 className="quote-heading">Today's Quote:</h2>
      <p>{randomJoke}</p>
    </div>
  );
}

export default Quote;