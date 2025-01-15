import React, { useState } from "react";

function MoodForm() {
  const [mood, setMood] = useState("");
  const [thoughts, setThoughts] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const moodEntry = {
      mood,
      thoughts,
      date: new Date().toLocaleDateString(),
    };

    const moodLogs = JSON.parse(localStorage.getItem("moodLogs")) || [];
    moodLogs.push(moodEntry);
    localStorage.setItem("moodLogs", JSON.stringify(moodLogs));

    setMood("");
    setThoughts("");
    alert("Mood logged successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="mood-form">
      <h2>Log Your Mood</h2>
      <label>
        Mood:
        <select value={mood} onChange={(e) => setMood(e.target.value)} required>
          <option value="">Select your mood</option>
          <option value="Happy">Happy</option>
          <option value="Sad">Sad</option>
          <option value="Angry">Angry</option>
          <option value="Excited">Excited</option>
        </select>
      </label>
      <label>
        Thoughts:
        <textarea
          value={thoughts}
          onChange={(e) => setThoughts(e.target.value)}
          required
        ></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MoodForm;



