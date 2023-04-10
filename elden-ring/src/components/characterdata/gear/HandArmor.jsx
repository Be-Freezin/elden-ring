import React from 'react'

const HandArmor = ({handList}) => {
  return (
			<div>
				<div className="flex flex-col">
					<span className="small-txt">Leg Armor</span>
					<select
						className="dropdown-select"
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