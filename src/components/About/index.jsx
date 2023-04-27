import '../../styles/_about.scss'

import myImg from '../../assets/TomasImg.jpg'

const About = () => {
  return (
    <section id="about" className="About">
      <img
        src={myImg}
        alt="Tomas Avelino, desenvolvedor full stack"
        className="Image"
      />

      <div className="Content">
        <h1 className="Heading">Sobre mim</h1>
        <p className="Paragraph">
          Minha jornada como programador se iniciou em 2021, quando ainda estudava
          Tecnologia da Informação, foi quando tive contato com o desenvolvimento web,
          foi paixão a primeira vista, comecei a consumir muito conteúdo, comecei a desenvolver
          projetinhos simples, mas era muito gratificante termina-los, foi ai que resolvi me profissionalizar,
          então depois de algumas pesquisas resolvi ingressar no curso de Desenvolvimento web Full Stack da &nbsp;    
          <a
            alt="Site oficial da Trybe"
            href="https://www.betrybe.com"
            target="_blank"
            className="Link" rel="noreferrer"
          >
            Trybe
          </a>,
          onde me qualifiquei para ser um desenvolvedor web Full-Stack.
        </p>
      </div>
    </section>
  )
}

export default About