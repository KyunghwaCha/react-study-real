import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollors, setDollors] = useState(0);
  const [coin, setCoin] = useState(1);

  const putDollors = (e) => setDollors(e.target.value);
  const coinSelect = (e) => {
    const target = e.target.value;
    setCoin(target);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!loading && coins.length > 0) {
      setCoin(coins[0].quotes.USD.price);
    }
  }, [coins, loading]);

  return (
    <div>
      <h1>The Coins! {loading ? null : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select onChange={coinSelect}>
            {coins.map((item) => (
              <option key={item.id} value={item.quotes.USD.price}>
                {item.name} ({item.symbol}) : ${item.quotes.USD.price} USD
              </option>
            ))}
          </select>
          <hr />
          <div>
            <input type="number" value={dollors} onChange={putDollors} />
            <h2>{dollors / coin}</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
