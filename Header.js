import { useEffect, useState } from 'react'
import './Header.css'

export const Header = () => {

  // const [currentTheme, setCurrenttheme] = useState(JSON.parse(localStorage.getItem("themeValue")) || "gOne")
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("themeValue")) || "gOne")

  useEffect(() =>{
    localStorage.setItem("themeValue",JSON.stringify(theme))
  },[theme])
  

  useEffect(() => {
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);},
  [theme])

  return (
    <div className='header'>
        <div className="logo">
            <span>TaskMate</span>
        </div>
        <div className="themeSelector">
            <span className= {theme==="light"? "light activeTheme" : "light"} onClick={() => setTheme("light")}></span>
            <span className= {theme==="dark"? "dark activeTheme" : "dark"} onClick={() => setTheme("dark")}></span>
            <span className= {theme==="sky"? "sky activeTheme" : "sky"} onClick={() => setTheme("sky")}></span>
            <span className= {theme==="gOne"? "gOne activeTheme" : "gOne"} onClick={() => setTheme("gOne")}></span>
            <span className= {theme==="gTwo"? "gTwo activeTheme" : "gTwo"} onClick={() => setTheme("gTwo")}></span>
        </div>
    </div>
  )
}
