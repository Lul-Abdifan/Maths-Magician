import React, { useState, useEffect } from 'react';

function Quote() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch('https://api.ninjas.com/quotes/random')
      .then((response) => response.json)
      .then((data) => {
        setQuote(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(!error);
        setLoading(false);
      }, []);
  });
  if (loading) {
    return <h1>It is loading</h1>;
  }

  return (
    <div>
      <h1>
        {error}
        There is error
      </h1>
      <h1>{quote}</h1>
    </div>
  );
}

export default Quote;
