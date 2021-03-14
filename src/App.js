import "./App.css";
import { Router } from "@reach/router";
import UserContextProvider from "./contexts/UserContext";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";
import Other from "./components/Other";
import Login from "./components/Login";
import Admin from "./components/Admin";

function App() {
    return (
        <div className="App">
            <UserContextProvider>
                <Router>
                    <Home path="/" />
                    <Other path="other" />
                    <Login path="login" />
                    <Admin path="admin/*" />
                </Router>
            </UserContextProvider>
            <ToastContainer
                position="top-left"
                transition={Flip}
                autoClose="2400"
            />
        </div>
    );
}

export default App;
