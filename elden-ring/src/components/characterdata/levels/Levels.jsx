import React from 'react'

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
	initArcane,
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
			<option className="text-white " key={id} value={element.name}>
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
	function increaseLevel() {
		setLevel(+level + 1) 
	}
	function decreaseLevel() {
		setLevel(+level - 1) 
	}
	//! APPLY LOGIC TO THE LEVELS
	const handleAdd = (state, setState, property, value) => {
		handleUpdateState(state, setState, property, value < 98 ? +value + 1 : value)
		increaseLevel()
		
	}
	const handleSubtract = (state, setState, property, init, value) => {
		handleUpdateState(
			state,
			setState,
			property,
			init,
			value > init ? +value - 1 : value
		)
		decreaseLevel()
	}
	//! WORK ON THIS SUBTRACTION METHOD
	function subtract() {
		setVigor((prevVigor) => ({
			...prevVigor,
			vig: prevVigor.vig === prevVigor.initVigor ? null : +prevVigor.vig - 1,
		}))
	}
	

	return (
		<div className="data-container border-2 border-accent-primary h-fit ">
			<div className="flex flex-col px-2 justify-evenly h-36">
				<div className="flex flex-col">
					<span className="small-txt">Starting Class</span>
					<select
						className="dropdown-select"
						onChange={handleChange}
						name="classList"
						id="classList"
					>
						{classList}
					</select>
				</div>
				{/* <h3 className="font-bold text-white">{className}</h3> */}
				<div className="flex flex-col">
					<span className="small-txt">Character Name</span>
					<input className="dropdown-select" type="text" />
				</div>
				<span className="text-white">Level : {level}</span>
			</div>

			<div className="mt-6 text-white  h-96 px-2 py-4">
				<div className=" w-3/4 flex justify-between text-sm text-white_muted">
					<span className="">Stat</span>
					<span className="ml-14">Init</span>
					<span className="ml-2">Value</span>
					<span>Total</span>
				</div>
				<div className="flex flex-col  justify-evenly h-full">
					<Stat
						value={vig}
						name={vigName}
						initValue={initVigor}
						add={() => handleAdd(vigor, setVigor, 'vig', vigor.vig)}
						subtract={() =>
							handleSubtract(vigor, setVigor, 'vig', vigor.initVig, vigor.vig)
						}
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
					<Stat
						value={int}
						initValue={initInt}
						add={() =>
							handleAdd(intelligence, setIntelligence, 'int', intelligence.int)
						}
						subtract={subtract}
						name={intName}
					/>
					<Stat
						value={fth}
						initValue={initFaith}
						add={() => handleAdd(faith, setFaith, 'fth', faith.fth)}
						subtract={subtract}
						name={faithName}
					/>
					<Stat
						value={arc}
						initValue={initArcane}
						add={() => handleAdd(arcane, setArcane, 'arc', arcane.arc)}
						subtract={subtract}
						name={arcaneName}
					/>
				</div>
			</div>
		</div>
	)
}

// We need to apply some logic for out text to render
//We also need to get our styling dialed in. I think this is something we should work on the second we get teh apiu calls working.{classData[0].name}

export default Levels
