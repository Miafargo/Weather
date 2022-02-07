import Home from "./pages/Home";
import Header from "./components/Header";
import Error from "./pages/Error";
import SingleCity from "./pages/SingleCity";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/city/:id' element={<SingleCity />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
