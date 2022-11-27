import React from 'react';
import Header from './components/Header';
import Places from './components/Places';
import './style.css';
import data from "./data";

function App() {

  const places = data.map(item => {
    return(
      <Places 
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className="App">
      <Header />
      <section className='place-list'>
        {places}
      </section>
    </div>
  );
}

export default App;
