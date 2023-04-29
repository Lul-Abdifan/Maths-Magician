import React, { useState, useEffect } from 'react';

const JOKE_URL = 'https://api.api-ninjas.com/v1/jokes?limit=30';
const API_KEY = '0bwHBZbvIbFq4b7VVYxi/g==jQQ3THRSKXzpCxih';

function Quote() {
  const [randomJoke, setRandomJoke] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(JOKE_URL, {
          headers: {
            'X-Api-Key': API_KEY,
          },
        });
        const data = await response.json();
        const randomData = data[Math.floor(Math.random() * data.length)].joke;
        setRandomJoke(randomData);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <h1 className="notification">It is loading</h1>;
  }
  if (error) {
    return (
      <div>
        <h1 className="notification">There is some error</h1>
      </div>
    );
  }

  return (
    <div className="quote">
      <h2 className="quote-heading">Today&rsquo;s Quote:</h2>
      <p>{randomJoke}</p>
    </div>
  );
}

export default Quote;
