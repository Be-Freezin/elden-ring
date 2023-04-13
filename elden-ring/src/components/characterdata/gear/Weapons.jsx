import React, { useState } from 'react'

const Weapons = ({ weapons }) => {

    const [selectedWeapon, setSelectedWeapon] = useState('')

    const handleSelectChange = (event) =>{
        const selectedIndex = event.target.selectedIndex
        setSelectedWeapon(weapons[ selectedIndex ] )
    }

	const weaponsList = weapons.map((item, id) => {
		return <option className="text-white" key={id} value={item.name}>
            {item.name}
        </option>
	})
console.log( selectedWeapon.requiredAttributes)
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
					>
                        <option value=""></option>
						{weaponsList}
					</select>
					<span className="small-txt">
						Req: {}/D/I/F/A{' '}
					</span>
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
