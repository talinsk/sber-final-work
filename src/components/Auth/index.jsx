import React, {useState, useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import api from "../../Api";
import { UserCtx } from "../../context/UserContext";

export default ({login}) => {
    const [userName, setUserName] = useState("");
    const [pwd, setPwd] = useState("");
    const { setUser, setToken } = useContext(UserCtx);
    const navigation = useNavigate();
    const handler = (e) => {
        e.preventDefault();
        if (login) {
            api.login({email: userName, password: pwd}).then(ans => {
                console.log(ans);
                if (ans.data) {
                    setUser(ans.data._id);
                    setToken(ans.token);
                }
                navigation("/");
            })
        } else {
            console.log(userName);
            api.signup({email: userName, password: pwd}).then(ans => {
                // console.log(ans);
                // if (ans._id || ans.err.statusCode === 409) {
                    navigation("/signin");
                // }
            })
        }
    }
    return (
        <div>
            <form className="auth" onSubmit={handler}>
                <h1>{login ? "Вход" : "Регистрация"}</h1>
                <input type="email" placeholder="email" name="email" value={userName} required onInput={e => setUserName(e.target.value)}/>
                <input type="password" placeholder="password" name="password" value={pwd} required onInput={e => setPwd(e.target.value)}/>
                <button type="submit">{login ? "Войти" : "Зарегистрироваться"}</button>
                <Link to={login ? "/signup" : "/signin"}>
                    <button type="button">{login ? "Регистрация" : "Вход"}</button>
                </Link>
            </form>
        </div>
    )
}