import React, { useState } from 'react';
import Form from './Form';
import TeamMember from './TeamMember';
import './App.css';

function App() {

  const [teamMember, setTeamMember] = useState([]);

  const addMember = member => setTeamMember([...teamMember, member]);


  return (
    <div className="App">
      <h1>Sheila's Team Builder</h1>
      {teamMember.map(member => (
        <TeamMember member={member}/>
      ))}
      <Form addMember={addMember} />
    </div>
  );
}
export default App;