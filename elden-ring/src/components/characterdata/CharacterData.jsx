import React, { useEffect, useState } from 'react'
import Gear from './gear/Gear'
import Levels from './levels/Levels'
import Stats from './stats/Stats'

import { fetchFromAPI } from '../../utils/fetchFromAPI'

const CharacterData = () => {
	const [classData, setClassData] = useState([])

	const [description, setDescription] = useState('')

	const [className, setClassName] = useState('')

	const [stats, setStats] = useState({
		dexterity: { name: 'Dexterity', init: null, value: null },
		arcane: { name: 'Arcane', init: null, value: null },
		endurance: { name: 'Endurance', init: null, value: null },
		faith: { name: 'Faith', init: null, value: null },
		intelligence: { name: 'Intelligence', init: null, value: null },
		level: { name: 'Level', init: null, value: null },
		mind: { name: 'Mind', init: null, value: null },
		strength: { name: 'Strength', init: null, value: null },
		vigor: { name: 'Vigor', init: null, value: null },
	})

	const [level, setLevel] = useState(null)

	const [armorData, setArmorData] = useState([])
	const [talismansData, setTalismansData] = useState([])
	const [ashesData, setAshesData] = useState([])
	const [weaponData, setWeaponData] = useState([])
	useEffect(() => {
		fetchFromAPI(`classes?name=${className}`).then(({ data }) => {
			setClassData(data.data[0].stats)
			setDescription(data.data[0].description)

			setStats({
				...stats,
				dexterity: {
					...stats.dexterity,
					init: data.data[0].stats.dexterity,
					value: data.data[0].stats.dexterity,
				},
				arcane: {
					...stats.arcane,
					init: data.data[0].stats.arcane,
					value: data.data[0].stats.arcane,
				},
				endurance: {
					...stats.endurance,
					init: data.data[0].stats.endurance,
					value: data.data[0].stats.endurance,
				},
				faith: {
					...stats.faith,
					init: data.data[0].stats.faith,
					value: data.data[0].stats.faith,
				},
				intelligence: {
					...stats.intelligence,
					init: data.data[0].stats.intelligence,
					value: data.data[0].stats.intelligence,
				},
				level: {
					...stats.level,
					init: data.data[0].stats.level,
					value: data.data[0].stats.level,
				},
				mind: {
					...stats.mind,
					init: data.data[0].stats.mind,
					value: data.data[0].stats.mind,
				},
				strength: {
					...stats.strength,
					init: data.data[0].stats.strength,
					value: data.data[0].stats.strength,
				},
				vigor: {
					...stats.vigor,
					init: data.data[0].stats.vigor,
					value: data.data[0].stats.vigor,
				},
			})

			setClassName(data.data[0].name)
		})
	}, [className])

	useEffect(() => {
		let page = 0
		const newArmor = []
		const fetchArmorData = async () => {
			while (page < 6) {
				const { data } = await fetchFromAPI(`armors?limit=100&page=${page}`)
				newArmor.push(...data.data)
				page++
			}
			setArmorData(newArmor)
		}
		fetchArmorData()
	}, [])

	useEffect(() => {
		fetchFromAPI(`talismans?limit=100`).then(({ data }) => {
			setTalismansData(data.data)
		})
	}, [])
	useEffect(() => {
		fetchFromAPI(`ashes?limit=100`).then(({ data }) => {
			setAshesData(data.data)
		})
	}, [])

	useEffect(() => {
		let page = 0
		const newWeapons = []
		const fetchWeaponsData = async () => {
			while (page < 5) {
				const { data } = await fetchFromAPI(`weapons?limit=100&page=${page}`)
				newWeapons.push(...data.data)
				page++
			}
			setWeaponData(newWeapons)
		}
		fetchWeaponsData()
	}, [])

	return (
		<div className="lg:flex-container-even mobile-container h-full bg-black ">
			<div className="mobile-container lg:flex-container-even  bg-black">
				<Levels
					stats={stats}
					setStats={setStats}
					classData={classData}
					className={className}
					setClassName={setClassName}
					level={level}
					setLevel={setLevel}
					description={description}
				/>
				<Gear
					armor={armorData}
					talismansData={talismansData}
					weapons={weaponData}
					stats={stats}
					ashes={ashesData}
				/>
				{/* <Stats /> */}
			</div>
		</div>
	)
}

export default CharacterData
