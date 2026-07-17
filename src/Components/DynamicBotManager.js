import React, { useState } from 'react';

const DynamicBotManager = () => {
  const [bots, setBots] = useState([
    { id: '1', name: 'Email Bot', status: 'Active' },
    { id: '2', name: 'Data Bot', status: 'Inactive' }
  ]);

  // State to manage the new bot input fields
  const [newBot, setNewBot] = useState({ id: '', name: '', status: '' });
  // State to manage the visibility of the bot list
  const [show, setShow] = useState(false);

  // Function to toggle the visibility of the bot list
  const showHideBot = () => {
    setShow(!show);
  }
  // Function to handle input changes for the new bot
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBot({ ...newBot, [name]: value });
  };
  // Function to add a new bot to the list
  const addBotToList = () => {
    if (newBot.id && newBot.name && newBot.status) {
      setBots([...bots, newBot]);
      setNewBot({ id: "", name: "", status: "" });
    }
  };
  // Function to delete a bot from the list
  const deleteBot = (id) => {
    // Filter out the bot with the specified id and update the state
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
        {/* Render the list of bots only if show is true */}
        <button className="show-hide-toggle" onClick={() => showHideBot()}>Show/Hide</button>
        {show && bots.map((bot) => (
          <li key={bot.id} className="bot-card">
            <span >{bot.name} - <span style={{ color: bot.status === "Active" ? "green" : "red" }}>{bot.status}</span></span>
            <button className="delete-button" onClick={() => deleteBot(bot.id)}>Delete</button>
          </li>
        )  
        )}
      </ul>
    </div>
    );  
};

    export default DynamicBotManager;