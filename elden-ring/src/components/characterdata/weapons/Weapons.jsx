import React, { useState, useRef } from 'react'
import WeaponSelect from '../weaponselect/WeaponSelect'

const Weapons = ({ weapons, stats }) => {
	const [selectedWeapon, setSelectedWeapon] = useState(null)
	const [selectedWeaponLeft1, setSelectedWeaponLeft1] = useState(null)
	const [selectedWeaponLeft2, setSelectedWeaponLeft2] = useState(null)
	const [selectedWeaponLeft3, setSelectedWeaponLeft3] = useState(null)
	const [selectedWeaponRight1, setSelectedWeaponRight1] = useState(null)
	const [selectedWeaponRight2, setSelectedWeaponRight2] = useState(null)
	const [selectedWeaponRight3, setSelectedWeaponRight3] = useState(null)
	const [hover, setHover] = useState(false)
	const [hoverLeft1, setHoverLeft1] = useState(false)
	const [hoverLeft2, setHoverLeft2] = useState(false)
	const [hoverLeft3, setHoverLeft3] = useState(false)
	const [hoverRight1, setHoverRight1] = useState(false)
	const [hoverRight2, setHoverRight2] = useState(false)
	const [hoverRight3, setHoverRight3] = useState(false)



	//! WORK ON THE WEAPON STATE
	const handleSelectChange = (event, setSelectedWeapon) => {
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

	// console.log(selectedWeapon)
	return (
		<div>
			<div className=" md:flex-row md:justify-evenly  mobile-container mt-6">
				<WeaponSelect
					weaponsList={weaponsList}
					handleSelectChange={(e) => handleSelectChange(e, setSelectedWeaponLeft1)}
					selectedWeapon={selectedWeaponLeft1}
					hover={hoverLeft1}
					setHover={setHoverLeft1}
					name={'Left Hand 1'}
					
				/>

				<WeaponSelect
					weaponsList={weaponsList}
					handleSelectChange={(e) => handleSelectChange(e, setSelectedWeaponRight1)}
					selectedWeapon={selectedWeaponRight1}
					hover={hoverRight1}
					setHover={setHoverRight1}
					name={'Right Hand 1'}
					
				/>
			</div>
			<div className=" md:flex-row md:justify-evenly  mobile-container mt-6">
				<WeaponSelect
					weaponsList={weaponsList}
					handleSelectChange={(e) => handleSelectChange(e, setSelectedWeaponLeft2)}
					selectedWeapon={selectedWeaponLeft2}
					hover={hoverLeft2}
					setHover={setHoverLeft2}
					name={'Left Hand 2'}
					
				/>

				<WeaponSelect
					weaponsList={weaponsList}
					handleSelectChange={(e) => handleSelectChange(e, setSelectedWeaponRight2)}
					selectedWeapon={selectedWeaponRight2}
					hover={hoverRight2}
					setHover={setHoverRight2}
					name={'Right Hand 2'}
					
				/>
			</div>
			<div className=" md:flex-row md:justify-evenly  mobile-container mt-6">
				<WeaponSelect
					weaponsList={weaponsList}
					handleSelectChange={(e) => handleSelectChange(e, setSelectedWeaponLeft3)}
					selectedWeapon={selectedWeaponLeft3}
					hover={hoverLeft3}
					setHover={setHoverLeft3}
					name={'Left Hand 3'}
					
				/>

				<WeaponSelect
					weaponsList={weaponsList}
					handleSelectChange={(e) => handleSelectChange(e, setSelectedWeaponRight3)}
					selectedWeapon={selectedWeaponRight3}
					hover={hoverRight3}
					setHover={setHoverRight3}
					name={'Right Hand 3'}
					
				/>
			</div>
		</div>
	)
}

export default Weapons
