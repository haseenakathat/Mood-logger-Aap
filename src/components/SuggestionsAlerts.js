
import React, { useState, useEffect } from "react";

function SuggestionsAlerts() {
  const [suggestions, setSuggestions] = useState([]);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const moodLogs = JSON.parse(localStorage.getItem("moodLogs")) || [];

    if (moodLogs.length > 0) {

      fetch(`https://api.adviceslip.com/advice`)
        .then((res) => res.json())
        .then((data) => setSuggestions([data.slip.advice]))
        .catch(() => setSuggestions(["Take a walk", "Listen to music"]));

  
      const badMoods = moodLogs.filter(
        (log) => log.mood === "Sad" || log.mood === "Angry"
      );
      if (badMoods.length >= 3) {
        setAlerts([
          "You’ve been feeling down for 3 days. Consider seeking support.",
        ]);
      } else if (badMoods.length > 0) {
        setAlerts(["It's been a rough day, try something relaxing."]);
      }
    }
  }, []); 

  return (
    <div className="suggestions-alerts">
      <h2>Suggestions & Alerts</h2>
      <div>
        <h3>Suggestions:</h3>
        <ul>
          {suggestions.length > 0 ? (
            suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))
          ) : (
            <li>No suggestions available</li>
          )}
        </ul>
      </div>
      <div>
        <h3>Alerts:</h3>
        <ul>
          {alerts.length > 0 ? (
            alerts.map((alert, index) => (
              <li key={index}>{alert}</li>
            ))
          ) : (
            <li>No alerts at the moment</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default SuggestionsAlerts;





