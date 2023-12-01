import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./footer";
import { api } from "../lib/api.js";
import { Link } from "react-router-dom";

export default function Cadastro2() {
  const [filteredCadData, setFilteredCadData] = useState([]);
  const [cadastro, setCadastro] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusText, setStatusText] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await api.get("/cadastro");
        setCadastro(response.data);
        setFilteredCadData(response.data);
      } catch (error) {
        console.log("erro ao buscar cad");
        setCadastro([]);
        setFilteredCadData([]);
      }
    };

    FetchData();
  }, []);

  const searchByID = (id) => {
    const filteredCad = cadastro.filter((cad) => {
      return cad.id === id;
    });

    setFilteredCadData(filteredCad);
  };

  function handleSubmitForm() {
    const id = parseInt(searchTerm, 10);

    searchByID(id);
  }

  async function handleDeleteCad(id) {
    try {
      const response = await api.delete(`/cadastro/${id}`);

      setStatusText(response.data.status);
      setMensagem(response.data.mensagem);
      console.log("Status Text:", response.data.status);
      console.log("Mensagem do servidor:", response.data.mensagem);

      setIsModalOpen(true);
    } catch (error) {
      console.log("Erro ao deletar Cad", error);
    }
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <Header />
      <main>
        <div className="form-container">
          <div>
            <label htmlFor="idNumerico">Informe o ID</label>
            <form action="" className="formid">
              <input
                type="number"
                id="idNumerico"
                name="idNumerico"
                onChange={(e) => setSearchTerm(e.target.value)}
                min={0}
                max={100}
                required
              />
              <button
                type="button"
                className="button blue mobile"
                id="cadastrarCliente"
                onClick={handleSubmitForm}
              >
                Consultar ID
              </button>
            </form>
          </div>

          <Link to="/CadForm">
            <button className="buttonCadastro">cadastrar</button>
          </Link>
        </div>
        <table className="records">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Departamento</th>
              <th>Endereço</th>
              <th>E-mail</th>
              <th>Ação</th>
            </tr>
          </thead>
          {filteredCadData.map((cad) => (
            <tbody key={cad.id}>
              <tr>
                <td>{cad.id}</td>
                <td>{cad.nome}</td>
                <td>{cad.departamento}</td>
                <td>{cad.endereco}</td>
                <td>{cad.email}</td>
                <td>
                  <button
                    type="button"
                    className="button red"
                    onClick={() => handleDeleteCad(cad.id)}
                  >
                    excluir
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>

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
      </main>
      <Footer />
    </>
  );
}
