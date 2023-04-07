import React from 'react'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import Stat from './Stat'

const Levels = ({
	className,
	setClassName,
	dexName,
	initDex,
	dex,
	dexterity,
	setDexterity,
	arcaneName,
	initArcance,
	arc,
	arcane,
	setArcane,
	endurName,
	initEndurance,
	endur,
	endurance,
	setEndurance,
	faithName,
	initFaith,
	fth,
	faith,
	setFaith,
	intName,
	initInt,
	intelligence,
	int,
	setIntelligence,

	level,
	setLevel,
	mindName,
	initMind,
	mnd,
	mind,
	setMind,
	strName,
	initStrength,
	str,
	strength,
	setStrength,

	vigName,
	vigor,
	vig,
	setVigor,
	initVigor,

	description,
	classData,
}) => {
	const classChoices = [
		{
			name: 'Hero',
		},
		{
			name: 'Warrior',
		},
		{
			name: 'Astrologer',
		},
		{
			name: 'Bandit',
		},
		{
			name: 'Prisoner',
		},
		{
			name: 'Vagabond',
		},
		{
			name: 'Confessor',
		},
		{
			name: 'Wretch',
		},
		{
			name: 'Prophet',
		},
		{
			name: 'Samurai',
		},
		{
			name: 'Enchanted Knight',
		},
		{
			name: 'Bloody Wolf',
		},
		{
			name: 'Champion',
		},
	]

	const classList = classChoices.map((element, id) => {
		return (
			<option className="text-black" key={id} value={element.name}>
				{element.name}
			</option>
		)
	})

	function handleChange(event) {
		setClassName(event.target.value)
	}
	function handleUpdateState(state, setState, property, value) {
		setState((prevState) => ({
			...prevState,
			[property]: value,
		}))
	}
	const handleAdd = (state, setState, property, value) => {
		handleUpdateState(state, setState, property, value < 98 ? +value + 1 : value)
	}
	function subtract() {
		setVigor((prevVigor) => ({
			...prevVigor,
			vig: prevVigor.vig === prevVigor.initVigor ? null : +prevVigor.vig - 1,
		}))
	}
	console.log(vigor)

	return (
		<div className="data-container border-2 border-accent-primary ">
			<div>
				{/* Insert an input to put character custom name */}
				<select onChange={handleChange} name="classList" id="classList">
					{classList}
				</select>
				<h3 className="font-bold text-white">{className}</h3>
			</div>
			<div className="mt-6 text-white h-full max-h-72">
				<div className="flex flex-col  justify-evenly h-full">
					<Stat
						value={vig}
						name={vigName}
						initValue={initVigor}
						add={() => handleAdd(vigor, setVigor, 'vig', vigor.vig)}
						subtract={subtract}
					/>
					<Stat
						value={mnd}
						initValue={initMind}
						add={() => handleAdd(mind, setMind, 'mnd', mind.mnd)}
						subtract={subtract}
						name={mindName}
					/>
					<Stat
						value={endur}
						initValue={initEndurance}
						add={() => handleAdd(endurance, setEndurance, 'endur', endurance.endur)}
						subtract={subtract}
						name={endurName}
					/>
					<Stat
						value={str}
						initValue={initStrength}
						add={() => handleAdd(strength, setStrength, 'str', strength.str)}
						subtract={subtract}
						name={strName}
					/>
					<Stat
						value={dex}
						initValue={initDex}
						add={() => handleAdd(dexterity, setDexterity, 'dex', dexterity.dex)}
						subtract={subtract}
						name={dexName}
					/>

					{/* 
					<span>Dexterity: {dexterity}</span>
					<span>Intelligence: {intelligence}</span>
					<span>Faith: {faith}</span>
					<span>Arcane: {arcane}</span> */}
				</div>
			</div>
		</div>
	)
}

// We need to apply some logic for out text to render
//We also need to get our styling dialed in. I think this is something we should work on the second we get teh apiu calls working.{classData[0].name}

export default Levels
