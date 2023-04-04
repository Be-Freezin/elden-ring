import React from 'react'

const Levels = ({ className, setClassName, classData, name, stats, description, image, vigor }) => {
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
			<option className='text-black' key={id} value={element.name}>
				{element.name}
			</option>
		)
	})

	function handleChange(event) {
		setClassName(event.target.value)
	}
	

	return (
		<div className="h-96 w-56 ">
			<div>
				<select onChange={handleChange} name="classList" id="classList">
					{classList}
				</select>
				{/* <h3 className="font-bold text-white">{classData.name}</h3> */}
			</div>
			<div className="mt-6 text-white">
				<div><span>Vigor: {}</span></div>
			</div>
		</div>
	)
}

// We need to apply some logic for out text to render 
//We also need to get our styling dialed in. I think this is something we should work on the second we get teh apiu calls working.{classData[0].name}

export default Levels
