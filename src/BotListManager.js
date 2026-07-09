import React, { useState } from 'react';
import './BotListManager.css';

const BotListManager = () => {
    const [newBot, setNewBot] = useState({ id: "", name: "", status: "Stopped", task: "" });
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

    const handleDelete = (id) => {
        const updatedBots = bots.filter(bot => bot.id !== id);
        setBots(updatedBots);
    }

    const addBot = () => {
        if (newBot.id && newBot.name && newBot.task && newBot.status) {
            setBots([...bots, newBot]);
            setNewBot({ id: "", name: "", status: "Stopped", task: "" });
        }
    };

    return (
        <div className="bot-list-manager">
            <h1>Bot List Manager</h1>
            <ul className="bot-list">
                {bots.map((bot) => (
                    // Display each bot's name, status, and task, along with a button to trigger a job
                    <li key={bot.id} className="bot-card">
                        <span >{bot.name} - <span style={{ color: bot.status === "Running" ? "green" : "red" }}>{bot.status}</span> - {bot.task}</span>
                        <button className="trigger-button" onClick={() => triggerJob(bot.id)}>Trigger Job</button>
                        <button className="delete-button" onClick={() => handleDelete(bot.id)}>Delete</button>
                    </li>
                )
                )}
            </ul>
            <div className="add-bot-form">
                <input type="text"
                    placeholder="Bot ID"
                    value={newBot.id}
                    onChange={(e) => setNewBot({ ...newBot, id: e.target.value })} />
                <input
                    type="text"
                    placeholder="Bot Name"
                    value={newBot.name}
                    onChange={(e) => setNewBot({ ...newBot, name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Task"
                    value={newBot.task}
                    onChange={(e) => setNewBot({ ...newBot, task: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Status"
                    value={newBot.status}
                    onChange={(e) => setNewBot({ ...newBot, status: e.target.value })}
                />
                <button className="add-button" onClick={() => { addBot() }}>Add Bot</button>
            </div>
        </div >
    );
};

export default BotListManager;