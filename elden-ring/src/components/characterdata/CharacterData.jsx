import React, { useEffect, useState, useContext, createContext } from 'react'
import Gear from './gear/Gear'
import Levels from './levels/Levels'
import Stats from './stats/Stats'

import { fetchFromAPI } from '../../utils/fetchFromAPI'

const CharacterData = () => {
	const [classData, setClassData] = useState([])

	const [description, setDescription] = useState('')

	const [className, setClassName] = useState('')
	const [dexterity, setDexterity] = useState(null)
	const [arcane, setArcane] = useState(null)
	const [endurance, setEndurance] = useState(null)
	const [faith, setFaith] = useState(null)
	const [intelligence, setIntelligence] = useState(null)
	const [level, setLevel] = useState(null)
	const [mind, setMind] = useState(null)
	const [strength, setStrength] = useState(null)
	const [vigor, setVigor] = useState()
	useEffect(() => {
		fetchFromAPI(`classes?name=${className}`).then(({ data }) => {
			setClassData(data.data[0].stats)
			setDescription(data.data[0].description)
			setDexterity(data.data[0].stats.dexterity)
			setArcane(data.data[0].stats.arcane)
			setEndurance(data.data[0].stats.endurance)
			setFaith(data.data[0].stats.faith)
			setIntelligence(data.data[0].stats.intelligence)
			setLevel(data.data[0].stats.level)
			setMind(data.data[0].stats.mind)
			setStrength(data.data[0].stats.strength)
			setVigor(data.data[0].stats.vigor)
			setClassName(data.data[0].name)
			// FOLLOW THIS, create state var above, then assign teh state within here. Do this for all the pieces of data we need
		})
	}, [className])

	// console.log(className, description)

	return (
		<div className="flex-container-even  h-screen bg-black">
			<div className="flex-container-even">
				<Levels
				classData={classData}
					className={className}
					setClassName={setClassName}
					dexterity={dexterity}
					setDexterity={setDexterity}
					arcane={arcane}
					setArcane={setArcane}
					endurance={endurance}
					setEndurance={setEndurance}
					faith={faith}
					setFaith={setFaith}
					intelligence={intelligence}
					setIntelligence={setIntelligence}
					level={level}
					setLevel={setLevel}
					mind={mind}
					setMind={setMind}
					strength={strength}
					setStrength={setStrength}
					vigor={vigor}
					setVigor={setVigor}
					description={description}
				/>
				<Gear />
				<Stats />
			</div>
		</div>
	)
}

export default CharacterData

// We need to figure out a way to store the api data, pass it to our other component and render out the data.
