import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/Header.js';
import HomePage from './pages/HomePage.js';
import ProductPage from './pages/ProductPage.js';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <main>
        <Container>
          <Routes>
            <Route path='/' element={<HomePage/>} exact></Route>
            <Route path='/product/:id' element={<ProductPage/>} exact></Route>
          </Routes>
        </Container>
      </main>
    </BrowserRouter>
  );
}

export default App;
