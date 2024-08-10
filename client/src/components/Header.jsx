import React from "react";
import { Link } from "react-router-dom";


 function Header(){
    // const navigate = useNavigate()
    return (
        <header>
            <nav>
                {/* <a href="" onClick={()=>navigate('/')}>Início</a>
                <a href="" onClick={()=>navigate('/create')}>Novo</a> */}
                <Link to="/">Início</Link>
                <Link to="/create">Novo</Link>
            </nav>
        </header>
    )
 }
 export default Header