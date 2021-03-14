import { navigate, Router } from "@reach/router";
import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { UserContext } from "../contexts/UserContext";
import MyToast from "./MyToast";
import AdminHome from "./AdminHome";
import AdminAnimals from "./AdminAnimals";

const Admin = () => {
    const { token, logout } = useContext(UserContext);

    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, [token]);

    const handleLogout = () => {
        toast.info(MyToast, { autoClose: 1000 });
        setTimeout(() => {
            logout();
            navigate("/");
        }, 2500);
    };

    return (
        <>
            <div>
                <h2>Dette er Administrations-siden!</h2>
                <p>Den er skjult hvis man ikke er logget!</p>
                <button onClick={handleLogout}>Log ud!</button>
            </div>
            <Router>
                <AdminHome path="/" />
                <AdminAnimals path="animals" />
            </Router>
        </>
    );
};

export default Admin;
