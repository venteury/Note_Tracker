import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/:ctg" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
