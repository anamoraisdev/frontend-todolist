
import Home from './paginas/home';
import "./app.css"
import { useEffect, useState } from 'react';

function App() {
  const [darkMode, setDarkMode]= useState(false)

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true)
    } else {
      setDarkMode(false)
    }
  },[])

  return (
    <div className={`${darkMode? "dark" : ""}`}>
      <Home darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  );
}

export default App;
                                                                                                                      