import './App.scss';

import { Footer, Navbar, Signup } from './components/Routes';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<h1>Home Component</h1>} />
        <Route path='/add' element={<h1>Add Products Component</h1>} />
        <Route path='/update' element={<h1>Update Product Component</h1>} />
        <Route path='/logout' element={<h1>Logout Component</h1>} />
        <Route path='/profile' element={<h1>Profile Component</h1>} />
        <Route path='/signup' element={<h1>Signup Component</h1>} Component={Signup} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
