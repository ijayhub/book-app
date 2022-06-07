import Home from "./components/Home"
import TitleToggle from "./components/TitleToggle";
import React from 'react'



const App = () => {
  const [darkMode, setDarkMode] = React.useState(false);
  
  return (
		<>
      <div className={`${darkMode && 'dark-mode'}`}>
        <div>
					<TitleToggle handleToggleDarkMode={setDarkMode} />
				</div>
				<div>
					<Home />
        </div>
      </div>
			
		</>
	);
}

export default App
