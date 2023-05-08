import { useOutletContext } from '@remix-run/react'
import { ClientOnly } from 'remix-utils/build/react'
import styles from '~/styles/cart.css'

export function meta() {
    return [
        {
            title: 'GuitarLA - Cart'
        }
    ]
}

export function links() {
    return [
      {
        rel: 'stylesheet',
        href: styles
      }
    ]
  }

function Cart() {
  const {cart,totalPrice,setCart,deletProduct,} = useOutletContext()
  const handleChangue = (e,product) => {
    product.quantity = e.target.value
     const updatedCart = cart.map((item) => item.id === product.id? product: item)
    setCart(updatedCart)
  }
 
  return (
    <ClientOnly fallback={'loading...'}>
      {() => (
    <main className='contenedor'>
        <h1 className='heading'>Shopping Cart</h1>
        <div className='content'>
            <div className='cart'>
                <h2>Articles</h2>
                {cart?.length > 0 ? cart?.map((product) => (
                  <div key={product.id} className='product'>
                    <div>
                      <img src={product.image} alt={`an image of the guitar ${product.name}`}></img>
                    </div>
                    <div>
                      <p className='name'>{product.name}</p>
                      <p className='price'>${product.price}</p>
                      <p className='subtotla'>Subtotal <span>${product.price * product.quantity}</span></p>
                      <select className='select' name="quantity" id="quantity" defaultValue={product.quantity} onChange={(e) => handleChangue(e,product)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                      <button className='button' onClick={() => {deletProduct(product.id)}}>Delete</button>
                    </div>
                  </div>
                )
                  
                 ): <p>There are not products in your cart</p>}
            </div>
            <aside className='summary'>
                <h3>Order summary</h3>
                <p>total to pay: <span className='total'>${totalPrice}</span></p>
            </aside>
        </div>
    </main>
    )}
    </ClientOnly>
  )
}

export default Cart