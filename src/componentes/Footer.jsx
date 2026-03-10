import '../styles/style.css'

function Footer(){
    return(
        <footer style={{
            background: "#333",
            width: "98%",
            padding: "20px"
        }}>

            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px"
            }}>
                
                <p style={{color: "white", margin: 0}}>
                    © Direitos reservados por TechSolutions
                </p>

                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/960px-Facebook_f_logo_%282019%29.svg.png"
                    alt="Facebook"
                    style={{width:"20px"}}
                />

                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/250px-Instagram_logo_2022.svg.png"
                    alt="Instagram"
                    style={{width:"20px"}}
                />

                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0bGEl9v47XieEtHyj0TqTr1tOXJmib-KHtw&s"
                    alt="Rede social"
                    style={{width:"20px"}}
                />

            </div>

        </footer>
    )
}

export default Footer