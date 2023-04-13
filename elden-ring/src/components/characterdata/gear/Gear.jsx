import React from 'react'
import Weapons from './Weapons'
import Talismans from './Talismans'
import Armor from './Armor'

const Gear = ({ armor, talismansData, weapons }) => {
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
		<div className="mobile-container md:data-container  border-2 border-accent-primary bg-black  p-2 ">
			<Armor
				helmList={helmList}
				chestList={chestList}
				legList={legList}
				handList={handList}
			/>

			{/* TALISMANS */}
			<br />
			<div className="md:flex-row md:justify-evenly  mobile-container">
				<Talismans talismansData={talismansData} />
			</div>
			<br />
			<Weapons weapons={weapons} />
		</div>
	)
}

export default Gear
