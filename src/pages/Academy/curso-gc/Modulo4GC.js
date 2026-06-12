import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar';
import '../../../Styles/CursoGC.css';
import { Book, PlayFill, Headphones, Image, ClockHistory, ChatSquareText, PatchQuestion } from 'react-bootstrap-icons';

function Modulo4GC() {
  const [progress, setProgress] = useState(0);
  const [answers, setAnswers] = useState({
    question1: localStorage.getItem('module4-question1') || '',
    question2: localStorage.getItem('module4-question2') || ''
  });
  const ebookViewerRef = useRef(null);

  useEffect(() => {
    const initEPUB = async () => {
      try {
        const { default: ePub } = await import('epubjs');
        const book = ePub('ebooks/Novo_EPUB3.epub');
        
        const storedLocation = localStorage.getItem("epub4-location");

        const rendition = book.renderTo(ebookViewerRef.current, {
          width: '100%',
          height: '600px'
        });

        rendition.themes.register('custom', {
          body: {
            background: '#f4f4f4',
            color: '#333',
            fontFamily: 'Georgia, serif',
            padding: '1em',
            lineHeight: '1.6'
          },
          a: {
            color: '#0077cc'
          }
        });
        rendition.themes.select('custom');
        
        await rendition.display(storedLocation || 'chapter4');

        book.on("relocated", (location) => {
          localStorage.setItem("epub4-location", location.start.cfi);
        });

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
      } catch (error) {
        console.error('Erro ao carregar EPUB:', error);
      }
    };
    initEPUB();
  }, []);

  const handleAnswerChange = (e, question) => {
    const newAnswers = {
      ...answers,
      [question]: e.target.value
    };
    setAnswers(newAnswers);
    localStorage.setItem(`module4-${question}`, e.target.value);
  };

  const handleCompleteModule = () => {
    const newProgress = Math.min(progress + 25, 100);
    setProgress(newProgress);
    alert(newProgress === 100 ? 'Parabéns! Módulo concluído!' : 'Progresso salvo!');
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
    <div className="modulo4-page">
      <Navbar />
      <header className="module-header">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/cursogc">Curso</Link> > <Link to="/cursogc/#modulos">Módulos</Link> > <span>Módulo 4</span>
          </nav>
          <h1>Módulo 4: Infraestrutura da GC no Setor Público</h1>
          <p>Estratégias, sistemas e plataformas que sustentam a gestão do conhecimento nas organizações públicas.</p>
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
            <li><a href="#infraestrutura" onClick={(e) => scrollToSection(e, '#infraestrutura')}>4.1 Componentes de Infraestrutura</a></li>
            <li><a href="#sistemas" onClick={(e) => scrollToSection(e, '#sistemas')}>4.2 Sistemas de Informação</a></li>
            <li><a href="#ebook" onClick={(e) => scrollToSection(e, '#ebook')}>Leitura do Ebook</a></li>
            <li><a href="#timeline" onClick={(e) => scrollToSection(e, '#timeline')}>Linha do Tempo</a></li>
            <li><a href="#caso-pratico" onClick={(e) => scrollToSection(e, '#caso-pratico')}>Caso Prático</a></li>
            <li><a href="#atividades" onClick={(e) => scrollToSection(e, '#atividades')}>Atividades</a></li>
            <li><a href="#recursos" onClick={(e) => scrollToSection(e, '#recursos')}>Recursos Adicionais</a></li>
          </ul>
          
          <div className="module-actions">
            <button className="btn primary" onClick={handleCompleteModule}>
              {progress === 100 ? 'Módulo Concluído' : 'Marcar como concluído'}
            </button>
            <button className="btn secondary" onClick={handleSaveProgress}>Salvar progresso</button>
          </div>
          
          <div className="difficulty-selector">
            <h4>Nível de Conteúdo</h4>
            <select className="form-select">
              <option value="iniciante">Iniciante</option>
              <option value="intermediario">Intermediário</option>
              <option value="avancado">Avançado</option>
            </select>
          </div>
        </aside>

        <article className="module-content">
          <section id="infraestrutura">
            <h2>4.1 Componentes da Infraestrutura de GC</h2>
            
            <div className="video-container">
              <iframe 
                src="https://www.youtube.com/embed/VIDEO_ID_INFRAESTRUTURA" 
                title="Componentes da Infraestrutura de GC" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
            
            <div className="two-columns">
              <div className="column">
                <p>A infraestrutura da GC envolve aspectos tecnológicos, humanos, organizacionais e culturais que sustentam as práticas de conhecimento:</p>
                <ul>
                  <li><strong>Tecnologia:</strong> Ferramentas como repositórios, intranets, ECMs, motores de busca.</li>
                  <li><strong>Pessoas:</strong> Comunidades de prática, redes de especialistas e gestores do conhecimento.</li>
                  <li><strong>Processos:</strong> Fluxos de documentação, registros de lições aprendidas e gestão de ativos intangíveis.</li>
                  <li><strong>Cultura:</strong> Ambiente favorável à colaboração, aprendizagem contínua e compartilhamento.</li>
                </ul>
                
                <div className="info-box">
                  <h4>Destaque Importante</h4>
                  <p>Sem uma infraestrutura adequada, mesmo as melhores estratégias de GC podem falhar na implementação.</p>
                </div>
              </div>
              <div className="column">
                <div className="figure">
                  <img src="/images/infraestrutura-gc.jpg" alt="Componentes da Infraestrutura de GC" />
                  <p className="figure-caption">Figura 1: Modelo de infraestrutura para Gestão do Conhecimento</p>
                </div>
              </div>
            </div>
          </section>

          <section id="sistemas">
            <h2>4.2 Sistemas de Informação para GC</h2>
            
            <div className="two-columns">
              <div className="column">
                <p>Os sistemas de informação estruturam e automatizam os fluxos de conhecimento institucional:</p>
                <ul>
                  <li>Plataformas colaborativas (SharePoint, Confluence)</li>
                  <li>Sistemas de gestão eletrônica de documentos (GED)</li>
                  <li>Ferramentas de BI e analytics para apoio à decisão</li>
                  <li>Ambientes virtuais de aprendizagem (AVA)</li>
                </ul>
                
                <div className="info-box">
                  <h4>Ouça nosso podcast sobre sistemas de GC</h4>
                  <audio controls style={{ width: '100%', marginTop: '1rem' }}>
                    <source src="/podcasts/sistemas-gc.mp3" type="audio/mpeg" />
                    Seu navegador não suporta o elemento de áudio.
                  </audio>
                </div>
              </div>
              <div className="column">
                <div className="figure">
                  <img src="/images/sistemas-informacao.jpg" alt="Exemplo de sistema para GC" />
                  <p className="figure-caption">Figura 2: Interface de um sistema de GC baseado em repositório</p>
                </div>
              </div>
            </div>
            
            <div className="video-container">
              <iframe 
                src="https://www.youtube.com/embed/VIDEO_ID_SISTEMAS" 
                title="Sistemas de Informação para GC" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
          </section>

          <section id="ebook">
            <h2><Book /> Leitura do Ebook</h2>
            <p>Explore o capítulo completo sobre infraestrutura da GC diretamente no visualizador abaixo:</p>
            <div ref={ebookViewerRef} className="ebook-viewer"></div>
            
            <div className="two-columns">
              <div className="column">
                <h3>Destaques do Capítulo</h3>
                <ul>
                  <li>Arquitetura de sistemas para GC</li>
                  <li>Critérios para seleção de tecnologias</li>
                  <li>Integração com sistemas existentes</li>
                  <li>Casos de implementação no setor público</li>
                </ul>
              </div>
              <div className="column">
                <div className="figure">
                  <img src="/images/ebook-preview4.jpg" alt="Preview do capítulo 4" />
                  <p className="figure-caption">Figura 3: Visualização do capítulo no ebook</p>
                </div>
              </div>
            </div>
          </section>

          <section id="timeline" className="timeline-section">
            <h2><ClockHistory /> Linha do Tempo: Evolução dos Sistemas de GC</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-year">2000-2005</div>
                <div className="timeline-content">
                  Primeiras implementações de sistemas de gestão documental em órgãos públicos
                  <img src="/images/sistema-2000.jpg" alt="Sistema de 2000" className="content-image" />
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2006-2010</div>
                <div className="timeline-content">
                  Adoção de intranets corporativas e portais de conhecimento
                  <img src="/images/intranet-2010.jpg" alt="Intranet de 2010" className="content-image" />
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2011-2015</div>
                <div className="timeline-content">
                  Surgimento de plataformas colaborativas e comunidades de prática
                  <img src="/images/plataforma-2015.jpg" alt="Plataforma de 2015" className="content-image" />
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2016-Presente</div>
                <div className="timeline-content">
                  Integração com analytics, IA e sistemas de gestão de aprendizagem
                  <img src="/images/ia-gc.jpg" alt="Sistema com IA" className="content-image" />
                </div>
              </div>
            </div>
          </section>

          <section id="caso-pratico" className="case-study">
            <h2>Caso Prático: Implantação de Sistema de GC no Ministério da Saúde</h2>
            
            <div className="two-columns">
              <div className="column">
                <h4>Contexto</h4>
                <p>O Ministério da Saúde enfrentava desafios na gestão do conhecimento devido à alta rotatividade de servidores e à dispersão de informações em diversos sistemas desconectados.</p>
                <div className="figure">
                  <img src="/images/ministerio-saude.jpg" alt="Ministério da Saúde" />
                  <p className="figure-caption">Figura 4: Sede do Ministério da Saúde</p>
                </div>
              </div>
              <div className="column">
                <h4>Desafios</h4>
                <ul>
                  <li>30% dos servidores especializados se aposentando em 5 anos</li>
                  <li>Conhecimento crítico armazenado em e-mails e arquivos locais</li>
                  <li>Dificuldade em encontrar especialistas e conhecimentos</li>
                  <li>Resistência à mudança nos processos de trabalho</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="atividades" className="module-activities">
            <h2><PatchQuestion /> Atividades de Aprendizagem</h2>
            
            <div className="case-question">
              <h4>Pergunta 1: Quais seriam os primeiros componentes de infraestrutura a serem implementados?</h4>
              <p>Considerando o contexto, elabore uma proposta com os 3 componentes mais críticos para iniciar o projeto.</p>
              <textarea 
                rows="4" 
                placeholder="Escreva sua resposta aqui..." 
                style={{ width: '100%', marginTop: '1rem' }}
                value={answers.question1}
                onChange={(e) => handleAnswerChange(e, 'question1')}
              ></textarea>
            </div>
            
            <div className="case-question">
              <h4>Pergunta 2: Como garantir a adoção dos sistemas pela equipe?</h4>
              <p>Descreva estratégias para superar a resistência e engajar os servidores no uso das novas ferramentas.</p>
              <textarea 
                rows="4" 
                placeholder="Escreva sua resposta aqui..." 
                style={{ width: '100%', marginTop: '1rem' }}
                value={answers.question2}
                onChange={(e) => handleAnswerChange(e, 'question2')}
              ></textarea>
            </div>
            
            <button className="btn primary" style={{ marginTop: '1rem' }}>Enviar Respostas</button>
            
            <div className="activity">
              <h3><ChatSquareText /> Fórum de Discussão</h3>
              <p>Compartilhe sua experiência: Quais os maiores desafios na implementação de sistemas de GC em sua organização?</p>
              <div className="forum-preview">
                <div className="forum-post">
                  <p><strong>Carlos Mendes:</strong> Em nossa secretaria, o maior problema foi integrar os sistemas legados...</p>
                  <button className="btn forum-btn">Participar da Discussão</button>
                </div>
              </div>
            </div>
            
            <div className="activity">
              <h3><PatchQuestion /> Quiz Interativo</h3>
              <p>Teste seu conhecimento sobre infraestrutura e sistemas de GC.</p>
              <div className="quiz-preview">
                <p>Pergunta exemplo: Qual destes NÃO é um componente essencial da infraestrutura de GC?</p>
                <ol type="A">
                  <li>Tecnologia adequada</li>
                  <li>Processos definidos</li>
                  <li>Orçamento ilimitado</li>
                  <li>Cultura organizacional</li>
                </ol>
                <button className="btn quiz-btn">Iniciar Quiz Completo</button>
              </div>
            </div>
          </section>

          <section id="recursos" className="module-resources">
            <h2>📚 Recursos Adicionais</h2>
            
            <div className="resource-list">
              <div className="resource-item">
                <h3><PlayFill /> Vídeos Recomendados</h3>
                <ul>
                  <li><a href="#">Tecnologias para Gestão do Conhecimento</a> (15min)</li>
                  <li><a href="#">Case: Sistema de GC no Governo Federal</a> (22min)</li>
                  <li><a href="#">Infraestrutura de TI para GC</a> (18min)</li>
                </ul>
              </div>
              
              <div className="resource-item">
                <h3><Headphones /> Podcasts</h3>
                <ul>
                  <li><a href="#">Episódio 14: Infraestrutura de GC</a> (35min)</li>
                  <li><a href="#">Entrevista com Especialista em Sistemas</a> (28min)</li>
                  <li><a href="#">Integração de Sistemas</a> (42min)</li>
                </ul>
              </div>
              
              <div className="resource-item">
                <h3><Image /> Infográficos</h3>
                <ul>
                  <li><a href="#">Componentes da Infraestrutura de GC</a></li>
                  <li><a href="#">Evolução dos Sistemas de Informação</a></li>
                  <li><a href="#">Fluxo de Conhecimento em Organizações</a></li>
                </ul>
              </div>
              
              <div className="resource-item">
                <h3><Book /> Artigos e Publicações</h3>
                <ul>
                  <li><a href="#">Framework para GC no Setor Público</a> (PDF)</li>
                  <li><a href="#">Avaliação de Sistemas de GC</a> (Artigo Científico)</li>
                  <li><a href="#">Guia de Implementação</a> (Ministério da Economia)</li>
                </ul>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}

export default Modulo4GC;