import React from 'react'

const Levels = ({ className, setClassName }) => {
	const classChoices = [
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
			<option key={id} value={element.name}>
				{element.name}
			</option>
		)
	})

	function handleChange(event) {
		setClassName(event.target.value)
	}

	return (
		<div>
			<select onChange={handleChange} name="classList" id="classList">
				{classList}
			</select>
      <div>
        <p>{className.description}</p>
      </div>
		</div>
	)
}

export default Levels
