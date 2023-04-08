import React from 'react'
import HeadArmor from './HeadArmor'
import ChestArmor from './ChestArmor'

const Gear = ({ armor }) => {
	const helmArmor = armor.filter((item) => item.category === 'Helm')
	const chestArmor = armor.filter((item) => item.category === 'Chest Armor')

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
	console.log(helmList, armor)
	return (
		<div className="data-container border-2 border-accent-primary h-fit w-fit ">
			<div className="flex">
        <HeadArmor helmList={helmList} />
        <ChestArmor chestList={chestList} />
				
				
			</div>
			<div className="flex">
				<div className="flex flex-col">
					<span className="small-txt">Leg Armor</span>
					<select
						className="dropdown-select"
						name="armorList"
						id="armorList"
						placeholder="Head Armor"
					>
						{helmList}
					</select>
				</div>
				<div className="flex flex-col">
					<span className="small-txt">Hand Armor</span>
					<select
						className="dropdown-select"
						name="armorList"
						id="armorList"
						placeholder="Chest Armor"
					>
						{helmList}
					</select>
				</div>
			</div>
		</div>
	)
}

export default Gear
