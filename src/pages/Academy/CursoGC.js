import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/CursoGC.css';
import '../../Styles/global.css';
import { Book, PlayFill, Headphones, Image, ClockHistory, ChatSquareText, PatchQuestion } from 'react-bootstrap-icons';

function CursoGC() {
  const [progressData] = useState({
    completedModules: [1, 2],
    currentModule: 3,
    quizScores: {
      module1: 85,
      module2: 90
    }
  });

  useEffect(() => {
    // Configuração inicial
    console.log('Progresso do aluno:', progressData);
  }, [progressData]);

  return (
    <div className="course-container">
      <header className="course-header">
        <div className="container">
          <h1>Gestão do Conhecimento no Setor Público</h1>
          <p>Desenvolva competências para implementar e gerenciar sistemas de conhecimento em organizações públicas</p>
        </div>
      </header>

      <nav className="course-navigation">
        <div className="container">
          <ul>
            <li><Link to="#overview">Visão Geral</Link></li>
            <li><Link to="#modulos">Módulos</Link></li>
            <li><Link to="#resources">Recursos</Link></li>
            <li><Link to="#instructors">Instrutores</Link></li>
            <li><Link to="/inscricaogc">Inscreva-se</Link></li>
          </ul>
        </div>
      </nav>

      <main className="container">
        <section id="overview" className="course-overview">
          <h2>Visão Geral do Curso</h2>
          <p>Este curso aborda os fundamentos e práticas avançadas de Gestão do Conhecimento aplicadas ao setor público, com foco na criação de valor, compartilhamento de conhecimento e desenvolvimento de competências organizacionais.</p>
          
          <div className="info-box">
            <h4>Objetivos do Curso</h4>
            <ul>
              <li>Compreender os conceitos e práticas de Gestão do Conhecimento (GC)</li>
              <li>Aplicar metodologias de GC no contexto do setor público</li>
              <li>Desenvolver estratégias para implementação de sistemas de GC</li>
              <li>Criar planos de ação para transformação organizacional</li>
            </ul>
          </div>
          
          <div className="course-features">
            <div className="feature">
              <i className="icon">📚</i>
              <h3>9 Módulos Completos</h3>
              <p>Cobrindo desde conceitos básicos até implementação prática</p>
            </div>
            <div className="feature">
              <i className="icon">🎓</i>
              <h3>Certificado</h3>
              <p>Receba um certificado ao concluir o curso</p>
            </div>
            <div className="feature">
              <i className="icon">🕒</i>
              <h3>Aprendizado Flexível</h3>
              <p>Estude no seu próprio ritmo</p>
            </div>
            <div className="feature">
              <i className="icon">👥</i>
              <h3>Comunidade</h3>
              <p>Interação com colegas e especialistas</p>
            </div>
          </div>
        </section>

        <section id="modulos" className="course-modules">
          <h2>Módulos do Curso</h2>
          
          <div className="module">
            <h3>Módulo 1: Introdução à Gestão do Conhecimento</h3>
            <div className="module-content">
              <p>Explore os conceitos fundamentais de conhecimento e sua aplicação no setor público, com recursos para todos os estilos de aprendizagem.</p>
              <ul className="learning-objectives">
                <li>Compreender os conceitos de informação, conhecimento e competência</li>
                <li>Refletir sobre a importância da GC para o serviço público</li>
                <li>Relacionar GC com inovação e transformação institucional</li>
              </ul>
              <div className="resources">
                <span className="resource-type">🎥 Vídeo-aulas</span>
                <span className="resource-type">🎧 Podcasts</span>
                <span className="resource-type">📖 Capítulo Interativo</span>
                <span className="resource-type">📊 Infográficos</span>
                <span className="resource-type">📝 Atividades Reflexivas</span>
                <span className="resource-type">💬 Fórum Temático</span>
                <span className="resource-type">✅ Avaliação Formativa</span>
              </div>
              <Link to="/modulo1GC" className="btn primary" style={{ marginTop: '1rem', display: 'inline-block' }}>
                Acessar Módulo
              </Link>
            </div>
          </div>

          <div className="module">
            <h3>Módulo 2: Valor em Serviços Públicos</h3>
            <div className="module-content">
              <p>Como criar e entregar valor através da gestão do conhecimento em serviços públicos.</p>
              <ul className="learning-objectives">
                <li>Diferenciar características e propriedades dos serviços públicos</li>
                <li>Calcular e maximizar o valor percebido pelo cidadão</li>
                <li>Identificar oportunidades de cocriação e coprodução de valor</li>
              </ul>
              <div className="resources">
                <span className="resource-type">🎥 Vídeo-aula</span>
                <span className="resource-type">🎧 Podcasts</span>
                <span className="resource-type">📖 Capítulo Interativo</span>
                <span className="resource-type">🧩 Caso Prático</span>
                <span className="resource-type">💬 Fórum Temático</span>
                <span className="resource-type">✅ Avaliação Formativa</span>
              </div>
              <Link to="/modulo2GC" className="btn primary" style={{ marginTop: '1rem', display: 'inline-block' }}>
                Acessar Módulo
              </Link>
            </div>
          </div>

          <div className="module">
            <h3>Módulo 3: Gestão do Conhecimento no Setor Público Brasileiro</h3>
            <div className="module-content">
              <p>História, conceitos e práticas da GC na administração pública brasileira.</p>
              <ul className="learning-objectives">
                <li>Analisar a evolução histórica da GC no Brasil</li>
                <li>Identificar marcos importantes da GC no setor público</li>
                <li>Relacionar GC com políticas públicas brasileiras</li>
              </ul>
              <div className="resources">
                <span className="resource-type">🎥 Vídeo-aula</span>
                <span className="resource-type">🎧 Podcasts</span>
                <span className="resource-type">📖 Capítulo Interativo</span>
                <span className="resource-type">🧩 Caso Prático</span>
                <span className="resource-type">💬 Fórum Temático</span>
                <span className="resource-type">✅ Avaliação Formativa</span>
              </div>
              <Link to="/modulo3GC" className="btn primary" style={{ marginTop: '1rem', display: 'inline-block' }}>
                Acessar Módulo
              </Link>
            </div>
          </div>

          <div className="module">
            <h3>Módulo 4: Infraestrutura da GC no Setor Público</h3>
            <div className="module-content">
              <p>Estratégias, sistemas e plataformas que sustentam a gestão do conhecimento nas organizações públicas.</p>
              <ul className="learning-objectives">
                <li>Identificar componentes essenciais da infraestrutura de GC</li>
                <li>Avaliar sistemas de informação para GC</li>
                <li>Planejar a implementação de tecnologias de apoio</li>
              </ul>
              <div className="resources">
                <span className="resource-type">🎥 Vídeo-aula</span>
                <span className="resource-type">🎧 Podcasts</span>
                <span className="resource-type">📖 Capítulo Interativo</span>
                <span className="resource-type">🧩 Caso Prático</span>
                <span className="resource-type">💬 Fórum Temático</span>
                <span className="resource-type">✅ Avaliação Formativa</span>
              </div>
              <Link to="/modulo4GC" className="btn primary" style={{ marginTop: '1rem', display: 'inline-block' }}>
                Acessar Módulo
              </Link>
            </div>
          </div>

          <div className="module">
            <h3>Módulo 5: Cultura Organizacional e GC</h3>
            <div className="module-content">
              <p>Como desenvolver uma cultura propícia à gestão do conhecimento em organizações públicas.</p>
              <ul className="learning-objectives">
                <li>Diagnosticar a cultura organizacional para GC</li>
                <li>Implementar estratégias de mudança cultural</li>
                <li>Promover comportamentos de compartilhamento de conhecimento</li>
              </ul>
              <div className="resources">
                <span className="resource-type">🎥 Vídeo-aula</span>
                <span className="resource-type">🎧 Podcasts</span>
                <span className="resource-type">📖 Capítulo Interativo</span>
                <span className="resource-type">🧩 Caso Prático</span>
                <span className="resource-type">💬 Fórum Temático</span>
                <span className="resource-type">✅ Avaliação Formativa</span>
              </div>
              <Link to="/modulo5GC" className="btn primary" style={{ marginTop: '1rem', display: 'inline-block' }}>
                Acessar Módulo
              </Link>
            </div>
          </div>

          <div className="module">
            <h3>Módulo 6: Liderança e GC</h3>
            <div className="module-content">
              <p>O papel da liderança na implementação e sustentação da gestão do conhecimento.</p>
              <ul className="learning-objectives">
                <li>Identificar competências de liderança para GC</li>
                <li>Desenvolver estratégias de engajamento da alta gestão</li>
                <li>Criar planos de comunicação para iniciativas de GC</li>
              </ul>
              <div className="resources">
                <span className="resource-type">🎥 Vídeo-aula</span>
                <span className="resource-type">🎧 Podcasts</span>
                <span className="resource-type">📖 Capítulo Interativo</span>
                <span className="resource-type">🧩 Caso Prático</span>
                <span className="resource-type">💬 Fórum Temático</span>
                <span className="resource-type">✅ Avaliação Formativa</span>
              </div>
              <Link to="/modulo6GC" className="btn primary" style={{ marginTop: '1rem', display: 'inline-block' }}>
                Acessar Módulo
              </Link>
            </div>
          </div>

          <div className="module">
            <h3>Módulo 7: Métricas e Avaliação em GC</h3>
            <div className="module-content">
              <p>Como medir o impacto e o retorno de investimentos em gestão do conhecimento.</p>
              <ul className="learning-objectives">
                <li>Selecionar indicadores relevantes para GC</li>
                <li>Implementar sistemas de monitoramento e avaliação</li>
                <li>Comunicar resultados e impactos das iniciativas</li>
              </ul>
              <div className="resources">
                <span className="resource-type">🎥 Vídeo-aula</span>
                <span className="resource-type">🎧 Podcasts</span>
                <span className="resource-type">📖 Capítulo Interativo</span>
                <span className="resource-type">🧩 Caso Prático</span>
                <span className="resource-type">💬 Fórum Temático</span>
                <span className="resource-type">✅ Avaliação Formativa</span>
              </div>
              <Link to="/modulo7GC" className="btn primary" style={{ marginTop: '1rem', display: 'inline-block' }}>
                Acessar Módulo
              </Link>
            </div>
          </div>

          <div className="module">
            <h3>Módulo 8: GC e Inovação no Setor Público</h3>
            <div className="module-content">
              <p>A relação entre gestão do conhecimento e processos de inovação em organizações públicas.</p>
              <ul className="learning-objectives">
                <li>Integrar GC com processos de inovação</li>
                <li>Leveraging knowledge for public sector innovation</li>
                <li>Criar ambientes propícios à inovação baseada em conhecimento</li>
              </ul>
              <div className="resources">
                <span className="resource-type">🎥 Vídeo-aula</span>
                <span className="resource-type">🎧 Podcasts</span>
                <span className="resource-type">📖 Capítulo Interativo</span>
                <span className="resource-type">🧩 Caso Prático</span>
                <span className="resource-type">💬 Fórum Temático</span>
                <span className="resource-type">✅ Avaliação Formativa</span>
              </div>
              <Link to="/modulo8GC" className="btn primary" style={{ marginTop: '1rem', display: 'inline-block' }}>
                Acessar Módulo
              </Link>
            </div>
          </div>

          <div className="module">
            <h3>Módulo 9: Implementação de GC - Caso Prático</h3>
            <div className="module-content">
              <p>Aplicação prática de todos os conceitos em um projeto integrado de gestão do conhecimento.</p>
              <ul className="learning-objectives">
                <li>Desenvolver um plano de implementação de GC</li>
                <li>Antecipar e superar desafios de implementação</li>
                <li>Apresentar resultados e lições aprendidas</li>
              </ul>
              <div className="resources">
                <span className="resource-type">🎥 Vídeo-aula</span>
                <span className="resource-type">🎧 Podcasts</span>
                <span className="resource-type">📖 Capítulo Interativo</span>
                <span className="resource-type">🧩 Projeto Final</span>
                <span className="resource-type">💬 Fórum Temático</span>
                <span className="resource-type">✅ Avaliação Final</span>
              </div>
              <Link to="/modulo9GC" className="btn primary" style={{ marginTop: '1rem', display: 'inline-block' }}>
                Acessar Módulo
              </Link>
            </div>
          </div>
        </section>

        <section id="resources" className="course-resources">
          <h2>Recursos Adicionais</h2>
          <div className="resource-list">
            <div className="resource-item">
              <h3>Biblioteca Digital</h3>
              <ul>
                <li><a href="#">Artigos científicos sobre GC</a></li>
                <li><a href="#">Relatórios de casos de implementação</a></li>
                <li><a href="#">Legislação relacionada</a></li>
              </ul>
            </div>
            <div className="resource-item">
              <h3>Ferramentas Úteis</h3>
              <ul>
                <li><a href="#">Modelos de documentos</a></li>
                <li><a href="#">Checklists de implementação</a></li>
                <li><a href="#">Ferramentas de diagnóstico</a></li>
              </ul>
            </div>
            <div className="resource-item">
              <h3>Comunidade</h3>
              <ul>
                <li><a href="#">Fórum de discussão geral</a></li>
                <li><a href="#">Grupos por área de atuação</a></li>
                <li><a href="#">Eventos e webinars</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section id="instructors" className="course-instructors">
          <h2>Instrutores</h2>
          <div className="instructor-grid">
            <div className="instructor">
              <img src="C:\Users\Renan\Documents\Renan\LeFul\Prospecção\Diagramacao\Grego\Imagens_Livro" alt="Prof. Gregorio Varvakis" />
              <h3>Prof. Gregório Varvakis</h3>
              <p>Doutor em Manufacturing Engineering com 15 anos de experiência em GC</p>
            </div>
            <div className="instructor">
              <img src="/images/instructor2.jpg" alt="Prof. Klaus North" />
              <h3>Prof. Klaus North</h3>
              <p>Especialista em Gestão do Conhecimento para organizações internacionais</p>
            </div>
            <div className="instructor">
              <img src="/images/instructor3.jpg" alt="Prof. Mariana Oliveira" />
              <h3>Prof. Fulano de Tal</h3>
              <p>Consultora em Gestão do Conhecimento para organizações internacionais</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default CursoGC;