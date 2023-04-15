import { useState } from 'react'
import CharacterData from './components/characterdata/CharacterData'
import Header from './components/header/Header'

function App() {
	

	return (
		<div className="App bg-black h-screen ">
			<header className=" mobile-container md:flex-container-even   ">
				<Header />
			</header>
			<main className=" mobile-container   ">
				<CharacterData />
			</main>
		</div>
	)
}

export default App
