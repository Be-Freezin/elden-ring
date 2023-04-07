import React, { useEffect, useState } from 'react'
import Gear from './gear/Gear'
import Levels from './levels/Levels'
import Stats from './stats/Stats'

import { fetchFromAPI } from '../../utils/fetchFromAPI'

const CharacterData = () => {
	const [classData, setClassData] = useState([])

	const [description, setDescription] = useState('')

	const [className, setClassName] = useState('')
	const [dexterity, setDexterity] = useState({
		initDex: null,
		dex: null,
	})
	const [arcane, setArcane] = useState({
		initArcane: null,
		arc: null,
	})
	const [endurance, setEndurance] = useState({
		initEndurance: null,
		endur: null,
	})
	const [faith, setFaith] = useState({
		initFaith: null,
		fth: null,
	})
	const [intelligence, setIntelligence] = useState({
		initInt: null,
		int: null,
	})
	const [level, setLevel] = useState(null)
	const [mind, setMind] = useState({
		initMind: null,
		mnd: null,
	})
	const [strength, setStrength] = useState({
		initStr: null,
		str: null,
	})
	const [vigor, setVigor] = useState({
		name:'Vigor',
		initVig: null,
		vig: null,
	})
	useEffect(() => {
		fetchFromAPI(`classes?name=${className}`).then(({ data }) => {
			setClassData(data.data[0].stats)
			setDescription(data.data[0].description)
			setDexterity({
				...dexterity,
				initDex: data.data[0].stats.dexterity,
				dex: data.data[0].stats.dexterity,
			})
			setArcane({
				...arcane,
				initArcane: data.data[0].stats.arcane,
				arc: data.data[0].stats.arcane,
			})
			setEndurance({
				...endurance,
				initEndurance: data.data[0].stats.endurance,
				endur: data.data[0].stats.endurance,
			})
			setFaith({
				...faith,
				initFaith: data.data[0].stats.faith,
				fth: data.data[0].stats.faith,
			})
			setIntelligence({
				...intelligence,
				initInt: data.data[0].stats.intelligence,
				int: data.data[0].stats.intelligence,
			})
			setLevel(data.data[0].stats.level)
			setMind({
				...mind,
				initMind: data.data[0].stats.mind,
				mnd: data.data[0].stats.mind,
			})
			setStrength({
				...strength,
				initStr: data.data[0].stats.strength,
				str: data.data[0].stats.strength,
			})
			setVigor({
				...vigor,
				initVig: data.data[0].stats.vigor,
				vig: data.data[0].stats.vigor,
			})
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

					initDex={dexterity.initDex}
					dex={dexterity.dex}
					dexterity={dexterity}
					setDexterity={setDexterity}

					arc={arcane.arc}
					initArcane={arcane.initArcane}
					arcane={arcane}
					setArcane={setArcane}

					initEndurance={endurance.initEndurance}
					endurance={endurance}
					endur={endurance.endur}
					setEndurance={setEndurance}

					fth={faith.fth}
					faith={faith}
					initFaith={faith.initFaith}
					setFaith={setFaith}

					int={intelligence.int}
					intelligence={intelligence}
					initInt={intelligence.initInt}
					setIntelligence={setIntelligence}
					level={level}
					setLevel={setLevel}
					mnd={mind.mnd}
					mind={mind}
					initMind={mind.initMind}
					setMind={setMind}
					strength={strength}
					str={strength.str}
					initStrength={strength.initStr}
					setStrength={setStrength}
					vigName={vigor.name}
					vig={vigor.vig}
					vigor={vigor}
					initVigor={vigor.initVig}
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
