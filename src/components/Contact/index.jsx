import '../../styles/_contact.scss'
import Form from './Form'

import {
  FiPhone as Phone,
  FiMail as Email,
  FiMapPin as MapPin,
} from 'react-icons/fi'

const Contact = () => {
  return (
    <section id="contact" className="Contact">
      <h1 className="Heading">Contato</h1>
      <div className="Contact--Container">
        <div className="Info--Container">
          <div className="Info">
            <Phone className="Icon" />
            <div className="Container">
              <h2 className="Name">Telefone</h2>
              <span className="Text">+55(14)981432251 </span>
            </div>
          </div>
          <div className="Info">
            <Email className="Icon" />
            <div className="Container">
              <h2 className="Name">E-Mail</h2>
              <span className="Text">tomasdc2016@gmail.com</span>
            </div>
          </div>
          <div className="Info">
            <MapPin className="Icon" />
            <div className="Container">
              <h2 className="Name">Local</h2>
              <span className="Text">
                Dois corregos, São Paulo, Brasil
              </span>
            </div>
          </div>
        </div>
        <Form />
      </div>
    </section>
  )
}

export default Contact