import React, { useState } from 'react';
import './BotListManager.css';

const BotListManager = () => {
  const [bots, setBots] = useState([
    { id: 1, name: "Email Extractor", status: "Running", task: "Extracting emails" },
    { id: 2, name: "Notification Sender", status: "Completed", task: "Sending notifications" },
    { id: 3, name: "Data Analyzer", status: "Stopped", task: "Analyzing data" }
  ]);

  const triggerJob = (id) => {
    // Implement this function to change the status of the bot
    const updatedBots = bots.map(bot => {
      if (bot.id === id) {
        return { ...bot, status: bot.status === "Running" ? "Stopped" : "Running" }; // Change status to Running
      } else {
        return bot;
      }
    });
    setBots(updatedBots);
  };

  return (
    <div className="bot-list-manager">
      <h1>Bot List Manager</h1>
      <ul>
        {bots.map((bot) => (
            // Display each bot's name, status, and task, along with a button to trigger a job
            <li key={bot.id} className="bot-card">
              <span >{bot.name} - <span style={{ color: bot.status === "Running" ? "green" : "red"}}>{bot.status}</span> - {bot.task}</span>
              <button className="trigger-button" onClick={() => triggerJob(bot.id)}>Trigger Job</button>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default BotListManager;