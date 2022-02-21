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
import { useEffect } from "react";
import { checkUser } from "./redux/actionCreators/authActionCreators";
import LoggedIn from "./pages/Error/LoggedIn";
import Loading from "./pages/Error/Loading";

function App() {
  const dispatch = useDispatch();    
  const pathname = window.location.pathname
  const { isLoggedIn, user, status, allowed, mounted } = useSelector(
    (state) =>({
      isLoggedIn:state.auth.isLoggedIn, 
      user:state.auth.user, 
      status:state.auth.status, 
      allowed:state.auth.allowed,
      mounted:state.auth.mounted,
  }), shallowEqual);


  useEffect(() => {
      if(!isLoggedIn){
          dispatch(checkUser());
      }
  }, [isLoggedIn,dispatch,user]);

  return (
    <>
      <main class="lg:m-36 my-36 m-10 self-start content-start">{
      <BrowserRouter>
        <NavComp/>
        <Footer/>
        {
          !mounted
          ?
            <Loading/>
          :
          isLoggedIn
          ?
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/home" element={<Dashboard/>}/>
              <Route path="login" element={<LoggedIn/>}/>
              <Route path="signup" element={<LoggedIn/>}/>
              <Route path="blog" element={<Blog/>}/>
              <Route path="add" element={<Add/>}/>
              <Route path="/*" element={<NotFound/>}/>
            </Routes>
          :
            <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/home" element={<Dashboard/>}/>
              <Route path="login" element={<Login/>}/>
              <Route path="signup" element={<Signup/>}/>
              <Route path="blog" element={<Blog/>}/>
              <Route path="/*" element={<NotFound/>}/>
            </Routes>
        }
      </BrowserRouter>}
      </main>
    </>
  );
}

export default App;
