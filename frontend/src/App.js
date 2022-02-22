import NavComp from "./components/NavComp";
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
import { fetchPosts, fetchPostsNoUser } from "./redux/actionCreators/postActionCreators";
import Manage from "./pages/Admin/Manage";
import Edit from "./pages/Admin/Edit";

function App() {
  const dispatch = useDispatch();    

  const [pathname,setPathname] = useState(window.location.pathname)

  const { isLoggedIn, user, status, allowed, mounted } = useSelector(
    (state) =>({
      isLoggedIn:state.auth.isLoggedIn, 
      user:state.auth.user, 
      status:state.auth.status, 
      allowed:state.auth.allowed,
      mounted:state.auth.mounted,
  }), shallowEqual);

  console.log(mounted)

  useEffect(() => {
    setPathname(window.location.pathname)
    console.log(pathname)
      if(!isLoggedIn || !pathname.includes("/")){
          dispatch(checkUser());
      }
      if(pathname === "/" || pathname.includes("home") || pathname.includes("blog") || pathname.includes("manage") || pathname.includes("edit")){
        dispatch(setMount(true));
        dispatch(fetchPostsNoUser())
      }
  }, [isLoggedIn,dispatch,pathname, setPathname]);

  return (
    <>
      <main class="lg:m-36 my-36 m-10 self-start content-start flex-wrap">{
      <BrowserRouter>
        <NavComp/>
        <LeftPanel/>
        {
          !mounted
          ?
            <Loading/>
          :
          isLoggedIn
          ?
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="home" element={<Dashboard/>}/>
              <Route path="login" element={<LoggedIn/>}/>
              <Route path="signup" element={<LoggedIn/>}/>
              <Route path="blog/*" element={<Blog/>}/>
              <Route path="add" element={<Add/>}/>
              <Route path="manage" element={<Manage/>}/>
              <Route path="edit/*" element={<Edit/>}/>
              <Route path="/*" element={<NotFound/>}/>
            </Routes>
          :
            <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="home" element={<Dashboard/>}/>
              <Route path="login" element={<Login/>}/>
              <Route path="signup" element={<Signup/>}/>
              <Route path="blog/*" element={<Blog/>}/>
              <Route path="/*" element={<NotFound/>}/>
            </Routes>
        }
      </BrowserRouter>}
      </main>
    </>
  );
}

export default App;
