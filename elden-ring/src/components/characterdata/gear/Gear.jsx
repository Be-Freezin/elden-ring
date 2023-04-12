import React from 'react'
import HeadArmor from './HeadArmor'
import ChestArmor from './ChestArmor'
import LegArmor from './LegArmor'
import HandArmor from './HandArmor'

const Gear = ({ armor, handleScroll }) => {
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
		<div className="data-container border-2 border-accent-primary h-fit w-fit ">
			<div className="flex">
				<HeadArmor helmList={helmList} />
				<ChestArmor chestList={chestList} handleScroll={handleScroll}   />
			</div>
			<div className="flex">
				<LegArmor legList={legList} />
				<HandArmor handList={handList} />
			</div>
		</div>
	)
}

export default Gear
