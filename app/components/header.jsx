import { Link } from "@remix-run/react"
import Logo from "../../public/img/logo.svg"
import Navegation from "./navegation"

function Header() {


  return (
    <header className="header">
        <div className="contenedor bar">
            <Link to="/" className="logo">
                <img className="logo" src={Logo} alt="imagen logo"/>
            </Link>
           <Navegation/>
        </div>
    </header>
  )
}

export default Header