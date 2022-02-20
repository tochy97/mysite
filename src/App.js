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
import NotFound from "./pages/Error/NotFound";
import Blog from "./pages/Dashboard/Blog";

function App() {
  return (
    <>
      <main class="my-36 w-screen">
      <BrowserRouter>
        <NavComp/>
        <Footer/>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="signup" element={<Signup/>}/>
          <Route path="blog" element={<Blog/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      </main>
    </>
  );
}

export default App;
