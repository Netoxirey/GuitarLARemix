import { useState } from "react"
import { useLoaderData, useOutletContext } from "@remix-run/react"
import { getGuitar } from "~/models/guitas.server"
import styles from "~/styles/guitars.css"

export function meta({data}) {
  if(!data) {
    return [
      {
        title: 'Guitar not found'
      },
      {
        description: 'Guitars, sales guitars, guitar, guitar not found'
      }
    ]
  }
  return [
    {
      title: `GuitarLA - ${data.data[0].attributes.name}`,
    },
    {
      description: `Guitars, sales guitars, guitar, ${data.data[0].attributes.name} `
    },
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

export async function loader({params}) {

  const { guitarsUrl } = params
  
  const guitar = await getGuitar(guitarsUrl)
 
  if(guitar.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Guitar not found'
    })
  }

  return guitar 

}


function GuitarUrl() {
  const guitar = useLoaderData()
  const {name, description, image, price} = guitar.data[0].attributes
  const [quantity, setQuantity] = useState(1)
  const {addToCart} = useOutletContext()
  const handleSubmit = (e) => {
    e.preventDefault()

    const selectedGuitar = {
      id: guitar.data[0].id,
      name,
      image: image.data.attributes.url,
      price,
      quantity,
    }

    addToCart(selectedGuitar)
   
  }
  return (
    <main className="contenedor guitar">
      <img className="image" src={image.data.attributes.url} alt={`Guitar image ${name}`} />
      <div className="content">
      <h3>{name}</h3>
      <p className="price">${price}</p>
      <p className="text">{description}</p>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="quantity">Quantity</label>
        <select name="quantity" id="quantity" onChange={e => setQuantity(+e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <input type="submit" value="Add to cart" />
      </form>
      </div>
    </main>
  )
}

export default GuitarUrl