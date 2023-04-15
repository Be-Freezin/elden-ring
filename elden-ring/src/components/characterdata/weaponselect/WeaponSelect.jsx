import React from 'react'

const WeaponSelect = ({ weaponsList, handleSelectChange, selectedWeapon, name}) => {
  return (
			<>
				<div className="flex flex-col ">
					<span className="small-txt-label">{name}</span>
					<select
						className="daisy-select"
						name="weaponsList"
						id="weaponsList"
						onChange={handleSelectChange}
						value={selectedWeapon ? selectedWeapon.id : ''}
					>
						{weaponsList}
					</select>
					<div
						className="w-32 h-6 relative"
						onMouseEnter={() => setHover(true)}
						onMouseLeave={() => setHover(false)}
					>
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
						{/* {hover && (
							<div className="w-44 h-fit bg-accent-primary absolute top-8 rounded-md">
								<span className="small-txt text-black">Weapon Requirements</span>
								<div>
									<ul>
										<li>
											{selectedWeapon.requiredAttributes[0].name}:{' '}
											{selectedWeapon.requiredAttributes[0]
												? selectedWeapon.requiredAttributes[0].amount
												: 0}{' '}
										</li>
										<li>
											{selectedWeapon.requiredAttributes[1].name}:{' '}
											{selectedWeapon.requiredAttributes[1]
												? selectedWeapon.requiredAttributes[1].amount
												: 0}{' '}
										</li>
										<li>
											{selectedWeapon.requiredAttributes[2].name}:{' '}
											{selectedWeapon.requiredAttributes[2]
												? selectedWeapon.requiredAttributes[2].amount
												: 0}{' '}
										</li>
										<li>
											{selectedWeapon.requiredAttributes[].name}:{' '}
											{selectedWeapon.requiredAttributes[3]
												? selectedWeapon.requiredAttributes[3].amount
												: 0}{' '}
										</li>
										<li>
											Strength:{' '}
											{selectedWeapon.requiredAttributes[4]
												? selectedWeapon.requiredAttributes[0].amount
												: 0}{' '}
										</li>
									</ul>
								</div>
							</div>
						)} */}
					</div>
				</div>
			</>
		)
}

export default WeaponSelect