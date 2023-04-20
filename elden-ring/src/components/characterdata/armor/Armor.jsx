import React from 'react'
import Select from '../select/Select'
import HeadArmor from '../headarmor/HeadArmor'
import ChestArmor from '../chestarmor/ChestArmor'
import LegArmor from '../legarmor/LegArmor'
import HandArmor from '../handarmor/HandArmor'

const Armor = ({ helmList, chestList, legList, handList, id }) => {
	return (
		<div className="">
			<div className="md:flex-row md:justify-evenly  mobile-container mt-6">
				<Select id={id} children={helmList} label='Head Armor' />
				<HeadArmor helmList={helmList} />
				<ChestArmor chestList={chestList} />
			</div>
			<div className="md:flex-row md:justify-evenly  mobile-container mt-6">
				<LegArmor legList={legList} />
				<HandArmor handList={handList} />
			</div>
		</div>
	)
}

export default Armor
