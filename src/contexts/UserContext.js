import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [token, setToken] = useState(sessionStorage.getItem("token"));

    useEffect(() => {
        if (username && password) {
            toast.info("Logger ind...");
            fetch("http://localhost:4000/auth/token", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: `username=${username}&password=${password}`,
            })
                .then((response) => response.json())
                .then((result) => {
                    sessionStorage.setItem("token", result.token);
                    setToken(result.token);
                })
                .catch((err) => {
                    console.log(err.status);
                    toast.error("Forkerte inputs!");
                });
        }
    }, [username, password]);

    const logout = () => {
        sessionStorage.removeItem("token");
    };

    return (
        <UserContext.Provider
            value={{ setUsername, setPassword, token, logout }}
        >
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
