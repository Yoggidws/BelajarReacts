import Home from "./pages/home/Home"
import Topbar from "../src/components/topbar/TopBar"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Write from "./pages/write/Write"
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single"
import Troubleshoot from "./components/troubleshoot/Troubleshoot"
import {
  BrowserRouter as Router,
  Routes,
  Route
}
  from "react-router-dom";
import { useContext } from "react"
import { Context } from "./context/Context"

function App() {
  const { user } = useContext(Context)
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="/cats/" element={<Troubleshoot />} />
      </Routes>
    </Router>
  );
}

export default App;
