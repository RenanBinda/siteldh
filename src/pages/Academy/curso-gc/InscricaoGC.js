import React, { useState } from 'react';
import Navbar from '../../../components/Navbar';
import { Link } from 'react-router-dom';
import '../../../Styles/CursoGC.css';

function InscricaoGC() {
  const [formData, setFormData] = useState({ nome: '', email: '', instituicao: '', mensagem: '' });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    console.log('Dados enviados:', formData);
    // Aqui poderia ser integrada uma API de backend ou serviço como Formspree/Zapier
  };

  return (
    <div className="inscricao-page min-h-screen bg-gray-50">

      <header className="module-header" style={{ marginTop: '80px' }}>
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/cursogc">Curso</Link> > <Link to="cursogc/#modulos">Módulos</Link> > <span>Módulo 3</span>
          </nav>
        </div>
      </header>
      <div className="container max-w-2xl mx-auto py-16 px-6">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">Formulário de Inscrição</h1>
        {!enviado ? (
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl p-8 space-y-6">
            <div>
              <label className="block mb-1 font-semibold">Nome completo</label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="w-full border rounded px-4 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">E-mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded px-4 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Instituição</label>
              <input
                type="text"
                name="instituicao"
                value={formData.instituicao}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Mensagem (opcional)</label>
              <textarea
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                rows="4"
                className="w-full border rounded px-4 py-2"
              ></textarea>
            </div>
            <button type="submit" className="btn primary w-full py-2">Enviar Inscrição</button>
          </form>
        ) : (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-800 p-6 rounded">
            <h2 className="text-xl font-semibold mb-2">Inscrição enviada com sucesso!</h2>
            <p>Obrigado por se inscrever. Em breve você receberá mais informações no seu e-mail.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default InscricaoGC;
