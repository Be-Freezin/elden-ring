import React, { useEffect, useState, useContext, createContext } from 'react'
import Gear from './gear/Gear'
import Levels from './levels/Levels'
import Stats from './stats/Stats'

import { fetchFromAPI } from '../../utils/fetchFromAPI'

const CharacterData = () => {
	const [classData, setClassData] = useState([])
	const [className, setClassName] = useState('Hero')
	useEffect(() => {
		fetchFromAPI(`classes?name=${className}`).then((data) =>
			setClassData(data.data[0])
		)
	}, [className])
	const { name, stats, description, image } = classData

	// description: 'A stalwart Hero, at home with a battleaxe, descended from a badlands chieftain'
	// id: '17f69d71826l0i32gkm3ndn3kywxqj'
	// image: 'https://eldenring.fanapis.com/images/classes/17f69d71826l0i32gkm3ndn3kywxqj.png'
	// name: 'Hero'
	// stats: arcane: '11'
	// dexterity: '9'
	// endurance: '12'
	// faith: '8'
	// intelligence: '7'
	// level: '7'
	// mind: '9'
	// strength: '16'
	// vigor: '14'

	// const [cvigor, setCvigor] = useState("")
	console.log(classData)

	return (
		<div className="flex-container-even  h-screen bg-black">
			<div className="flex-container-even">
				<Levels
					className={className}
					setClassName={setClassName}
					classData={classData}
					// vigor={vigor}
					// name={name}
					// stats={stats}
					// description={description}
					// image={image}
				/>
				<Gear />
				<Stats />
			</div>
		</div>
	)
}

export default CharacterData

// We need to figure out a way to store the api data, pass it to our other component and render out the data.
