import React from "react";
import atro from "../assets/astronauta.png";
import Header from "./Header";
import Footer from "./footer";

const Home = () => {
  return (
    <div>
      <Header />

      <section class="home">
        <div class="home-content">
          <h1> Bem-vindo! </h1>
          <h3>Esperamos que você esteja bem</h3>
          <p>
            O projeto foi cuidadosamente criado por duas estudantes do terceiro
            Semestre de Ciências da Computação da FURB. Tem como intuito testar
            as habilidades de programação de front-end e acima de tudo agradar
            os olhos de quem estiver vendo ♡{" "}
          </p>
          <div class="btn-box">
            <a href="https://www.instagram.com/b.esg/"> Brenda </a>
            <a href="https://www.instagram.com/mayaracsimoes/"> Mayara </a>
          </div>
        </div>
        <div>
          <img src={atro} class="imagemA" alt="" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
