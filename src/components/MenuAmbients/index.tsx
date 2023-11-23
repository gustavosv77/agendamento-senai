import "./style.css"

const BoxMenu = () => {
    return <>
        <div id="open-menu">
          <header id="escuro"></header>
          <img src="public/sup-senai.png" alt="" id="sup-senai" />
          <img src="public/sair-senai.png" alt="" id="sair-senai" />
          <img src="public/config-senai.png" alt="" id="config-senai" />
          <h3 id="config-menu" className="title-menus">
            Configuração
          </h3>
          <h3 id="sup-menu" className="title-menus">
            Suporte
          </h3>
          <h3 id="sair-menu" className="title-menus">
            Sair
          </h3>
        </div>
    </>
}

export default BoxMenu;