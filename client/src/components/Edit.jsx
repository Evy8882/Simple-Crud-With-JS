import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
    const { id } = useParams()
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`/get_user/${id}`)
            .then((res) => {
                setData(res.data)
            })
            .catch(err => console.log(err));
        // console.table(data)

    }, [id]);

    const navigate = useNavigate();
    return (
        <div className="container">
            <Header></Header>
            {data.map((user) => {
                return (
                    <form action="" key={user.id_user} onSubmit={(e) => {
                        e.preventDefault();
                        axios.post(`/edit_user/${id}`, data[0])
                            .then((res) => {
                                navigate('/')
                                console.log(res)
                            })
                            .catch((err) => console.log(err))
                    }}>
                        <h2>Editar usuário</h2><br />
                        <label htmlFor="name">Nome: </label>
                        <input type="text"
                            name="name"
                            id="name"
                            value={user.name}
                            required
                            onChange={(e) => setData([{ ...user, name: e.target.value }])} />
                        <label htmlFor="email">Email: </label>
                        <input type="email"
                            name="email"
                            id="email"
                            value={user.email}
                            required
                            onChange={(e) => setData([{ ...user, email: e.target.value }])} />
                        <input type="submit" name="submit" value="Salvar" />
                        <input type="button" name="back" value="Cancelar" onClick={()=>navigate("/")} />
                    </form>)
            })}
        </div>
    )
}
export default Edit