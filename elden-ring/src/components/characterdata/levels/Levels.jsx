import React from 'react'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import Stat from './Stat'

const Levels = ({
	className,
	setClassName,
	initDex,
	dex,
	dexterity,
	setDexterity,

	initArcance,
	arc,
	arcane,
	setArcane,

	initEndur,
	endur,
	endurance,
	setEndurance,

	initFaith,
	fth,
	faith,
	setFaith,

	initInt,
	intelligence,
	int,
	setIntelligence,

	level,
	setLevel,

	initMind,
	mnd,
	mind,
	setMind,

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
	function add(state, setState, property, value) {
		setState((prevState) => ({
			...prevState,
			[property]: value,
		}))
	}
	const handleAdd = () => {
		add(vigor, setVigor, 'vig', vigor.vig < 98 ? +vigor.vig + 1 : vigor.vig)
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
						vig={vig}
						name={vigName}
						initVigor={initVigor}
						add={handleAdd}
						subtract={subtract}
					/>
					<Stat
						mind={mnd}
						initMind={initMind}
						add={handleAdd}
						subtract={subtract}
					/>

					{/* <span>Mind: {mind}</span>
					<span>Endurance: {endurance}</span>
					<span>Strength: {strength}</span>
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
