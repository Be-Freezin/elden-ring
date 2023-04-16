import React from 'react'

import Stat from '../stat/Stat'

const Levels = ({
	stats,
	setStats,

	setClassName,
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
	function handleUpdateState(state, setState, propertyName, value) {
		setState((prevState) => ({
			...prevState,

			[propertyName]: {
				...prevState[propertyName],
				value,
			},
		}))
	}
	function increaseLevel() {
		handleUpdateState(
			stats,
			setStats,
			'level',
			stats.level.value < 98 ? +stats.level.value + 1 : stats.level.value
		)
	}
	function decreaseLevel() {
		handleUpdateState(
			stats,
			setStats,
			'level',
			stats.level.value > stats.level.init
				? +stats.level.value - 1
				: stats.level.value
		)
	}

	const handleAdd = (state, setState, propertyName, value) => {
		handleUpdateState(
			state,
			setState,
			propertyName,

			value < 98 ? +value + 1 : value
		)
		increaseLevel()
	}
	const handleSubtract = (state, setState, propertyName, init, value) => {
		handleUpdateState(
			state,
			setState,
			propertyName,

			value > init ? (value -= 1) : value
		)
		decreaseLevel()
	}

	return (
		<div className="h-fit lg:data-container border-2 border-theme-secondary  ">
			<div className="flex flex-col px-2 justify-evenly h-56 ">
				<div className="flex flex-col">
					<span className="small-txt-label">Starting Class</span>
					<select
						className="daisy-select"
						onChange={handleChange}
						name="classList"
						id="classList"
					>
						{classList}
					</select>
				</div>

				<div className="flex flex-col">
					<span className="small-txt">Character Name</span>
					<input className="daisy-input" type="text" />
				</div>
				<span className="text-white">Level : {stats.level.value}</span>
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
						value={stats.vigor.value}
						name={stats.vigor.name}
						initValue={stats.vigor.init}
						add={() => handleAdd(stats, setStats, 'vigor', stats.vigor.value)}
						subtract={() =>
							handleSubtract(
								stats,
								setStats,
								'vigor',
								stats.vigor.init,
								stats.vigor.value
							)
						}
					/>
					<Stat
						value={stats.mind.value}
						initValue={stats.mind.init}
						add={() => handleAdd(stats, setStats, 'mind', stats.mind.value)}
						subtract={() =>
							handleSubtract(
								stats,
								setStats,
								'mind',
								stats.mind.init,
								stats.mind.value
							)
						}
						name={stats.mind.name}
					/>
					<Stat
						value={stats.endurance.value}
						initValue={stats.endurance.init}
						add={() =>
							handleAdd(stats, setStats, 'endurance', stats.endurance.value)
						}
						subtract={() =>
							handleSubtract(
								stats,
								setStats,
								'endurance',
								stats.endurance.init,
								stats.endurance.value
							)
						}
						name={stats.endurance.name}
					/>
					<Stat
						value={stats.strength.value}
						initValue={stats.strength.init}
						add={() =>
							handleAdd(stats, setStats, 'strength', stats.strength.value)
						}
						subtract={() =>
							handleSubtract(
								stats,
								setStats,
								'strength',
								stats.strength.init,
								stats.strength.value
							)
						}
						name={stats.strength.name}
					/>
					<Stat
						value={stats.dexterity.value}
						initValue={stats.dexterity.init}
						add={() =>
							handleAdd(stats, setStats, 'dexterity', stats.dexterity.value)
						}
						subtract={() =>
							handleSubtract(
								stats,
								setStats,
								'dexterity',
								stats.dexterity.init,
								stats.dexterity.value
							)
						}
						name={stats.dexterity.name}
					/>
					<Stat
						value={stats.intelligence.value}
						initValue={stats.intelligence.init}
						add={() =>
							handleAdd(
								stats,
								setStats,
								'intelligence',
								stats.intelligence.value
							)
						}
						subtract={() =>
							handleSubtract(
								stats,
								setStats,
								'intelligence',
								stats.intelligence.init,
								stats.intelligence.value
							)
						}
						name={stats.intelligence.name}
					/>
					<Stat
						value={stats.faith.value}
						initValue={stats.faith.init}
						add={() => handleAdd(stats, setStats, 'faith', stats.faith.value)}
						subtract={() =>
							handleSubtract(
								stats,
								setStats,
								'faith',
								stats.faith.init,
								stats.faith.value
							)
						}
						name={stats.faith.name}
					/>
					<Stat
						value={stats.arcane.value}
						initValue={stats.arcane.init}
						add={() => handleAdd(stats, setStats, 'arcane', stats.arcane.value)}
						subtract={() =>
							handleSubtract(
								stats,
								setStats,
								'arcane',
								stats.arcane.init,
								stats.arcane.value
							)
						}
						name={stats.arcane.name}
					/>
				</div>
			</div>
		</div>
	)
}

export default Levels
