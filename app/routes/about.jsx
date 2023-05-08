import { useOutletContext } from "@remix-run/react"
import image from "../../public/img/nosotros.jpg"
import styles from "../styles/about.css"

export function meta() {
  return [
    {
      title: "GuitarLA - about us",
    },
    {
      description: "Sale of Guitars - Music Blog"
    }
  ]
}

export function links() {
  return[
    {
      rel: "stylesheet",
      href: styles,

    },
    {
      rel: "preload",
      href: image,
      as: "image"
    }
  ]
}
function About() {


  return (
    <main className="contenedor about">
      <h2 className="heading">About</h2>
      <div className="content">
        <img src={image} alt="image about us" />
        <div>
          <p>Nam nec nibh molestie, gravida mi id, ultrices velit. Mauris luctus ligula id turpis efficitur, sed fringilla tellus mattis. Aliquam vel finibus nisl. Phasellus sed est mauris. Etiam rutrum quam at diam elementum, id consequat risus tristique. Pellentesque imperdiet, ante eu pulvinar ullamcorper, lorem tellus lacinia arcu, in iaculis urna tortor sit amet quam. Sed maximus tristique diam. Nam molestie luctus lacus, ut dictum odio mollis quis. Praesent hendrerit vehicula ipsum, nec faucibus nisi tincidunt et. In egestas leo non tincidunt dictum. </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet cursus urna, sit amet suscipit metus aliquet nec. Maecenas efficitur justo non tortor gravida semper. Proin pharetra pharetra arcu nec faucibus. Sed accumsan consequat libero, et pulvinar odio gravida sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum vitae orci eget velit placerat consequat eget a augue. Nulla vel odio vel lectus semper luctus vel et dolor. Maecenas ut sem sed ligula feugiat tincidunt. Donec efficitur eget orci non blandit. Vivamus vitae imperdiet felis. Fusce in mauris nec lorem vestibulum auctor ut id mi. Praesent tempor tempor purus, eu pulvinar ex suscipit sed. </p>
        </div>
      </div>
    </main>
  )
}

export default About