import { Meta, Links, Outlet, Scripts, LiveReload, isRouteErrorResponse, useRouteError, Link } from "@remix-run/react"
import styles from "./styles/index.css"
import Header from "./components/header"
import Footer from "./components/footer"
import { useEffect, useState } from "react"
export function meta() {
    return(
        [
            { charset: "utf-8" },
            { title: "GuitarLA - Remix" },
            { name: "viewport", content: "width=device-width,initial-scale=1" },
          ]
    )
}

export function links () {
    return (
        [
            {
                rel: 'stylesheet',
                href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
            },
            {
                rel: 'preconnect', 
                href: 'https://fonts.googleapis.com'
            },
            {
                rel: 'preconnect',
                href: 'https://fonts.gstatic.com',
                crossOrigin: "true"
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
            },
            {
                rel: 'stylesheet',
                href: styles
            }
        ]
    )
}


<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" rel="stylesheet"></link>

export default function App() {
    const cartLS = typeof window !== 'undefined'? JSON.parse(localStorage.getItem('cart')) ?? [] : null
    const [cart, setCart] = useState(cartLS)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        localStorage.setItem('cart',JSON.stringify(cart))
    },[cart])
    function addToCart(item) {
        const existingItem = cart.find((cartItem) => cartItem.name === item.name);
        if (existingItem) {
          const updatedCart = cart.map((cartItem) =>
            cartItem.name === item.name
              ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
              : cartItem
          );
          setCart(updatedCart);
        } else {
          setCart([...cart, item]);
        }
      }
      function total (products) {
         setTotalPrice(products.reduce((acc, product) => acc + (product.price * product.quantity), 0))
      }
      useEffect(() => {
        setTotalPrice(0)
        total(cart)
      },[cart])

      function deletProduct (productId) {
        const updatedCart = cart.filter(item => item.id !== productId)
        setCart(updatedCart)
      } 
    return(
        <Document>
            <Outlet context={{
                cart,
                setCart,
                addToCart,
                totalPrice,
                deletProduct,
            }}/>
        </Document>
    )
}

function Document({children}) {
    return(
        <html lang="en">
            <head>
                <Meta/>
                <Links/>
            </head>
            <body>
                <Header/>
                {children}
                <Footer/>
                <Scripts/>
                <LiveReload/>
            </body>
        </html>
    )
}

// handle error

export function ErrorBoundary() {
    let error = useRouteError();
  
    if(isRouteErrorResponse(error)) {
        return(
        <Document>
            <p className="error">{error.status} {error.statusText}</p>
            <Link className="error-link" to="/">return to main page</Link>
        </Document>
        )
    }
    return(
        <Document>
            <p className="error">{error.status} {error.statusText}</p>
            <Link className="error-link" to="/">return to main page</Link>
        </Document>
    )
  }