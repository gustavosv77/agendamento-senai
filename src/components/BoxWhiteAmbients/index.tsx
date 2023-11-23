import "./style.css";

const BoxWhiteAmbients = () => {
  return (
    <div id="boxWhiteAmbients">
      <div id="boxRooms">
        <header id="header-box">
          <h1 id="title-box">Ambientes</h1>
          <img src="public/menu-senai.png" alt="icone de menu" id="menu-img" />
        </header>
      </div>
      <input type="search" name="pesquisa" id="pesquisar" />
      <img
        id="search-img"
        src="public/lupa-senai.png"
        alt="icone de pesquisar"
      />
      <div id="informatica1">
        <img
          src="public/pc-icon-senai.png"
          alt="icone de computador"
          id="info1-img"
        />
        <h3 className="title-lab">Laboratório de Informática 1</h3>
      </div>
      <div id="informatica2">
        <img
          src="public/pc-icon-senai.png"
          alt="icone de computador"
          id="info2-img"
        />
        <h3 className="title-lab">Laboratório de Informática 2</h3>
      </div>
      <div id="informatica3">
        <img
          src="public/pc-icon-senai.png"
          alt="icone de computador"
          id="info3-img"
        />
        <h3 className="title-lab">Laboratório de Informática 3</h3>
      </div>
      <div id="usinagem">
        <img
          src="public/usinagem-senai.png"
          alt="icone de usina"
          id="usin-img"
        />
        <h3 className="title-lab">Usinagem</h3>
      </div>
      <div id="mecanica">
        <img
          src="public/mecanica-senai.png"
          alt="icone de mecanica"
          id="mecan-img"
        />
        <h3 className="title-lab">Manutenção Mecânica</h3>
      </div>
      <div id="eletrica">
        <img
          src="public/eletrica-senai.png"
          alt="icone de eletrica"
          id="eletr-img"
        />
        <h3 className="title-lab">Elétrica</h3>
      </div>

      <div>
        <img
          src="public/icon-maior.png"
          alt="icone de maior que"
          id="maior-icon"
        />
        <img
          src="public/icon-menor.png"
          alt="icone de menor que"
          id="menor-icon"
        />
        <img
          src="public/bola-preta.png"
          alt="icone de circulo preto"
          id="black-circle"
        />
        <img
          src="public/bola-branca.png"
          alt="icone de circulo branco"
          id="white-circle1"
        />
        <img
          src="public/bola-branca.png"
          alt="icone de circulo branco"
          id="white-circle2"
        />
        <img
          src="public/bola-branca.png"
          alt="icone de circulo branco"
          id="white-circle3"
        />
      </div>
    </div>
  );
};

export default BoxWhiteAmbients ;
