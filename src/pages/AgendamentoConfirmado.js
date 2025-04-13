import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

export default function AgendamentoConfirmado() {
  const { state } = useLocation();
  const { agendamento } = state || {};

  return (
    <div className="confirmacao-container">
      <div className="confirmacao-card">
        <FaCheckCircle className="success-icon" />
        <h2>Agendamento Confirmado!</h2>
        
        <div className="detalhes-agendamento">
          <p><strong>Nome:</strong> {agendamento?.nome}</p>
          <p><strong>Data:</strong> {agendamento?.data}</p>
          <p><strong>Horário:</strong> {agendamento?.horario}</p>
          <p><strong>Tipo:</strong> {agendamento?.tipoConsulta}</p>
        </div>
        
        <p className="instrucoes">
          Você receberá um e-mail de confirmação com os detalhes da reunião.
          <br />
          Caso precise reagendar, entre em contato pelo e-mail contato@leful.com.br
        </p>
      </div>
    </div>
  );
}