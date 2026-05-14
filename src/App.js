import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dynamicdata from "./pages/Dynamicdata";
import axios from "axios";
import { useState, useEffect } from "react";
import { useContext, memo } from "react";
import UserContext from "./context/UserContext";
import AppContext, { AppProvider } from "./context/AppContext";
import Login from "./pages/login_design";

const Otherpage = memo(() => {
  const { userdata, loading } = useContext(UserContext);

  return (
    <>
      <div>
        {
          loading ? (<p>Loading</p>) : (
            userdata.slice(0, 15).map((userDetails) => (
              <p key={userDetails.id}>
                <Link to={`/userDetailPage/${userDetails.id}`}>{userDetails.name} - {userDetails.address.city}</Link>
              </p>
            ))
          )
        }
      </div>
    </>
  );
});


function App() {

  const [userdata, setUserdata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataFetch = async () => {
      const userData = await axios.get('https://jsonplaceholder.typicode.com/users')
      setUserdata(userData.data);
      setLoading(false)
    }
    dataFetch();
  }, [])

  const { theme, updateTheme, loginuser, login, logout } = useContext(AppContext);

  return (
    <>
      <UserContext.Provider value={{ userdata, loading }}>
        
          <div style={{
            background: theme === "dark" ? "#222" : "#fff",
            color: theme === "dark" ? "#fff" : "#000",
            minHeight: "100vh"
          }}>
            <nav style={{ display: "flex", justifyContent: "space-around" }}>
              <Link to="/">Home</Link>
              <Link to="/aboutusss">About</Link>
              <Link to="/ccc">Conatc</Link>
              <Link to="/other-route">Other</Link>

              <Link to="/login-page">Login Page</Link>


              <button onClick={updateTheme}>Theme</button>

              {
                loginuser ? (
                  <button onClick={logout}>Logout</button>
                ) : (
                  <button onClick={login}>Login</button>
                )
              }
            </nav>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutusss" element={<About />} />
              <Route path="/ccc" element={<Contact />} />
              <Route path="/other-route" element={<Otherpage />} />
              <Route path="/userDetailPage/:id" element={<Dynamicdata />} />
              <Route path="/login-page" element={<Login />} />
            </Routes>
          </div>
        
      </UserContext.Provider>
      
    </>
  );
}

export default App;
