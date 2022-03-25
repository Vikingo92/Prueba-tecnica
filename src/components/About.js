import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const About = () => {
  return (
    <div>
      <div>
        <h1>Acerca de nosotros</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, pariatur dolore aperiam quia fuga illo culpa sunt
          tenetur sequi ut soluta dolores totam rem consectetur impedit suscipit hic nam. Totam rerum possimus nam dignissimos
          suscipit perspiciatis magnam voluptate, ducimus repudiandae laborum, expedita maiores consequuntur voluptatum culpa?
          Repellat animi sunt iusto quo sequi quia commodi minima porro. Voluptate recusandae sed illo obcaecati porro facilis,
          rerum, quos impedit minus doloremque esse, necessitatibus velit unde voluptatem labore ipsa ratione! Laboriosam amet
          totam, iusto esse quidem qui, laborum voluptate est voluptatem reprehenderit deleniti voluptates itaque asperiores
          accusantium ut maiores temporibus quo! Eum, fugit ipsa!
        </p>
        <h2>Contacto</h2>
        <ul>
          <li>
            <FaFacebook size='2em'/>
          </li>
          <li>
            <FaTwitter size='2em' />
          </li>
          <li>
            <FaInstagram size='2em' />
          </li>

        </ul>
      </div>
    </div>
  )
}

export default About