import { useLoaderData } from "@remix-run/react"
import { getGuitars } from "~/models/guitas.server"
import styles from '../styles/guitars.css'
import GuitarList from "~/components/guitars-list"

export function meta() {
  return [
    {
      title:'GuitarLA - Store',
    },
    {
      description: 'GuitarLA - Our collection of guitars'
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

export async function loader() {
  const guitars = await getGuitars()
  
  return guitars.data
}

function Store() {
  const guitars = useLoaderData()
  return (
    <main className="contenedor">
      <GuitarList guitars={guitars}/>
    </main>
  )
}

export default Store