import { Link, useLocation } from "@remix-run/react"
import image from "../../public/img/carrito.png"
function Navegation() {
    const location = useLocation()
  return (
    <nav className="nav">
                <Link 
                    to="/"
                    className={location.pathname === "/" ? "active" : ""}
                    >Home</Link>
                <Link 
                    to="/about"
                    className={location.pathname === "/about" ? "active" : ""}
                    >About</Link>
                    <Link 
                    to="/guitars"
                    className={location.pathname === "/guitars" ? "active" : ""}
                    >Store</Link>
                    <Link 
                    to="/blogs"
                    className={location.pathname === "/blogs" ? "active" : ""}
                    >Blog</Link>
                    <Link 
                    to="/cart"
                    ><img src={image} alt="shopping cart image" /></Link>
            </nav>
  )
}

export default Navegation