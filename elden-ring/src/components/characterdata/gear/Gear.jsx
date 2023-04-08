import React from 'react'

const Gear = ({armor}) => {

  const helmArmor = armor.filter(armor => armor.category === "Helm")

const helmList = armor.map((item, id) => {
  return(
    <option className='text-white' key={id} value={item.name}>{item.name}</option>
  )
})
console.log(armor, helmArmor)
  return (
			<div className="data-container border-2 border-accent-primary h-fit ">
				Gear
				<select
					className="bg-black text-white border-white_muted border-b-2"
					name="armorList"
					id="armorList"
				>
					{helmList}
				</select>
			</div>
		)
}

export default Gear