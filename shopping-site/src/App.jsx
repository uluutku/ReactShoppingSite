
// App.jsx
import React from 'react';
import Header from './Header.jsx';
import HomePage from './HomePage.jsx';
import { BasketProvider } from './BasketContext'; // Import the BasketProvider

const images = [
  'https://picsum.photos/seed/picsum/1024/768',
  'https://picsum.photos/seed/picsum/1024/767',
  'https://picsum.photos/seed/picsum/1024/766',
  'https://picsum.photos/seed/picsum/1024/765',
];


function App() {
  return (
    <BasketProvider>
      <div className="App">
          <Header />
          <HomePage />
      </div>
    </BasketProvider>
  );
}

export default App;
