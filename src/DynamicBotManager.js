import React, { useState } from 'react';

const DynamicBotManager = () => {
  const [bots, setBots] = useState([
    { id: '1', name: 'Email Bot', status: 'Active' },
    { id: '2', name: 'Data Bot', status: 'Inactive' }
  ]);

  const [newBot, setNewBot] = useState({ id: '', name: '', status: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBot({ ...newBot, [name]: value });
  };

  const addBotToList = () => {
    if (newBot.id && newBot.name && newBot.status) {
      setBots([...bots, newBot]);
      setNewBot({ id: "", name: "", status: "" });
    }
  };

  const deleteBot = (id) => {
    const updatedBots = bots.filter(bot => bot.id !== id);
    setBots(updatedBots);
  }


return (
  <div className='dynamic-bot-manager'>
    <h1>Dynamic Bot Manager </h1>
    <div className="add-bot-form">
      <input type="text"
        placeholder="Bot ID"
        name="id"
        value={newBot.id}
        onChange={handleInputChange} />
        <input type="text"
        placeholder="Bot Name"
        name="name"
        value={newBot.name}
        onChange={handleInputChange} />
        <input type="text"
        placeholder="Bot Status"
        name="status"
        value={newBot.status}
        onChange={handleInputChange} />
      <button onClick={addBotToList}>Add Bot</button>
    </div>
      <ul>
        {bots.map((bot) => (
          <li key={bot.id} className="bot-card">
            <span >{bot.name} - <span style={{ color: bot.status === "Running" ? "green" : "red" }}>{bot.status}</span></span>
            <button className="delete-button" onClick={() => deleteBot(bot.id)}>Delete</button>
          </li>
        )
        )}
      </ul>
    </div>
    );
};

    export default DynamicBotManager;