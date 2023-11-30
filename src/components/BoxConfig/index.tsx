import "./style.css";

const BoxConfig = () => {
  return (
    <>
      <div id="boxWhiteConfig"></div>
      <div id="config-box">
        <header id="header-box-config">
          <h1 id="title-config">Configuração</h1>
          <img src="public/seta-direita-senai.png" alt="seta branca" id="seta-config"/>
        </header>
        <div id="central">
          <img src="public/icon-login-email.png" alt="" id="att-datos-icon" className="icons-config"/>
          <h2 id="att-datos-text" className="config-texts">
            Atualizar Dados
          </h2>
        </div>
        <div id="central2">
          <img src="public/icon-login-password.png" alt="" id="att-pass-icon" className="icons-config"/>
          <h2 id="att-pass-text" className="config-texts">
            Atualizar Senha
          </h2>
        </div>
        <div id="central3">
          <img src="public/suporte-white.png" alt="" id="sup-config" className="icons-config"/>
          <h2 id="sup-text" className="config-texts">
            Suporte
          </h2>
        </div>
        <div id="central4">
          <img src="public/sair-white.png" alt="" id="sair-config" className="icons-config"/>
          <h2 id="sair-text" className="config-texts">
            Sair
          </h2>
        </div>
      </div>
    </>
  );
};

export default BoxConfig;
