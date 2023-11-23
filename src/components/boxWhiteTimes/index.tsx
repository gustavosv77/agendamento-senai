import "./style.css";

const BoxWhiteTimes = () => {
  return (
    <div id="boxWhiteTimes">
      <div id="boxRooms">
        <header id="header-box-times">
          <h1 id="title-box-times">Agendamento</h1>
          <img src="public/menu-senai.png" alt="icone de menu" id="menu-img" />
        </header>
        <h2 id="title-lab1-times">LABORATÓRIO 3</h2>
        <h2 id="title-lab2-times">17/09/2023</h2>
        <h2 id="title-lab3-times">LABORATÓRIO 3 - 17/09/2023</h2>
        <h2 id="title-lab4-times">SETEMBRO - 2023</h2>
        <img
          src="public/calendario-senai.png"
          alt="calendario simples"
          id="calendario-img"
        />
        <img
          src="public/icon-maior.png"
          alt="icone de maior que"
          id="maior-icon-tim"
        />
        <img
          src="public/seta-direita-senai.png"
          alt="seta para a direita"
          id="seta-direita-tim"
        />
        <div id="box-blue-times">
          <div id="box-white-in-blue">
            <img src="public/clip-times.png" alt="clip cinza" id="clip-times" />

            <h3 id="morning-text">MATUTINO</h3>
            <div id="little-box1">
              <img src="public/icone-selecionar.png" alt="circulo de selecionar" id="circulo1"/>
              <img src="public/red-trash.png" alt="lixeira vermelha" id="red-trash"/>
              <h4 className="Person-text" id="person1">AI - Géssica</h4>
              <img src="public/icone-selecionar.png" alt="circulo de selecionar" id="circulo2"/>
              <h4 className="Person-text" id="person2">DI - Thiago</h4>
            </div>

            <h3 id="afternoon-text">VESPERTINO</h3>
            <div id="little-box2">
              <img src="public/icone-selecionar.png" alt="circulo de selecionar" id="circulo1"/>
              <h4 className="Person-text" id="person3">AI - João</h4>
              <img src="public/icone-selecionar.png" alt="circulo de selecionar" id="circulo2"/>
              <img src="public/caderno-verde.png" alt="caderno verde pequeno" id="caderno-verde"/>
              <h4 className="Person-text" id="person4">DI -</h4>
            </div>

            <h3 id="night-text">NOTURNO</h3>
            <div id="little-box3">
              <img src="public/icone-selecionar.png" alt="circulo de selecionar" id="circulo1"/>
              <h4 className="Person-text" id="person5">AI - Luiza</h4>
              <img src="public/icone-selecionar.png" alt="circulo de selecionar" id="circulo2"/>
              <h4 className="Person-text" id="person6">DI - Dener</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxWhiteTimes;
