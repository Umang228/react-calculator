import './App.css'
import Header from './Header'
import Calculator from './Calculator'
import Draggable from 'react-draggable'
import React from 'react'

function App() {
	return (
		<div className="App">
			<Header />
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
