import React from 'react';
import { FaBook, FaFilePdf, FaTablet, FaPrint, FaPalette, FaUsers, FaFont, FaImage } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../Styles/LivroDesign.css';

const LivroDesign = () => {
  // Dados do projeto
  const projeto = {
    titulo: "Gestão do Conhecimento no Setor Público: Conceitos, Ferramentas e Práticas",
    autores: ["Klaus North", "Gregório Varvakis"],
    formatos: [
      { nome: "Impresso", icone: <FaPrint /> },
      { nome: "Kindle", icone: <FaBook /> },
      { nome: "EPUB", icone: <FaTablet /> },
      { nome: "PDF", icone: <FaFilePdf /> }
    ],
    diretrizes: {
      objetivo: "Profissional, claro e acessível, refletindo a seriedade do tema (gestão pública) com visual moderno e hierarquia de informações bem definida, compatível com versões digital (responsivo) e impressa.",
      publicos: ["Gestores públicos", "Acadêmicos", "Profissionais de administração"],
      estilo: {
        cores: [
          { nome: "Azul institucional", codigo: "#2A5CAA" },
          { nome: "Verde sustentabilidade", codigo: "#4CAF50" },
          { nome: "Cinza neutro", codigo: "#555555" },
          { nome: "Destaques (Laranja)", codigo: "#F57C00" }
        ],
        tipografia: {
          titulos: ["Roboto Bold", "Montserrat"],
          corpo: ["Source Sans Pro", "Open Sans"]
        },
        imagens: [
          "Ícones vetoriais (Thenounproject, Freepik) para ilustrar conceitos",
          "Fotos reais de contextos públicos (ex.: reuniões, treinamentos)"
        ]
      }
    }
  };

  return (
    <main className="livro-design-page">
      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{ backgroundColor: '#2A5CAA' }}
        aria-labelledby="livro-titulo"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 id="livro-titulo" className="text-white mb-3">
                Projeto Gráfico para o Livro
              </h1>
              <h2 className="display-4 text-white mb-4">{projeto.titulo}</h2>
              <div className="autores mb-4">
                <h3 className="h5 text-white-50">Autores:</h3>
                <ul className="list-unstyled text-white">
                  {projeto.autores.map((autor, i) => (
                    <li key={i}>{autor}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="formats-card p-4 bg-white rounded shadow">
                <h3 className="h4 mb-4 text-center">
                  <FaBook className="me-2" /> Formatos Disponíveis
                </h3>
                <ul className="list-unstyled">
                  {projeto.formatos.map((formato, i) => (
                    <li key={i} className="mb-3 d-flex align-items-center">
                      <span className="format-icon me-3" style={{ color: '#2A5CAA' }}>
                        {formato.icone}
                      </span>
                      <span className="format-name">{formato.nome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diretrizes Section */}
      <section 
        className="py-5"
        aria-labelledby="diretrizes-heading"
      >
        <div className="container">
          <h2 id="diretrizes-heading" className="text-center mb-5">
            <FaPalette className="me-2" /> Diretrizes Gerais de Design
          </h2>
          
          <div className="row g-4">
            {/* Objetivo */}
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h4 mb-4">Objetivo do Design</h3>
                  <p>{projeto.diretrizes.objetivo}</p>
                </div>
              </div>
            </div>
            
            {/* Público-Alvo */}
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h4 mb-4">
                    <FaUsers className="me-2" /> Público-Alvo
                  </h3>
                  <ul>
                    {projeto.diretrizes.publicos.map((publico, i) => (
                      <li key={i}>{publico}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estilo Visual Section */}
      <section 
        className="py-5 bg-light"
        aria-labelledby="estilo-heading"
      >
        <div className="container">
          <h2 id="estilo-heading" className="text-center mb-5">
            Estilo Visual
          </h2>
          
          {/* Cores */}
          <div className="row mb-5">
            <div className="col-12">
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-4">
                  <h3 className="h4 mb-4">Paleta de Cores</h3>
                  <div className="row g-3">
                    {projeto.diretrizes.estilo.cores.map((cor, i) => (
                      <div key={i} className="col-6 col-md-3">
                        <div 
                          className="color-swatch rounded p-3 mb-2"
                          style={{ backgroundColor: cor.codigo }}
                          aria-label={cor.nome}
                        ></div>
                        <p className="mb-1 fw-bold">{cor.nome}</p>
                        <p className="small text-muted mb-0">{cor.codigo}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tipografia */}
          <div className="row mb-5">
            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h3 className="h4 mb-4">
                    <FaFont className="me-2" /> Tipografia - Títulos
                  </h3>
                  <ul>
                    {projeto.diretrizes.estilo.tipografia.titulos.map((fonte, i) => (
                      <li key={i} className="mb-2">
                        <span 
                          className="font-sample"
                          style={{ fontFamily: fonte }}
                        >
                          {fonte} - ABCDEFGHIJKLMNOPQRSTUVWXYZ
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h3 className="h4 mb-4">
                    <FaFont className="me-2" /> Tipografia - Corpo
                  </h3>
                  <ul>
                    {projeto.diretrizes.estilo.tipografia.corpo.map((fonte, i) => (
                      <li key={i} className="mb-2">
                        <span 
                          className="font-sample"
                          style={{ fontFamily: fonte }}
                        >
                          {fonte} - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Imagens */}
          <div className="row">
            <div className="col-12">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h4 mb-4">
                    <FaImage className="me-2" /> Diretrizes para Imagens
                  </h3>
                  <ul>
                    {projeto.diretrizes.estilo.imagens.map((imagem, i) => (
                      <li key={i} className="mb-2">{imagem}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mockups Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Pré-visualização do Design</h2>
          
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-0">
                  <img 
                    src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Flivro-mockup-capa.jpg?alt=media&token=12345" 
                    alt="Mockup da capa do livro"
                    className="img-fluid rounded-top"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <h3 className="h5">Capa do Livro</h3>
                    <p className="small text-muted">Versão impressa e digital</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-0">
                  <img 
                    src="https://firebasestorage.googleapis.com/v0/b/leful-design-house-4b637.appspot.com/o/site_leful_heroku%2Fimagens%2Flivro-mockup-pagina.jpg?alt=media&token=54321" 
                    alt="Mockup de página interna"
                    className="img-fluid rounded-top"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <h3 className="h5">Página Interna</h3>
                    <p className="small text-muted">Exemplo de diagramação</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-dark text-white">
        <div className="container text-center">
          <h2 className="mb-4">Gostou do projeto gráfico?</h2>
          <p className="lead mb-5">Entre em contato para saber mais sobre nosso trabalho</p>
          <Link 
            to="/contato" 
            className="btn btn-primary px-4 py-3"
            style={{ backgroundColor: '#F57C00', border: 'none' }}
            aria-label="Entre em contato conosco"
          >
            Fale com nossa equipe
          </Link>
        </div>
      </section>
    </main>
  );
};

export default LivroDesign;