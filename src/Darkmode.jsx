import React, { useState, useContext, createContext } from 'react';

// Create context for theme
const ThemeContext = createContext();

const Theme = () => {
  const isLightTheme = useContext(ThemeContext);
  
  // Apply the theme to the whole page
  document.body.style.backgroundColor = isLightTheme ? 'white' : 'black';
  document.body.style.color = isLightTheme ? 'black' : 'white';

  return <h1 style={{color:isLightTheme?"yellow":"red"}}>{isLightTheme ? 'Light Mode' : 'Dark Mode'}</h1>;
};

const App = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  return (
    <ThemeContext.Provider value={isLightTheme}>
      <button onClick={() => setIsLightTheme(!isLightTheme)}> Theme</button>
      <Theme />
    </ThemeContext.Provider>
  );
};

export default App;
