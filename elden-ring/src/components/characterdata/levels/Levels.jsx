import React from 'react'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'

const Levels = ({
	className,
	setClassName,
	dexterity,
	setDexterity,
	arcane,
	setArcane,
	endurance,
	setEndurance,
	faith,
	setFaith,
	intelligence,
	setIntelligence,
	level,
	setLevel,
	mind,
	setMind,
	strength,
	setStrength,
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
	function add() {
		setVigor((prevVigor) => ({
			...prevVigor,
			vig: prevVigor.vig > 99 ? prevVigor.vig : +prevVigor.vig + 1,
		}))
	}
	function subtract() {
		setVigor((prevVigor) => ({
			...prevVigor,
			vig:
				prevVigor.vig === prevVigor.initVigor
					? prevVigor.initVigor
					: +prevVigor.vig - 1,
		}))
	}
	console.log(typeof vig)
	// When we load the page, our ternary for subtract acts as intended, but once we hit the up arrow, or ternary breaks and we can go below the baseVigor value. We need to work on this.

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
					<div className="w-full flex justify-between">
						<span>Vigor</span>
						<span>{initVigor}</span>
						<input
							className="w-10 text-center bg-black border-2 border-accent-primary rounded-md"
							type="text"
							value={vig}
						/>
						<span>{vig}</span>
						<div className="flex">
							<TiArrowSortedUp
								onClick={add}
								size={25}
								className="cursor-pointer mr-2"
							/>
							<TiArrowSortedDown
								onClick={subtract}
								size={25}
								className="cursor-pointer"
							/>
						</div>
					</div>
					<span>Mind: {mind}</span>
					<span>Endurance: {endurance}</span>
					<span>Strength: {strength}</span>
					<span>Dexterity: {dexterity}</span>
					<span>Intelligence: {intelligence}</span>
					<span>Faith: {faith}</span>
					<span>Arcane: {arcane}</span>
				</div>
			</div>
		</div>
	)
}

// We need to apply some logic for out text to render
//We also need to get our styling dialed in. I think this is something we should work on the second we get teh apiu calls working.{classData[0].name}

export default Levels
