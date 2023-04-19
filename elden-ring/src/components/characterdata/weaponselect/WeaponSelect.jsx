import React from 'react'
import Ashes from '../ashes/Ashes'

const WeaponSelect = ({
	weaponsList,
	handleSelectChange,
	selectedWeapon,
	name,
	hover,
	setHover,
	stats,
}) => {
	return (
		<>
			<div className="flex flex-col my-6 ">
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
						<div>
							{stats.strength.value <
								selectedWeapon.requiredAttributes[0].amount ||
							stats.dexterity.value <
								selectedWeapon.requiredAttributes[1].amount ? (
								<span className="small-txt text-red">
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
							) : (
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
					)}

					{hover && selectedWeapon && (
						<div className="w-44 h-fit bg-red absolute top-8 p-2 rounded-md z-50 ">
							<span className="font-bold small-txt text-black ">
								Weapon Requirements
							</span>
							<div>
								<ul className="text-black font-bold ">
									<li>
										{selectedWeapon.requiredAttributes[0]
											? selectedWeapon.requiredAttributes[0].name + ': '
											: ''}

										{selectedWeapon.requiredAttributes[0]
											? selectedWeapon.requiredAttributes[0].amount
											: 0}
									</li>

									<li>
										{selectedWeapon.requiredAttributes[1]
											? selectedWeapon.requiredAttributes[1].name + ': '
											: ''}

										{selectedWeapon.requiredAttributes[1]
											? selectedWeapon.requiredAttributes[1].amount
											: ''}
									</li>
									<li>
										{selectedWeapon.requiredAttributes[2]
											? selectedWeapon.requiredAttributes[2].name + ': '
											: ''}

										{selectedWeapon.requiredAttributes[2]
											? selectedWeapon.requiredAttributes[2].amount
											: ''}
									</li>
									<li>
										{selectedWeapon.requiredAttributes[3]
											? selectedWeapon.requiredAttributes[3].name + ': '
											: ''}

										{selectedWeapon.requiredAttributes[3]
											? selectedWeapon.requiredAttributes[3].amount
											: ''}
									</li>
									<li>
										{selectedWeapon.requiredAttributes[4]
											? selectedWeapon.requiredAttributes[4].name + ': '
											: ''}

										{selectedWeapon.requiredAttributes[4]
											? selectedWeapon.requiredAttributes[4].amount
											: ''}
									</li>
								</ul>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default WeaponSelect
