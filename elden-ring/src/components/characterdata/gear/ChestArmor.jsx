import React from 'react'

const ChestArmor = ({ chestList, handleScroll }) => {
	return (
		<div>
			<div className="flex flex-col">
				<span className="small-txt">Chest Armor</span>
				<select
					className="dropdown-select"
					name="armorList"
					id="armorList"
					placeholder="Chest Armor"
					onScroll={handleScroll}
				>
					{chestList}
				</select>
			</div>
		</div>
	)
}

export default ChestArmor