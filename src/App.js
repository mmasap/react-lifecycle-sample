import { Route, Routes } from 'react-router-dom';

import MainHeader from './components/MainHeader';
import Lifecycle from './pages/Lifecycle';
import Timer from './pages/Timer';
import Fetch from './pages/Fetch';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path='/' element={<Lifecycle />} />
          <Route path='/fetch' element={<Fetch />} />
          <Route path='/timer' element={<Timer />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
