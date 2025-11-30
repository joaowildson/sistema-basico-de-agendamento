import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [listaAgendamentos, setListaAgendamentos] = useState([]);

  function agendar() {
    if (!nome || !data || !hora || !email) {
      alert('preencha todos os dados');
      return;
    } else {
      alert('enviaremos um email para você confirmando o agendamento');
    }

    const novoAgendamento = `${nome} agendou para ${data} às ${hora}`;
    setListaAgendamentos([...listaAgendamentos, novoAgendamento]);

    setNome('');
    setEmail('');
    setData('');
    setHora('');
  }

  return (
    <div className="container">
      <h2>agendamento</h2>

      <input 
        type="text" 
        placeholder="Seu nome" 
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input 
        type="email" 
        placeholder="seu email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input 
        type="date" 
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <input 
        type="time" 
        value={hora}
        onChange={(e) => setHora(e.target.value)}
      />

      <button onClick={agendar}>Agendar</button>

      <div className="agendamento" id="listaAgendamento">
        <h3>agendamentos:</h3>
        {listaAgendamentos.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
}

export default App;