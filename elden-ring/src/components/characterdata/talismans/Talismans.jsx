import React from 'react'

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
					<span className="small-txt-label">Talisman 1</span>
					<select
						className="daisy-select"
						name="armorList"
						id="armorList"
						placeholder="Chest Armor"
					>
						{talismansList}
					</select>
				</div>
				<div className="flex flex-col">
					<span className="small-txt-label">Talisman 2</span>
					<select
						className="daisy-select"
						name="armorList"
						id="armorList"
						placeholder="Chest Armor"
					>
						{talismansList}
					</select>
				</div>
			</div>
			<div className=" md:flex-row md:justify-evenly  mobile-container mt-6">
				<div className="flex flex-col ">
					<span className="small-txt-label">Talisman 3</span>
					<select
						className="daisy-select"
						name="armorList"
						id="armorList"
						placeholder="Chest Armor"
					>
						{talismansList}
					</select>
				</div>
				<div className="flex flex-col">
					<span className="small-txt-label">Talisman 4</span>
					<select
						className="daisy-select"
						name="armorList"
						id="armorList"
						placeholder="Chest Armor"
					>
						{talismansList}
					</select>
				</div>
			</div>
		</div>
	)
}
//! WORK ON THE TALISMENS COMPONENTS
export default Talismans
