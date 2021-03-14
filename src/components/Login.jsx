import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Redirect } from "@reach/router";

const Login = () => {
    const { setUsername, setPassword, token } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsername(e.target.username.value);
        setPassword(e.target.password.value);
    };

    return !token ? (
        <>
            <h1>Dette er Login-siden!</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" id="username" />
                <input type="password" name="password" id="password" />
                <button type="submit">Log ind!</button>
            </form>
        </>
    ) : (
        <Redirect to="/admin" noThrow />
    );
};

export default Login;
