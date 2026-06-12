import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../../../components/Navbar';
import '../../../Styles/CursoGC.css';
import { Book } from 'react-bootstrap-icons';

function Modulo5GC() {
  const [progress, setProgress] = useState(0);
  const ebookViewerRef = useRef(null);

  useEffect(() => {
    const initEPUB = async () => {
      try {
        const { default: ePub } = await import('epubjs');
        const book = ePub('ebooks/Novo_EPUB3.epub');
        const rendition = book.renderTo(ebookViewerRef.current, {
          width: '100%',
          height: '600px'
        });
        rendition.themes.register('custom', {
          body: {
            background: '#f4f4f4',
            color: '#333',
            fontFamily: 'Georgia, serif',
            padding: '1em'
          }
        });
        rendition.themes.select('custom');
        await rendition.display('chapter5');
      } catch (error) {
        console.error('Erro ao carregar EPUB:', error);
      }
    };
    initEPUB();
  }, []);

  const handleComplete = () => {
    const newProgress = Math.min(progress + 25, 100);
    setProgress(newProgress);
    alert(newProgress === 100 ? 'Módulo concluído!' : 'Progresso salvo!');
  };

  return (
    <div className="modulo5-page">
      <Navbar />
      <header className="module-header">
        <div className="container">
          <h1>Módulo 5: Cultura Organizacional e GC</h1>
          <p>Como valores, crenças e comportamentos moldam o sucesso da gestão do conhecimento no setor público.</p>
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
            <li><a href="#cultura">5.1 Dimensões da Cultura Organizacional</a></li>
            <li><a href="#lideranca">5.2 Liderança e Incentivos</a></li>
            <li><a href="#ebook">Leitura do Ebook</a></li>
            <li><a href="#atividades">Atividades</a></li>
          </ul>
          <button className="btn primary" onClick={handleComplete}>Marcar como concluído</button>
        </aside>

        <article className="module-content">
          <section id="cultura">
            <h2>5.1 Dimensões da Cultura Organizacional</h2>
            <p>A cultura organizacional determina como o conhecimento é compartilhado, criado e valorizado nas instituições públicas. Entre as dimensões mais relevantes estão:</p>
            <ul>
              <li><strong>Confiança:</strong> essencial para a troca de conhecimento tácito.</li>
              <li><strong>Colaboração:</strong> incentivo à aprendizagem coletiva.</li>
              <li><strong>Abertura ao novo:</strong> aceitação de mudanças e inovação.</li>
              <li><strong>Aprendizagem contínua:</strong> cultura de desenvolvimento profissional constante.</li>
            </ul>
          </section>

          <section id="lideranca">
            <h2>5.2 Liderança e Incentivos</h2>
            <p>Líderes influenciam diretamente a eficácia da GC por meio de seu comportamento e das estratégias adotadas:</p>
            <div className="two-columns">
              <div className="column">
                <ul>
                  <li>Estímulo à documentação de processos</li>
                  <li>Reconhecimento de boas práticas</li>
                  <li>Criação de espaços para diálogo e trocas de experiências</li>
                  <li>Promoção de capacitações contínuas</li>
                </ul>
              </div>
              <div className="column">
                <div className="figure">
                  <img src="/images/lideranca-gc.jpg" alt="Liderança em GC" />
                  <p className="figure-caption">Figura: A liderança como pilar da cultura de GC</p>
                </div>
              </div>
            </div>
          </section>

          <section id="ebook">
            <h2>📖 Leitura do Ebook</h2>
            <p>Explore o capítulo completo sobre cultura organizacional e GC diretamente no visualizador abaixo:</p>
            <div ref={ebookViewerRef} className="ebook-viewer"></div>
          </section>

          <section id="atividades" className="module-activities">
            <h2>Atividades de Aprendizagem</h2>
            <div className="case-question">
              <h4>1. Como a cultura atual da sua organização influencia a gestão do conhecimento?</h4>
              <textarea rows="4" placeholder="Escreva sua resposta aqui..." style={{ width: '100%', marginTop: '1rem' }}></textarea>
            </div>
            <div className="case-question">
              <h4>2. Que tipo de liderança mais contribui para o compartilhamento de conhecimento?</h4>
              <textarea rows="4" placeholder="Escreva sua resposta aqui..." style={{ width: '100%', marginTop: '1rem' }}></textarea>
            </div>
            <div className="activity">
              <h3>💬 Fórum</h3>
              <p>Como promover uma cultura de GC mesmo em ambientes resistentes?</p>
              <button className="btn forum-btn">Participar da discussão</button>
            </div>
            <div className="activity">
              <h3>✅ Quiz</h3>
              <p>Teste seu conhecimento sobre dimensões culturais e práticas de liderança em GC.</p>
              <button className="btn quiz-btn">Iniciar Quiz</button>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}

export default Modulo5GC;