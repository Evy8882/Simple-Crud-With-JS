import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function Home() {
    const [data, setData] = useState([])
    const [del, setDel] = useState(false)
    const navigate = useNavigate()
    useEffect(
        () => {
            axios.get("/users")
                .then((res) => {
                    setData(res.data)
                })
                .catch((err) => console.log(err));
            setDel(false);
        }, [del])
    // console.table(data)
    return (
        <div className="container vh-100 vw-100">
            <Header></Header>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((user) => {
                            return (
                                <tr key={user.id_user}>
                                    <td>{user.id_user}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button onClick={() => navigate(`/edit/${user.id_user}`)}>Edit</button>
                                        <button onClick={() => {
                                            axios.delete(`/del_user/${user.id_user}`)
                                                .then((res) => { setDel(true) /*window.location.reload()*/ })
                                                .catch((err) => console.log(err))
                                        }
                                        }>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Home