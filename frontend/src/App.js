import {
    Routes,
    Route
  } from "react-router-dom";
  import Home from "./pages/home/home";
  import Hotel from "./pages/hotel/hotel";
  import List from "./pages/list/list";
  import Login from "./pages/login/login";
  
  function App() {
    return (
      <div>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/list" element={<List/>}/>
          <Route path="/hotels" element={<Hotel/>}/>
          <Route path="/" element={<Login/>}/>
        </Routes>
      </div>
    );
  }
  
  export default App;