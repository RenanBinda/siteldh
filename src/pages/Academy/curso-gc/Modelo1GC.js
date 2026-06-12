import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar';
import { Book } from 'react-bootstrap-icons';
import '../../../Styles/CursoGC.css';

function Modulo1GC() {
  const [progress, setProgress] = useState(0);
  const [answers, setAnswers] = useState({ reflexao1: '', reflexao2: '' });
  const [activeSection, setActiveSection] = useState('video');
  const ebookViewerRef = useRef(null);

  useEffect(() => {
    // Initialize EPUB reader
    const initializeEPUB = async () => {
      try {
        const { default: ePub } = await import('epubjs');
        const book = ePub("ebooks/Novo_EPUB3.epub");
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
        await rendition.display("chapter1");
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
      const sections = ['video', 'podcast', 'ebook', 'infografico', 'reflexao', 'forum', 'avaliacao'];
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

  const handleChange = (e, key) => {
    const newAnswers = { ...answers, [key]: e.target.value };
    setAnswers(newAnswers);
    localStorage.setItem(`modulo1-${key}`, e.target.value);
  };

  const handleComplete = () => {
    const newProgress = Math.min(progress + 25, 100);
    setProgress(newProgress);
    alert(newProgress === 100 ? 'Módulo concluído!' : 'Progresso salvo!');
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
    <div className="modulo1-page">
        <nav className="breadcrumb">
            <Link to="/cursogc">Curso</Link> > <Link to="/modulos">Módulos</Link> > <span>Módulo 3</span>
        </nav>

      <header className="module-header" style={{ marginTop: '80px' }}>
        <div className="container">
          <h1>Módulo 1: Introdução à Gestão do Conhecimento</h1>
          <p>Uma jornada introdutória sobre conceitos-chave da GC aplicados ao setor público</p>
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
          <h3>Conteúdo</h3>
          <ul className="module-menu">
            <li className={activeSection === 'video' ? 'active' : ''}>
              <a href="#video" onClick={(e) => scrollToSection(e, 'video')}>Vídeo-aula</a>
            </li>
            <li className={activeSection === 'podcast' ? 'active' : ''}>
              <a href="#podcast" onClick={(e) => scrollToSection(e, 'podcast')}>Podcast</a>
            </li>
            <li className={activeSection === 'ebook' ? 'active' : ''}>
              <a href="#ebook" onClick={(e) => scrollToSection(e, 'ebook')}>
                <Book className="me-1" /> E-book
              </a>
            </li>
            <li className={activeSection === 'infografico' ? 'active' : ''}>
              <a href="#infografico" onClick={(e) => scrollToSection(e, 'infografico')}>Infográfico</a>
            </li>
            <li className={activeSection === 'reflexao' ? 'active' : ''}>
              <a href="#reflexao" onClick={(e) => scrollToSection(e, 'reflexao')}>Atividades</a>
            </li>
            <li className={activeSection === 'forum' ? 'active' : ''}>
              <a href="#forum" onClick={(e) => scrollToSection(e, 'forum')}>Fórum</a>
            </li>
            <li className={activeSection === 'avaliacao' ? 'active' : ''}>
              <a href="#avaliacao" onClick={(e) => scrollToSection(e, 'avaliacao')}>Avaliação</a>
            </li>
          </ul>
          <button className="btn primary" onClick={handleComplete}>Marcar como concluído</button>
        </aside>

        <article className="module-content">
          <section id="video">
            <h2>🎥 Vídeo-aula Expositiva</h2>
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/VIDEO_ID_1"
                title="Introdução à GC"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="learning-content">
              <h3>Conceitos Fundamentais</h3>
              <p>Neste módulo introdutório, abordaremos os pilares da Gestão do Conhecimento no setor público:</p>
              <ul>
                <li>Diferença entre dados, informação e conhecimento</li>
                <li>Tipos de conhecimento: tácito e explícito</li>
                <li>Ciclo da Gestão do Conhecimento</li>
                <li>Benefícios para organizações públicas</li>
              </ul>
            </div>
          </section>

          <section id="podcast">
            <h2>🎧 Podcast Temático</h2>
            <audio controls>
              <source src="/media/podcast-mod1.mp3" type="audio/mp3" />
              Seu navegador não suporta o player de áudio.
            </audio>
            <div className="info-box">
              <h4>Destaque do Podcast</h4>
              <p>"A Gestão do Conhecimento não é apenas sobre tecnologia, mas principalmente sobre pessoas e processos."</p>
            </div>
          </section>

          <section id="ebook">
            <h2>📖 Leitura Interativa</h2>
            <div ref={ebookViewerRef} className="ebook-viewer"></div>
            <div className="two-columns">
              <div className="column">
                <h3>Destaques do Capítulo</h3>
                <ul>
                  <li>Definições fundamentais de GC</li>
                  <li>Evolução histórica do conceito</li>
                  <li>Casos iniciais no setor público</li>
                  <li>Framework básico de implementação</li>
                </ul>
              </div>
              <div className="column">
                <div className="figure">
                  <img src="/images/ebook-preview-mod1.jpg" alt="Preview do ebook" />
                  <p className="figure-caption">Figura 1: Capítulo 1 do eBook</p>
                </div>
              </div>
            </div>
          </section>

          <section id="infografico">
            <h2>📊 Infográfico</h2>
            <img src="/images/infografico-mod1.jpg" alt="Infográfico GC" className="content-image" />
            <div className="info-box">
              <h4>Principais Elementos</h4>
              <p>O infográfico resume visualmente os 4 componentes essenciais da GC: Pessoas, Processos, Conteúdo e Tecnologia.</p>
            </div>
          </section>

          <section id="reflexao">
            <h2>📝 Atividades de Reflexão</h2>
            <div className="case-question">
              <h4>1. O que significa 'conhecimento' no contexto da administração pública?</h4>
              <textarea
                rows="4"
                value={answers.reflexao1}
                onChange={(e) => handleChange(e, 'reflexao1')}
                placeholder="Digite sua resposta aqui..."
              ></textarea>
            </div>

            <div className="case-question">
              <h4>2. Como a GC pode transformar o serviço público?</h4>
              <textarea
                rows="4"
                value={answers.reflexao2}
                onChange={(e) => handleChange(e, 'reflexao2')}
                placeholder="Digite sua resposta aqui..."
              ></textarea>
            </div>
            <button className="btn primary">Enviar Respostas</button>
          </section>

          <section id="forum">
            <h2>💬 Fórum Temático</h2>
            <p>Compartilhe com colegas: qual a importância da GC na sua atuação profissional?</p>
            <div className="forum-preview">
              <div className="forum-post">
                <p><strong>Ana Paula:</strong> GC me ajudou a documentar práticas que antes se perdiam...</p>
                <button className="btn forum-btn" onClick={handleForumClick}>Participar</button>
              </div>
            </div>
          </section>

          <section id="avaliacao">
            <h2>✅ Avaliação Formativa</h2>
            <div className="activity">
              <h3>Quiz Rápido</h3>
              <p>Teste seus conhecimentos sobre os conceitos iniciais de GC.</p>
              <button className="btn quiz-btn" onClick={handleQuizClick}>Iniciar Quiz</button>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}

export default Modulo1GC;