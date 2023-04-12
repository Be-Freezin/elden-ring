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
		<div>
			<div className=' flex'>
				<div className="flex flex-col">
					<span className="small-txt">Talisman 1</span>
					<select
						className="dropdown-select"
						name="armorList"
						id="armorList"
						placeholder="Chest Armor"
					>
						{talismansList}
					</select>
                </div>
                <div className="flex flex-col">
					<span className="small-txt">Talisman 2</span>
					<select
						className="dropdown-select"
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

export default Talismans
