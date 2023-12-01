import React from "react";
import Header from "./Header";
import Footer from "./footer";
import { useState } from "react";
import { api } from "../lib/api";

export default function FormCadastro() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [statusText, setStatusText] = useState("");
  const [postCad, setPostCad] = useState({
    id: 1,
    nome: "",
    departamento: "",
    endereco: "",
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setPostCad({
      ...postCad,
      [name]: value,
    });
  };

  async function handleSubmitCad(event) {
    event.preventDefault();

    try {
      const response = await api.put("/cadastro", {
        id: postCad.id,
        nome: postCad.nome,
        departamento: postCad.departamento,
        endereco: postCad.endereco,
        email: postCad.endereco,
      });

      setStatusText(response.data.status);
      setMensagem(response.data.mensagem);
      setIsModalOpen(true);
    } catch (error) {
      console.log(error);
    }
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <Header />

      <section className="formcad-container">
        <form action="" className="formCadastro" onSubmit={handleSubmitCad}>
          <div className="divInput-id">
            <label htmlFor="">Id:</label>
            <input
              type="number"
              name="id"
              value={postCad.id}
              onChange={handleInputChange}
              className="inputForm"
            />
          </div>

          <div className="divForm">
            <div className="divInput">
              <label htmlFor="">Nome :</label>
              <input
                type="text"
                name="nome"
                value={postCad.nome}
                onChange={handleInputChange}
              />
            </div>
            <div className="divInput">
              <label htmlFor="">Departamento :</label>
              <input
                type="text"
                name="departamento"
                value={postCad.departamento}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="divForm">
            <div className="divInput">
              <label htmlFor="">Endereço :</label>
              <input
                type="text"
                name="endereco"
                value={postCad.endereco}
                onChange={handleInputChange}
              />
            </div>
            <div className="divInput">
              <label htmlFor="">email :</label>
              <input
                type="text"
                name="email"
                value={postCad.email}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <button className="buttonCadastro-inserir" type="submit">
            Inserir
          </button>
        </form>
      </section>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              X
            </span>
            <p style={{ color: statusText === "Ok" ? "green" : "red" }}>
              Status Text: {statusText}
            </p>
            <p style={{ color: statusText === "Ok" ? "green" : "red" }}>
              Mensagem do Servidor: {mensagem}
            </p>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
