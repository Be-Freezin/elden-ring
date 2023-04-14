import React, { useState } from 'react'

const Weapons = ({ weapons }) => {
	const [selectedWeapon, setSelectedWeapon] = useState(null)

	//! WORK ON THE WEAPON STATE
	const handleSelectChange = (event) => {
		const selectedIndex = event.target.selectedIndex
		setSelectedWeapon(weapons[selectedIndex])
	}

	const weaponsList = weapons.map((item, id) => {
		return (
			<option className="text-white" key={id} value={item.id}>
				{item.name}
			</option>
		)
	})

	console.log(selectedWeapon)
	return (
		<div>
			<div className=" md:flex-row md:justify-evenly  mobile-container mt-6">
				<div className="flex flex-col ">
					<span className="small-txt">Left Hand 1</span>
					<select
						className="dropdown-select"
						name="weaponsList"
						id="weaponsList"
						onChange={handleSelectChange}
						value={selectedWeapon ? selectedWeapon.id : ''}
					>
						{/* <option value=""></option> */}
						{weaponsList}
					</select>
					{selectedWeapon && (
						<span className="small-txt">
							Req:{' '}
							{selectedWeapon.requiredAttributes[0]
								? selectedWeapon.requiredAttributes[0].amount
								: 0}
							/
							{selectedWeapon.requiredAttributes[1]
								? selectedWeapon.requiredAttributes[1].amount
								: 0}
							/
							{selectedWeapon.requiredAttributes[2]
								? selectedWeapon.requiredAttributes[2].amount
								: 0}
							/
							{selectedWeapon.requiredAttributes[3]
								? selectedWeapon.requiredAttributes[3].amount
								: 0}
							/
							{selectedWeapon.requiredAttributes[4]
								? selectedWeapon.requiredAttributes[4].amount
								: 0}{' '}
						</span>
					)}
				</div>
				<div className="flex flex-col">
					<span className="small-txt">Right Hand 1</span>
					<select className="dropdown-select" name="weaponsList" id="weaponsList">
						{weaponsList}
					</select>
				</div>
			</div>
		</div>
	)
}

export default Weapons
