import "./style.css";

const BoxUpdate = () => {
  return (
    <>
      <div id="boxWhiteUpdate"></div>
      <div id="update-box">
        <header id="header-box-update">
          <h1 id="title-update">Atualizar Dados</h1>
          <img
            src="public/seta-direita-senai.png"
            alt="seta branca"
            id="seta-update"
          />
        </header>
        <div id="inputs-update">
          <label htmlFor="nome" className="labels">Nome</label>
          <input type="text" className="datos-update" />
          <label htmlFor="email" className="labels">Email</label>
          <input type="email" className="datos-update" />
          <label htmlFor="cell" className="labels">Telefone</label>
          <input type="text" className="datos-update" />
        </div>
        <div id="inputs-password">
            <label htmlFor="password" className="labelsPass" id="pass-id">Senha</label>
          <input type="password" className="modal" />
          <label htmlFor="confirmPassword" className="labelsPass" id="pass-confirm-id">Confirmar Senha</label>
          <input type="password" className="modal" />
        </div>
      </div>
    </>
  );
};

export default BoxUpdate;
