import React from 'react'

const ChestArmor = ({ chestList }) => {
	return (
		<div>
			<div className="flex flex-col">
				<span className="small-txt-label">Chest Armor</span>
				<select
					className="daisy-select"
					name="armorList"
					id="armorList"
					placeholder="Chest Armor"
				>
					{chestList}
				</select>
			</div>
		</div>
	)
}

export default ChestArmor
