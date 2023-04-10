import { useState } from 'react'
import CharacterData from './components/characterdata/CharacterData'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="App">
			<main className='mobile-container'>
				<CharacterData />
			</main>
		</div>
	)
}

export default App
