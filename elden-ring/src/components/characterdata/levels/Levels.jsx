import React from 'react'

const Levels = ({ className, setClassName, classData }) => {
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
	console.log(classData)

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
		<div className="h-96 w-56">
			<div>
				<select onChange={handleChange} name="classList" id="classList">
					{classList}
				</select>
			</div>
			<div className="mt-6">
				<p className="font-bold">{className}</p>
				<ul>
					<li>
						
					</li>
				</ul>
			</div>
		</div>
	)
}

// We need to apply some logic for out text to render 
//We also need to get our styling dialed in. I think this is something we should work on the second we get teh apiu calls working.{classData[0].name}

export default Levels
