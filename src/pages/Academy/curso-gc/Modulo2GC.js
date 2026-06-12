import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar';
import { Book } from 'react-bootstrap-icons';
import '../../../Styles/CursoGC.css';

function Modulo2GC() {
  const [progress, setProgress] = useState(25);
  const [answers, setAnswers] = useState({
    question1: localStorage.getItem('modulo2-question1') || '',
    question2: localStorage.getItem('modulo2-question2') || ''
  });
  const [activeSection, setActiveSection] = useState('section1');
  const ebookViewerRef = useRef(null);

  useEffect(() => {
    // Initialize EPUB reader
    const initializeEPUB = async () => {
      try {
        const { default: ePub } = await import('epubjs');
        const book = ePub("./ebooks/Novo_EPUB3.epub");
        const rendition = book.renderTo(ebookViewerRef.current, {
          width: "100%",
          height: "600px"
        });

        rendition.themes.register("custom", {
          body: { 
            background: "#f4f4f4", 
            color: "#333", 
            fontFamily: "Georgia, serif", 
            padding: "1em",
            lineHeight: "1.6"
          }
        });
        rendition.themes.select("custom");
        await rendition.display("chapter2");
      } catch (error) {
        console.error("Error loading EPUB:", error);
        ebookViewerRef.current.innerHTML = `
          <div class="unsupported-message">
            <p>Erro ao carregar o eBook. Por favor, <a href="ebooks/Novo_EPUB3.pdf" download>baixe o PDF</a> para leitura.</p>
          </div>
        `;
      }
    };

    initializeEPUB();

    // Handle scroll to update active section
    const handleScroll = () => {
      const sections = ['section1', 'section2', 'section3', 'ebook', 'case-study', 'activities'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAnswerChange = (e, question) => {
    const newAnswers = {
      ...answers,
      [question]: e.target.value
    };
    setAnswers(newAnswers);
    localStorage.setItem(`modulo2-${question}`, e.target.value);
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

  const handleQuizClick = () => {
    alert('Quiz será carregado aqui. Em uma implementação real, isso abriria um questionário interativo.');
  };

  const handleForumClick = () => {
    alert('Fórum será carregado aqui. Em uma implementação real, isso abriria uma discussão interativa.');
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="modulo2-page">
      <Navbar />

      <header className="module-header" style={{ marginTop: '80px' }}>
        <div className="container">
          <h1>Módulo 2: Valor em Serviços Públicos</h1>
          <p>Como criar e entregar valor através da gestão do conhecimento em serviços públicos</p>
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
            <li className={activeSection === 'section1' ? 'active' : ''}>
              <a href="#section1" onClick={(e) => scrollToSection(e, 'section1')}>2.1 Conceito de Valor</a>
            </li>
            <li className={activeSection === 'section2' ? 'active' : ''}>
              <a href="#section2" onClick={(e) => scrollToSection(e, 'section2')}>2.2 Criação de Valor</a>
            </li>
            <li className={activeSection === 'section3' ? 'active' : ''}>
              <a href="#section3" onClick={(e) => scrollToSection(e, 'section3')}>2.3 Métricas de Valor</a>
            </li>
            <li className={activeSection === 'ebook' ? 'active' : ''}>
              <a href="#ebook" onClick={(e) => scrollToSection(e, 'ebook')}>
                <Book className="me-1" /> Leitura do Ebook
              </a>
            </li>
            <li className={activeSection === 'case-study' ? 'active' : ''}>
              <a href="#case-study" onClick={(e) => scrollToSection(e, 'case-study')}>Caso Prático</a>
            </li>
            <li className={activeSection === 'activities' ? 'active' : ''}>
              <a href="#activities" onClick={(e) => scrollToSection(e, 'activities')}>Atividades</a>
            </li>
          </ul>
          
          <div className="module-actions">
            <button className="btn primary" onClick={handleCompleteModule}>Marcar como concluído</button>
            <button className="btn secondary">Salvar progresso</button>
          </div>
        </aside>

        <article className="module-content">
          <section id="section1">
            <h2>2.1 Conceito de Valor no Setor Público</h2>
            
            <div className="video-container">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/VIDEO_ID_2" 
                title="Conceito de Valor no Setor Público"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="learning-content">
              <div className="two-columns">
                <div className="column">
                  <p>O conceito de valor no setor público difere significativamente do setor privado. Enquanto organizações privadas focam em valor financeiro e para acionistas, no setor público o valor é multidimensional:</p>
                  
                  <div className="info-box">
                    <h4>Dimensões do Valor Público</h4>
                    <ul>
                      <li>Valor para o cidadão (experiência do usuário)</li>
                      <li>Valor social (impacto na comunidade)</li>
                      <li>Valor organizacional (eficiência operacional)</li>
                      <li>Valor político (alinhamento com políticas públicas)</li>
                    </ul>
                  </div>
                </div>
                <div className="column">
                  <div className="figure">
                    <img src="/images/valor-publico.jpg" alt="Dimensões do Valor Público" />
                    <p className="figure-caption">Figura 1: As quatro dimensões do valor no setor público</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="section2">
            <h2>2.2 Criação de Valor através da GC</h2>
            <p>A Gestão do Conhecimento contribui para a criação de valor em serviços públicos através de:</p>
            
            <div className="two-columns">
              <div className="column">
                <ul>
                  <li>Redução de retrabalho e redundâncias</li>
                  <li>Preservação do conhecimento institucional</li>
                  <li>Melhoria na tomada de decisão</li>
                  <li>Fomento à inovação</li>
                </ul>
              </div>
              <div className="column">
                <div className="figure">
                  <img src="/images/criacao-valor.jpg" alt="Processo de criação de valor" />
                  <p className="figure-caption">Figura 2: Como a GC gera valor</p>
                </div>
              </div>
            </div>
          </section>

          <section id="ebook">
            <h2>📖 Leitura do Ebook</h2>
            <p>Leia o capítulo completo sobre Criação de Valor no Setor Público diretamente aqui:</p>
            
            <div ref={ebookViewerRef} className="ebook-viewer"></div>
            
            <div className="two-columns">
              <div className="column">
                <h3>Destaques do Capítulo</h3>
                <ul>
                  <li>Modelos de criação de valor</li>
                  <li>Estudos de caso internacionais</li>
                  <li>Ferramentas de mensuração</li>
                  <li>Barreiras e facilitadores</li>
                </ul>
              </div>
              <div className="column">
                <div className="figure">
                  <img src="/images/ebook-preview-mod2.jpg" alt="Preview do ebook" />
                  <p className="figure-caption">Figura 3: Capítulo 2 do eBook</p>
                </div>
              </div>
            </div>
          </section>
          
          <section id="case-study" className="case-study">
            <h2>Caso Prático: Programa de GC no Ministério da Saúde</h2>
            
            <div className="two-columns">
              <div className="column">
                <h3>Contexto</h3>
                <p>O Ministério da Saúde implementou um programa de GC para melhorar a gestão de pandemias após experiências com H1N1 e Ebola.</p>
                
                <div className="figure">
                  <img src="/images/ministerio-saude.jpg" alt="Ministério da Saúde" />
                  <p className="figure-caption">Figura 4: Sede do Ministério da Saúde</p>
                </div>
              </div>
              <div className="column">
                <h3>Resultados</h3>
                <ul>
                  <li>Redução de 40% no tempo de resposta a crises</li>
                  <li>Padronização de protocolos em todo o país</li>
                  <li>Melhoria na capacitação de profissionais</li>
                  <li>Sistema de lições aprendidas integrado</li>
                </ul>
              </div>
            </div>
            
            <div className="case-question">
              <h4>Pergunta 1: Como você adaptaria este modelo para sua organização?</h4>
              <textarea 
                rows="4" 
                placeholder="Escreva sua resposta aqui..." 
                style={{ width: '100%', marginTop: '1rem' }}
                value={answers.question1}
                onChange={(e) => handleAnswerChange(e, 'question1')}
              ></textarea>
            </div>
            
            <div className="case-question">
              <h4>Pergunta 2: Quais métricas de valor você usaria para avaliar o sucesso?</h4>
              <textarea 
                rows="4" 
                placeholder="Escreva sua resposta aqui..." 
                style={{ width: '100%', marginTop: '1rem' }}
                value={answers.question2}
                onChange={(e) => handleAnswerChange(e, 'question2')}
              ></textarea>
            </div>
            
            <button className="btn primary" style={{ marginTop: '1rem' }}>Enviar Respostas</button>
          </section>
          
          <section id="activities" className="module-activities">
            <h2>Atividades de Aprendizagem</h2>
            
            <div className="activity">
              <h3>Quiz: Criação de Valor</h3>
              <p>Teste seu conhecimento sobre métricas e criação de valor</p>
              <div className="quiz-preview">
                <p>Pergunta exemplo: Qual destes NÃO é um tipo de valor no setor público?</p>
                <button className="btn quiz-btn" onClick={handleQuizClick}>Iniciar Quiz Completo</button>
              </div>
            </div>
            
            <div className="activity">
              <h3>Fórum de Discussão</h3>
              <p>Compartilhe: Como sua organização mede o valor da GC?</p>
              <div className="forum-preview">
                <div className="forum-post">
                  <p><strong>Carlos Eduardo:</strong> Usamos redução de tempo de treinamento como métrica...</p>
                  <button className="btn forum-btn" onClick={handleForumClick}>Participar da Discussão</button>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}

export default Modulo2GC;