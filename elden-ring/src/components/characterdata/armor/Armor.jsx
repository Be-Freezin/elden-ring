import React from 'react'
import Select from '../select/Select'
import HeadArmor from '../headarmor/HeadArmor'
import ChestArmor from '../chestarmor/ChestArmor'
import LegArmor from '../legarmor/LegArmor'
import HandArmor from '../handarmor/HandArmor'

const Armor = ({ helmList, chestList, legList, handList, id }) => {
	return (
		<>
			<div className="md:flex-row md:justify-evenly  mobile-container mt-6">
				<Select
					id="helmList"
					name="helmList"
					children={helmList}
					label="Head Armor"
				/>
				<Select
					id="chestList"
					name="chestList"
					children={chestList}
					label="Chest Armor"
				/>
			</div>
			<div className="md:flex-row md:justify-evenly  mobile-container mt-6">
				<Select
					id="legList"
					name="legList"
					children={legList}
					label="Leg Armor"
				/>
				<Select
					id="handList"
					name="handList"
					children={handList}
					label="Hand Armor"
				/>
			</div>
		</>
	)
}

export default Armor
