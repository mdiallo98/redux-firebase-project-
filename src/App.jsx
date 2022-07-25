import Home from './routes/homepage/home.component';
import { Routes, Route } from 'react-router-dom';

const Shop = () => {
  return (
    <div>
      <h1>Hello you can shop here </h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}>
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
