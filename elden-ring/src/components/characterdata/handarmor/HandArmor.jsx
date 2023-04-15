import React from 'react'

const HandArmor = ({handList}) => {
  return (
			<div>
				<div className="flex flex-col">
					<span className="small-txt-label">Hand Armor</span>
					<select
						className="daisy-select"
						name="armorList"
						id="armorList"
						placeholder="Head Armor"
					>
						{handList}
					</select>
				</div>
			</div>
		)
}

export default HandArmor