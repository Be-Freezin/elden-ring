import React, { useEffect, useState, useContext, createContext } from 'react'
import Gear from './gear/Gear'
import Levels from './levels/Levels'
import Stats from './stats/Stats'

import { fetchFromAPI } from '../../utils/fetchFromAPI'

const CharacterData = () => {
	const [className, setClassName] = useState('')
	const [classData, setClassData] = useState([])

	useEffect(() => {
		fetchFromAPI(`classes?name=${className}`).then((data) =>
			setClassData(data.data[0])
		)
	}, [className])
	const { name, stats, description, image } = classData
	console.log(name)

	return (
		<div className="flex-container-even  h-screen">
			<div className="flex-container-even">
				<Levels
					className={className}
					setClassName={setClassName}
					classData={classData}
				/>
				<Gear />
				<Stats />
			</div>
		</div>
	)
}

export default CharacterData

// We need to figure out a way to store the api data, pass it to our other component and render out the data.
