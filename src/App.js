import React from 'react';
import { useState, useEffect } from 'react';
import Editor from './Editor';
import useLocalStorage from './Hooks/useLocalStorage';
function App() {
  const [html, setHtml] = useLocalStorage('html','')
  const [css, setCss] = useLocalStorage('css','')
  const [js, setJs] = useLocalStorage('js','')
  const [srcDoc , setScrDoc] = useState('');
  useEffect(() => {
    const timeout = setTimeout(() => {
      setScrDoc(` <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script> 
    </html>`)
    },500)

    return () => clearTimeout(timeout);
  },[html,css,js]) 
  return (
    <>
      <div className='header'><h1>CODE EDITOR</h1></div>
      <div className='pane top-pane'>
         <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc= {srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
