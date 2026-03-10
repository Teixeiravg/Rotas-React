import '../styles/style.css'
import empresaImg from '../assets/img.png'

function Sobre(){
    return(
        <div className="container">
            <h1>Sobre a SolutionsTech</h1>

            <img src={empresaImg} alt="SolutionsTech" className="imagemEmpresa"/>

            <p>
            A <strong>SolutionsTech</strong> nasceu com o propósito de desenvolver soluções digitais modernas,
            eficientes e acessíveis para empresas que desejam crescer no mundo tecnológico. 
            Nossa equipe é formada por profissionais especializados em desenvolvimento web e mobile,
            sempre utilizando tecnologias atuais e boas práticas de programação.
            </p>

            <p>
            Nosso compromisso é entregar projetos com <strong>qualidade, segurança e alto desempenho</strong>,
            garantindo que cada sistema desenvolvido atenda às necessidades reais de nossos clientes.
            Acreditamos que a tecnologia é uma ferramenta poderosa para transformar negócios,
            otimizar processos e melhorar a experiência das pessoas.
            </p>

            <p>
            Ao longo da nossa trajetória, conquistamos a confiança de diversos clientes graças ao
            nosso comprometimento com prazos, suporte técnico e excelência no desenvolvimento.
            Buscamos constantemente inovação, criatividade e evolução para oferecer
            soluções cada vez mais completas e preparadas para o futuro digital.
            </p>
        </div>
    )
}

export default Sobre