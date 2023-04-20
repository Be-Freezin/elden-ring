import React from 'react'
import Weapons from '../weapons/Weapons'
import Talismans from '../talismans/Talismans'
import Armor from '../armor/Armor'

const Gear = ({ armor, talismansData, weapons, stats, ashes }) => {
	const helmArmor = armor.filter((item) => item.category === 'Helm')
	const chestArmor = armor.filter((item) => item.category === 'Chest Armor')
	const legArmor = armor.filter((item) => item.category === 'Leg Armor')
	const handArmor = armor.filter((item) => item.category === 'Gauntlets')

	const helmList = helmArmor.map((item, id) => {
		return (
			<option className="text-white " key={id} value={item.name}>
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
		<div className="mobile-container md:data-container  border-2 border-theme-secondary bg-black flex items-center md:items-stretch  min-h-full p-2 ">
			<Armor
				helmList={helmList}
				
				id={helmList}
				chestList={chestList}
				legList={legList}
				handList={handList}
			/>

			<br />
			<hr className="w-1/2 mx-auto text-white_muted" />
			<div className="md:flex-row md:justify-evenly  mobile-container">
				<Talismans talismansData={talismansData} />
			</div>
			<br />
			<hr className="w-1/2 mx-auto text-white_muted" />
			<Weapons weapons={weapons} stats={stats} ashes={ashes} />
		</div>
	)
}

export default Gear
