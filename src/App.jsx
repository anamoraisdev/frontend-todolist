
import Home from './paginas/home';
import "./app.css"
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode]= useState(false)

  return (
    <div className={`${darkMode? "dark" : ""}`}>
      <Home darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  );
}

export default App;
                                                                                                                      