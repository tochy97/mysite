import Login from "./pages/Auth/Login";
//import Signup from "./pages/Auth/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import NotFound from "./pages/Messages/NotFound";
import Blog from "./components/Blog/Blog";
import Add from "./pages/Admin/Add";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { checkUser, setMount } from "./redux/actionCreators/authActionCreators";
import LoggedIn from "./pages/Messages/LoggedIn";
import Loading from "./pages/Messages/Loading";
import { fetchPostsNoUser } from "./redux/actionCreators/postActionCreators";
import Manage from "./pages/Admin/Manage";
import Edit from "./pages/Admin/Edit";
import Contact from "./pages/Dashboard/Contact/Contact";
import Success from "./pages/Messages/Success";
import SubNav from "./components/Nav/SubNav";
import Nav from "./components/Nav/Nav";
import About from "./pages/Dashboard/About/About";
import Maintenance from "./pages/Messages/Maintenance";
import Tutorials from "./pages/Tutorials/Tutorials";
import Projects from "./pages/Dashboard/Projects/Projects";
import Signup from "./pages/Auth/Signup";

function App() {
  const dispatch = useDispatch();

  const [pathname, setPathname] = useState(window.location.pathname)

  const { isLoggedIn, mounted } = useSelector(
    (state) => ({
      isLoggedIn: state.auth.isLoggedIn,
      mounted: state.auth.mounted,
    }), shallowEqual);

  useEffect(() => {
    setPathname(window.location.pathname)
    if (!isLoggedIn || !pathname.includes("/")) {
      dispatch(checkUser());
    }
    dispatch(setMount(true));
    dispatch(fetchPostsNoUser())
  }, [isLoggedIn, dispatch, pathname, setPathname]);

  return (
    <>
      <main class="self-start content-start flex-wrap">{
        <BrowserRouter>
          <Nav />
          <SubNav />
          <div class="xl:p-5 lg:p-4 p-3">
            {
              !mounted
                ?
                <Loading />
                :
                isLoggedIn
                  ?
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="home" element={<Dashboard />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/success" element={<Success />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/tutorials" element={<Tutorials />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="blog/*" element={<Blog />} />
                    <Route path="add" element={<Add />} />
                    <Route path="manage" element={<Manage />} />
                    <Route path="edit/*" element={<Edit />} />
                    <Route path="/*" element={<NotFound />} />
                  </Routes>
                  :
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="home" element={<Dashboard />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/success" element={<Success />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/tutorials" element={<Tutorials />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="blog/*" element={<Blog />} />
                    <Route path="/*" element={<NotFound />} />
                  </Routes>
            }
          </div>
        </BrowserRouter>}
      </main>
    </>
  );
}

export default App;
