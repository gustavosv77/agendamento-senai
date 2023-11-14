import InputLogin from "../InputLogin";
import "./style.css";

const BoxWhiteLogin = () => {
  return <div id="boxWhiteLogin">
    <h1 id="title-app">Agendamento de Ambientes Educacionais</h1>
    <h2 id="title-login">Login</h2>
    <div id="boxWhiteLogin-gradiant">
      <img id="art" src="public\art.png" alt="mulher com computador" />
    </div>
      <img id="art-mobile" src="public\art-mobile.png" alt="mulher com computador" />
      <img id="logo-senai" src="public\logo-senai.png" alt="logomarca do Senai" />
      <InputLogin image={"public/icon-login-email.png"} type={"email"} alt={"ícone input de email"} idImg={"img-input-login-email"} idInput={"input-login-email"}/>
      <InputLogin image={"public/icon-login-password.png"} type={"password"} alt={"ícone input de senha"} idImg={"img-input-login-password"} idInput={"input-login-password"}/>
      <button type="submit" id="button-login">Continuar</button>
  </div>;
};

export default BoxWhiteLogin;
