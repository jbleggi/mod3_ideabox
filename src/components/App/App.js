import './App.css';
import Ideas from '../Ideas/Ideas.js';
import Form from '../Form/Form.js';
import { useState } from 'react'

function App(){
  const [ideas, setIdeas] = useState([]);

  function addIdea (newIdea) {
    setIdeas([...ideas, newIdea])
  }

  function deleteIdea(id){
    console.log(id);
    const filteredIdeas = ideas.filter(idea => idea.id !== id)
    setIdeas(filteredIdeas)
  }

  return(
    <main className='App'>
        <h1>IdeaBox</h1>
        <p>Jillian's Ideas</p>
        <Form addIdea={addIdea}/>
        <Ideas ideas={ideas} deleteIdea={deleteIdea}/>
    </main>
  )
}

export default App;