import React from 'react'

const HeadArmor = ({ helmList }) => {
	return (
		<div>
			<div className="flex flex-col">
				<span className="small-txt-label">Head Armor</span>
				<select
					className="daisy-select "
					name="armorList"
					id="armorList"
					placeholder="Head Armor"
				>
					{helmList}
				</select>
			</div>
		</div>
	)
}

export default HeadArmor
