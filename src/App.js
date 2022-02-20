import NavComp from "./components/NavComp";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <>
      <div class="my-36 w-screen">
      <BrowserRouter>
        <NavComp/>
        <Footer/>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
