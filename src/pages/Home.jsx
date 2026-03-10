import CarouselHome from "../componentes/Carousel"
import Card from "../componentes/Card"
import '../styles/style.css'

function Home(){
return(
<div className="container">
<CarouselHome/>
<h2>Informações</h2>
<div className="grid">
<Card titulo="Limpeza de CPU" texto="Limpeza geral da CPU" imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXfYT-sAj1m1KR0kUD5pqmhWBzTUqvEhAJYg&s"/>
<Card titulo="Instalação de Windows" texto="Instalação do sistema Windows 10/11 na máquina" imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZmM08BtXFcb-B2SuVCT_2g9FV4cNbh6zf9A&s"/>
<Card titulo="Análise de componentes" texto="Teste de qualidade de vida dos componentes do computador" imagem="https://m.media-amazon.com/images/I/81OPyV5KYNL._AC_UF350,350_QL80_.jpg"/>
<Card titulo="Instalação de Linux" texto="Instalação do sistema Linux 2026 bombando" imagem="https://img.odcdn.com.br/wp-content/uploads/2016/09/20160908105538.jpg"/>
<Card titulo="Remoção de Vírus Cavalo de Tróia" texto="Tiramos o cavalinho da chuva" imagem="https://img.odcdn.com.br/wp-content/uploads/2022/08/shutterstock_2063229158.jpg"/>
<Card titulo="Instalação de internet " texto="Instalação em domicílio" imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpNooYtQsXbtOqEtdDufiozx83Sj3gfZ4hOg&s"/>
<Card titulo="Formatação de máquina" texto="Resertar a máquina para configuração de fábrica" imagem="https://uolhost.uol.com.br/blog/wp-content/uploads/2020/07/quando-devo-formatar-os-computadores-da-minha-empresa-e-como-fazer-isso-1483477788439_600x320.jpg"/>
<Card titulo="Conserto de Telas" texto="Telas de celulares, televisores, retrovisores" imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9VP-Rg7H7BAA6grFW9TGpSGGE8ibGpvpuPA&s"/>
<Card titulo="Blindagem de aparelhos de alta tecnologia" texto="Aplicação de capas e películas em celulares" imagem="https://m.media-amazon.com/images/I/41ugszn3RRL._AC_UF1000,1000_QL80_.jpg"/>
<Card titulo="Desbloqueio de consoles" texto="Ps1 / Ps2 / Ps3 / Ps4 / Ps5 / Xbox 360 / Xbox 720 / Xbox One / Xbox Series s" imagem="https://down-br.img.susercontent.com/file/7782eb2f1ce80c0e46283f084add0a08"/>
<Card titulo="Aplicação de modificações" texto="Aplicação de MOD's para EAFC 26, GTA V, Minecraft, Pou" imagem="https://uploads.jovemnerd.com.br/wp-content/uploads/2023/11/gta_mods_cj__1oy72ep.jpg"/>
<Card titulo="Recuperação de contas" texto="Recuperações de contas EA, Steam, Epic, Facebook, Instagram, entre outras..." imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMo6H_sZKrfxqYZWdmibFGW4Y5ioX4asM8hg&s"/>
</div>
</div>
)
}
export default Home