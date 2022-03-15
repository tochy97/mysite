import Nav from "./components/Nav/Nav";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard/Dashboard";
import NotFound from "./pages/Error/NotFound";
import Blog from "./pages/Dashboard/Blog";
import Add from "./pages/Admin/Add";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { checkUser, setMount } from "./redux/actionCreators/authActionCreators";
import LoggedIn from "./pages/Error/LoggedIn";
import Loading from "./pages/Error/Loading";
import LeftPanel from "./components/LeftPanel";
import { fetchPostsNoUser } from "./redux/actionCreators/postActionCreators";
import Manage from "./pages/Admin/Manage";
import Edit from "./pages/Admin/Edit";
import Contact from "./pages/Dashboard/Contact";
import Success from "./pages/Error/Success";
import About from "./pages/Dashboard/About";
import SubNav from "./components/Nav/SubNav";

function App() {
  const dispatch = useDispatch();    

  const [pathname,setPathname] = useState(window.location.pathname)

  const { isLoggedIn, mounted } = useSelector(
    (state) =>({
      isLoggedIn:state.auth.isLoggedIn, 
      mounted:state.auth.mounted,
  }), shallowEqual);

  useEffect(() => {
    setPathname(window.location.pathname)
      if(!isLoggedIn || !pathname.includes("/")){
          dispatch(checkUser());
      }
      dispatch(setMount(true));
      dispatch(fetchPostsNoUser())
  }, [isLoggedIn,dispatch,pathname, setPathname]);

  return (
    <>
      <main class="lg:m-36 my-36 p-5 self-start content-start flex-wrap">{
      <BrowserRouter>
        <Nav/>
        <Footer/>
        {
          !mounted
          ?
            <Loading/>
          :
          isLoggedIn
          ?
            <>
              <SubNav/>
              <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="home" element={<Dashboard/>}/>
                <Route path="login" element={<LoggedIn/>}/>
                <Route path="signup" element={<LoggedIn/>}/>
                <Route path="blog/*" element={<Blog/>}/>
                <Route path="add" element={<Add/>}/>
                <Route path="manage" element={<Manage/>}/>
                <Route path="edit/*" element={<Edit/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="/*" element={<NotFound/>}/>
                <Route path="/success" element={<Success/>}/>
                <Route path="/about" element={<About/>}/>
              </Routes>
            </>
          :
            <>
              <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="home" element={<Dashboard/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="signup" element={<Signup/>}/>
                <Route path="blog/*" element={<Blog/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="/*" element={<NotFound/>}/>
                <Route path="/success" element={<Success/>}/>
                <Route path="/about" element={<About/>}/>
              </Routes>
            </>
        }
      </BrowserRouter>}
      </main>
    </>
  );
}

export default App;
