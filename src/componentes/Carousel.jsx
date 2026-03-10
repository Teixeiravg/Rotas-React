import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

function CarouselHome(){

    return(
        <Carousel autoPlay infiniteLoop showThumbs={false}>
            <div>
                <img src="https://www.solucaotecnologia.net/images/logo.png"/>
            </div>
            <div>
                <img src="https://techcd.com.br/wp-content/uploads/2022/02/solucoes-tecnologicas.jpg"/>
            </div>
            <div>
                <img src="https://vascaino.net/wp-content/uploads/2025/09/image-3-18.jpg"/>
            </div>
            <div>
                <img src="https://www.menosfios.com/wp-content/uploads/2023/05/post-solucoes-tecnologicas-blog-aiplates-1038x692-1.jpg"/>
            </div>
        </Carousel>
    )
}

export default CarouselHome