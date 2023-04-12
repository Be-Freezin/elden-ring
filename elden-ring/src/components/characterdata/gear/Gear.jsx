import React from 'react'
import HeadArmor from './HeadArmor'
import ChestArmor from './ChestArmor'
import LegArmor from './LegArmor'
import HandArmor from './HandArmor'
import Talismans from './Talismans'

const Gear = ({ armor, talismansData }) => {
	const helmArmor = armor.filter((item) => item.category === 'Helm')
	const chestArmor = armor.filter((item) => item.category === 'Chest Armor')
	const legArmor = armor.filter((item) => item.category === 'Leg Armor')
	const handArmor = armor.filter((item) => item.category === 'Gauntlets')

	const helmList = helmArmor.map((item, id) => {
		return (
			<option className="text-white" key={id} value={item.name}>
				{item.name}
			</option>
		)
	})
	const chestList = chestArmor.map((item, id) => {
		return (
			<option className="text-white" key={id} value={item.name}>
				{item.name}
			</option>
		)
	})
	const legList = legArmor.map((item, id) => {
		return (
			<option className="text-white" key={id} value={item.name}>
				{item.name}
			</option>
		)
	})
	const handList = handArmor.map((item, id) => {
		return (
			<option className="text-white" key={id} value={item.name}>
				{item.name}
			</option>
		)
	})

	return (
		<div className="mobile-container md:data-container  border-2 border-accent-primary   p-2 ">
			<div className="md:flex-row md:justify-evenly  mobile-container">
				<HeadArmor helmList={helmList} />
				<ChestArmor chestList={chestList} />
			</div>
			<div className="md:flex-row md:justify-evenly  mobile-container">
				<LegArmor legList={legList} />
				<HandArmor handList={handList} />
			</div>
			{/* TALISMANS */}
			<div className="md:flex-row md:justify-evenly  mobile-container">
				<Talismans talismansData={talismansData} />
			</div>
			<div className="flex"></div>
		</div>
	)
}

export default Gear
