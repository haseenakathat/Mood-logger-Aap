
import React, { useState, useEffect } from "react";

function MoodHistory() {
  const [moodLogs, setMoodLogs] = useState([]);

  useEffect(() => {
    const logs = JSON.parse(localStorage.getItem("moodLogs")) || [];
    setMoodLogs(logs);
  }, []);

  const handleDelete = (index) => {
    const updatedLogs = moodLogs.filter((_, i) => i !== index);
    localStorage.setItem("moodLogs", JSON.stringify(updatedLogs));
    setMoodLogs(updatedLogs);
  };

  const handleEdit = (index, updatedMood, updatedThoughts) => {
    const updatedLogs = [...moodLogs];
    updatedLogs[index] = { ...updatedLogs[index], mood: updatedMood, thoughts: updatedThoughts };
    localStorage.setItem("moodLogs", JSON.stringify(updatedLogs));
    setMoodLogs(updatedLogs);
  };

  return (
    <div className="mood-history">
      <h2>Mood History</h2>
      <ul>
        {moodLogs.map((log, index) => (
          <li key={index}>
            <p>
              <strong>Date:</strong> {log.date}
            </p>
            <p>
              <strong>Mood:</strong> {log.mood}
            </p>
            <p>
              <strong>Thoughts:</strong> {log.thoughts}
            </p>
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button onClick={() => {
              const newMood = prompt("Edit mood:", log.mood);
              const newThoughts = prompt("Edit thoughts:", log.thoughts);
              if (newMood && newThoughts) {
                handleEdit(index, newMood, newThoughts);
              }
            }}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoodHistory;




