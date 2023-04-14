import React from 'react'
import HeadArmor from './HeadArmor'
import ChestArmor from './ChestArmor'
import LegArmor from './LegArmor'
import HandArmor from './HandArmor'

const Armor = ({ helmList, chestList, legList, handList }) => {
	return (
		<div className="">
			<div className="md:flex-row md:justify-evenly  mobile-container mt-6">
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
