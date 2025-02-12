import './App.css'
import Header from './Header'
import Calculator from './Calculator'
import Draggable from 'react-draggable'
import React, { useState } from 'react'

function App() {
	const [darkMode, setDarkMode] = useState(false)

	return (
		<div className={`App ${darkMode ? 'dark' : ''}`}>
			<Header />
			<button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
				{darkMode ? 'Light Mode' : 'Dark Mode'}
			</button>
			<main>
				<div className="calc-parent">
					<Draggable id="drag" handle="#handle" data-testid="draggable">
						<div className="box">
							<Calculator id="calc" />
						</div>
					</Draggable>
				</div>
			</main>
		</div>
	)
}

export default App
