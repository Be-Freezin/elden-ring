import React from 'react'
import Select from '../select/Select'

const Talismans = ({ talismansData }) => {
	const talismansList = talismansData.map((item, id) => {
		return (
			<option className="text-white" key={id} value={item.name}>
				{item.name}
			</option>
		)
	})

	return (
		<div className="w-full ">
			<div className=" md:flex-row md:justify-evenly  mobile-container mt-6">
				<div className="flex flex-col ">
					<Select
						className="daisy-select"
						name="talismansList"
						id="talismansList"
						children={talismansList}
						label="Talisman 1"
					/>
				</div>
				<div className="flex flex-col">
					<Select
						className="daisy-select"
						name="talismansList"
						id="talismansList"
						children={talismansList}
						label="Talisman 2"
					/>
				</div>
			</div>
			<div className=" md:flex-row md:justify-evenly  mobile-container mt-6">
				<div className="flex flex-col ">
					<Select
						className="daisy-select"
						name="talismansList"
						id="talismansList"
						children={talismansList}
						label="Talisman 3"
					/>
				</div>
				<div className="flex flex-col">
					
					<Select
						className="daisy-select"
						name="talismansList"
						id="talismansList"
						children={talismansList}
						label="Talisman 4"
					/>
				</div>
			</div>
		</div>
	)
}

export default Talismans
