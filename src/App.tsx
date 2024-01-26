import { BrowserRouter, Routes, Route } from "react-router-dom";
import Characters from "./pages/Characters";
import Details from "./pages/Details";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="characters" element={<Characters />} />
        <Route path="details" element={<Details />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
