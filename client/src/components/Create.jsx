import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Header from "./Header";

function Create() {
    const [values, setValues] = useState({
        username: "",
        email: "",
    })
    const navigate = useNavigate();
    return (
        <div className="container">
            <Header></Header>
            <form action="" onSubmit={(e) => {
                e.preventDefault();
                axios.post("./add_user", values)
                    .then((res) => {
                        navigate('/')
                        console.log(res)
                    })
                    .catch((err) => console.log(err))
            }}>
                <h2>Cadastrar novo usuário</h2><br />
                <label htmlFor="name">Nome: </label>
                <input type="text" name="name" id="name" value={values.username} required
                    onChange={(e) => setValues({ ...values, username: e.target.value })} />
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" value={values.email} required
                    onChange={(e) => setValues({ ...values, email: e.target.value })} />
                <input type="submit" name="submit" />
                <input type="button" name="back" value="Cancelar" onClick={()=>navigate("/")}/>
            </form>
        </div>
    )
}
export default Create