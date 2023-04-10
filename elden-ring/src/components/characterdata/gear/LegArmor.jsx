import React from 'react'

const LegArmor = ({legList}) => {
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
						{legList}
					</select>
				</div>
			</div>
		)
}

export default LegArmor