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
				<Select id={id} children={helmList} label="Head Armor" />
				<Select id={id} children={chestList} label="Chest Armor" />
			</div>
			<div className="md:flex-row md:justify-evenly  mobile-container mt-6">
				<Select id={id} children={legList} label="Leg Armor" />
				<Select id={id} children={handList} label="Hand Armor" />
				
			</div>
		</>
	)
}

export default Armor
