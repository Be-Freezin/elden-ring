import React from 'react'

const Gear = ({armor}) => {

const armorList = armor.map((element, id) => {
  return(
    <option className='text-white' key={id} value={element.name}>{element.name}</option>
  )
})

  return (
			<div className="data-container border-2 border-accent-primary h-fit ">
				Gear
				<select
					className="bg-black text-white border-white_muted border-b-2"
					name="armorList"
					id="armorList"
				>
					{armorList}
				</select>
			</div>
		)
}

export default Gear