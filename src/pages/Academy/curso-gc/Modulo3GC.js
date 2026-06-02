import React, { useEffect, useState, handleTextareaChange } from 'react';
import { Link } from 'react-router-dom';
import '../../../Styles/CursoGC.css';
import ePub from 'epubjs';
import Navbar from '../../../components/Navbar';


function Modulo3GC() {
  const [progress, setProgress] = useState(25);
  const [answers, setAnswers] = useState({
    question1: localStorage.getItem('caseAnswer-Pergunta 1: Quais seriam as primeiras ações que você recomendaria?') || '',
    question2: localStorage.getItem('caseAnswer-Pergunta 2: Como lidar com a resistência cultural?') || ''
  });

  useEffect(() => {
    const book = ePub("ebooks/Novo_EPUB3.epub");

    // Verifica se existe um marcador salvo
    const storedLocation = localStorage.getItem("epub-location");

    const rendition = book.renderTo("reader", {
      width: "100%",
      height: 800
    });

    // Aplica tema personalizado
    rendition.themes.register("custom", {
      body: {
        background: "#f4f4f4",
        color: "#333",
        lineHeight: "1.6",
        fontFamily: "Georgia, serif",
        padding: "1em"
      },
      a: {
        color: "#0077cc"
      }
    });
    rendition.themes.select("custom");

    rendition.display(storedLocation || undefined);

    // Atualiza bookmark ao mudar de página
    book.on("relocated", (location) => {
      localStorage.setItem("epub-location", location.start.cfi);
    });

    // Navegação por teclado
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        rendition.next();
      } else if (e.key === "ArrowLeft") {
        rendition.prev();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleAnswerChange = (e, question) => {
    const newAnswers = {
      ...answers,
      [question]: e.target.value
    };
    setAnswers(newAnswers);
    localStorage.setItem(`caseAnswer-${question}`, e.target.value);
  };

  const handleCompleteModule = () => {
    const newProgress = Math.min(progress + 25, 100);
    setProgress(newProgress);

    if (newProgress === 100) {
      alert('Parabéns! Você completou este módulo.');
    } else {
      alert('Progresso salvo! Continue com o próximo tópico.');
    }
  };

  const handleSaveProgress = () => {
    alert('Progresso salvo com sucesso!');
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="modulo3-page">
      <Navbar />

      <header className="module-header" style={{ marginTop: '80px' }}>
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/cursogc">Curso</Link> > <Link to="cursogc/#modulos">Módulos</Link> > <span>Módulo 3</span>
          </nav>
          <h1>Gestão do Conhecimento no Setor Público Brasileiro</h1>
          <p>História, conceitos e práticas da GC na administração pública brasileira</p>
          <div className="module-progress">
            <div className="progress-bar">
              <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>
            <span>{progress}% concluído</span>
          </div>
        </div>
      </header>

      <main className="container module-container">
        <aside className="module-sidebar">
          <h3>Conteúdo do Módulo</h3>
          <ul className="module-menu">
            <li><a href="#section1" onClick={(e) => scrollToSection(e, '#section1')}>3.1 Origem e evolução</a></li>
            <li><a href="#section2" onClick={(e) => scrollToSection(e, '#section2')}>3.2 Conceito na Administração Pública</a></li>
            <li><a href="#ebook" onClick={(e) => scrollToSection(e, '#ebook')}>Leitura do Ebook</a></li>
            <li><a href="#case-study" onClick={(e) => scrollToSection(e, '#case-study')}>Caso Prático</a></li>
            <li><a href="#activities" onClick={(e) => scrollToSection(e, '#activities')}>Atividades</a></li>
          </ul>

          <div className="module-actions">
            <button className="btn primary" onClick={handleCompleteModule}>Marcar como concluído</button>
            <button className="btn secondary" onClick={handleSaveProgress}>Salvar progresso</button>
          </div>
        </aside>

        <article className="module-content">
          <section id="section1">
            <h2>3.1 Origem e evolução da Gestão do Conhecimento</h2>
            
            <div className="video-container">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/VIDEO_ID" 
                title="Vídeo sobre origem e evolução da Gestão do Conhecimento"
                frameBorder="0" 
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="learning-content">
              <div className="two-columns">
                <div className="column">
                  <p>A expressão Gestão do Conhecimento (GC) foi utilizada, em 1971, no título de um capítulo do livro Readings in the Theory of Educacional Systems, organizado por Earl Hopper. Nomeadamente, no capítulo Selection and Knowledge Management in Education Systems, escrito por Dennis Smith (Wallace, 2007). Três anos mais tarde, a expressão aparece acompanhada de um conceito na revista americana Public Administration Review, uma publicação pioneira no campo da pesquisa, teoria e prática da Administração Pública (AP) (N. Henry, 2007; Lambe, 2011; Wallace, 2007).</p>
                  
                  <div className="info-box">
                    <h4>Destaque Histórico</h4>
                    <p>As primeiras iniciativas de Gestão do Conhecimento implementadas no setor público brasileiro datam dos anos 60 do século passado.</p>
                  </div>
                </div>
                <div className="column">
                  <div className="figure">
                    <img src="images/historia-gc.jpg" alt="Linha do tempo da Gestão do Conhecimento" />
                    <p className="figure-caption">Figura 1: Evolução histórica da Gestão do Conhecimento no setor público</p>
                  </div>
                </div>
              </div>
              
              <h3>Linha do Tempo da GC</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-year">1971</div>
                  <div className="timeline-content">
                    <p>Primeiro uso do termo "Knowledge Management"</p>
                    <img src="images/livro-1971.jpg" alt="Capa do livro de 1971" className="content-image" />
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">1974</div>
                  <div className="timeline-content">
                    <p>Artigo seminal na Public Administration Review</p>
                    <img src="images/revista-1974.jpg" alt="Capa da revista de 1974" className="content-image" />
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2000</div>
                  <div className="timeline-content">
                    <p>GC ganha importância em organizações públicas mundiais</p>
                    <img src="images/conferencia-2000.jpg" alt="Conferência sobre GC em 2000" className="content-image" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Outras seções continuariam aqui... */}

          <section id="section2">
                <h2>3.2 Conceito de GC na Administração Pública</h2>
                
                <div class="two-columns">
                    <div class="column">
                        <p>Quase meio século depois do aparecimento da primeira noção de GC, apesar de muitos pesquisadores se debruçarem sobre o tema, ainda não existe uma definição completamente aceita (Dalkir, 2023; Wallace, 2007). Aliás, apesar da origem do termo e do conceito estarem vinculada ao setor público, a GC é mais estudada, pesquisada e implementada nas organizações do setor privado (Arora & Raosaheb, 2011; Massaro et al., 2015).</p>
                        
                        <div class="figure">
                            <img src="images/conceito-gc.jpg" alt="Conceitos de Gestão do Conhecimento" />
                            <p class="figure-caption">Figura 2: Dimensões do conceito de Gestão do Conhecimento</p>
                        </div>
                    </div>
                    <div class="column">
                        <p>Na literatura, alguns autores creditam a Wiig (1986) a criação do conceito de GC (Dalkir, 2023; Santos & Rados, 2020), pontuando que o pioneirismo aconteceu em 1986 nos Estados Unidos (Dalkir, 2023). Observando sob o foco da Gestão Organizacional, a afirmação é coerente, uma vez que o autor discorreu sobre o desenvolvimento de novas tecnologias, em particular, da Inteligência Artificial como apoio a GC para gerar vantagem competitiva (Wiig, 1986).</p>
                        
                        <div class="info-box">
                            <h4>Definição Chave</h4>
                            <p>"GC pode ser definida como uma abordagem que permite gerenciar o conhecimento de valor para cumprir objetivos organizacionais" (Wiig, 1986)</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="ebook">
                <h2>Leitura do Ebook</h2>
                <p>Leia o capítulo completo sobre Gestão do Conhecimento no Setor Público Brasileiro diretamente aqui:</p>
                
                <div class="ebook-viewer">
                    <iframe src="ebooks/Novo_EPUB3.epub" allowfullscreen></iframe>
                </div>
                
                <div class="two-columns">
                    <div class="column">
                        <h3>Destaques do Capítulo</h3>
                        <ul>
                            <li>História e evolução da GC no Brasil</li>
                            <li>Principais marcos e iniciativas</li>
                            <li>Desafios específicos do contexto brasileiro</li>
                            <li>Casos de sucesso e lições aprendidas</li>
                        </ul>
                    </div>
                    <div class="column">
                        <div class="figure">
                            <img src="images/ebook-preview.jpg" alt="Preview do ebook" />
                            <p class="figure-caption">Figura 3: Visualização do ebook integrado</p>
                        </div>
                    </div>
                </div>
            </section>
            
          
          <section id="case-study" className="case-study">
            <h2>Caso Prático: Implementação de GC na Prefeitura de São Paulo</h2>
            
            <div className="two-columns">
              <div className="column">
                <h3>Contexto</h3>
                <p>A Prefeitura de São Paulo enfrentava altos índices de rotatividade de servidores e perda de conhecimento organizacional. Em 2018, iniciou um projeto piloto de Gestão do Conhecimento na Secretaria de Educação.</p>
                
                <div className="figure">
                  <img src="images/prefeitura-sp.jpg" alt="Prefeitura de São Paulo" />
                  <p className="figure-caption">Figura 4: Sede da Prefeitura de São Paulo</p>
                </div>
              </div>
              <div className="column">
                <h3>Desafios</h3>
                <ul>
                  <li>40% dos servidores com direito a aposentadoria nos próximos 5 anos</li>
                  <li>Falta de documentação de processos críticos</li>
                  <li>Dificuldade em repassar conhecimento tácito</li>
                  <li>Resistência cultural à compartilhamento de conhecimento</li>
                </ul>
              </div>
            </div>
            
            <div className="case-question">
              <h4>Pergunta 1: Quais seriam as primeiras ações que você recomendaria?</h4>
              <p>Analise o contexto e proponha um plano inicial de 3 ações prioritárias para implementar a GC.</p>
              <textarea 
                rows="4" 
                placeholder="Escreva sua resposta aqui..." 
                style={{ width: '100%', marginTop: '1rem' }}
                onChange={handleTextareaChange}
              ></textarea>
            </div>
            
            <div className="case-question">
              <h4>Pergunta 2: Como lidar com a resistência cultural?</h4>
              <p>Quais estratégias poderiam ser usadas para engajar os servidores no compartilhamento de conhecimento?</p>
              <textarea 
                rows="4" 
                placeholder="Escreva sua resposta aqui..." 
                style={{ width: '100%', marginTop: '1rem' }}
                onChange={handleTextareaChange}
              ></textarea>
            </div>
            
            <button className="btn primary" style={{ marginTop: '1rem' }}>Enviar Respostas</button>
          </section>

          <section id="activities" class="module-activities">
                <h2>Atividades de Aprendizagem</h2>
                
                <div class="activity">
                    <h3>Quiz: Conceitos Básicos</h3>
                    <p>Teste seu conhecimento sobre a evolução histórica da GC</p>
                    <div class="quiz-preview">
                        <p>Pergunta exemplo: Qual foi o primeiro órgão federal brasileiro a implementar práticas formais de GC?</p>
                        <button class="btn quiz-btn">Iniciar Quiz Completo</button>
                    </div>
                </div>
                
                <div class="activity">
                    <h3>Fórum de Discussão</h3>
                    <p>Compartilhe sua opinião: Quais os maiores desafios para implementar GC no setor público brasileiro?</p>
                    <div class="forum-preview">
                        <div class="forum-post">
                            <p><strong>Maria Silva:</strong> Acredito que a cultura organizacional seja o maior desafio...</p>
                            <button class="btn forum-btn">Participar da Discussão</button>
                        </div>
                    </div>
                </div>
            </section>
        </article>
      </main>
    </div>
  );
}

export default Modulo3GC;