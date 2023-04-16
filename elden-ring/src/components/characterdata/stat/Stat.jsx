import React from 'react'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'

const Stat = ({ value, initValue, add, subtract, name }) => {
	return (
		<div className="w-full flex justify-between">
			<span className="w-20">{name}</span>
			<span>{initValue}</span>
			<input className="number-input" type="text" value={value} />
			<span>{value}</span>
			<div className="flex">
				<TiArrowSortedUp
					onClick={add}
					size={25}
					className="cursor-pointer mr-2"
				/>
				<TiArrowSortedDown
					onClick={subtract}
					size={25}
					className="cursor-pointer"
				/>
			</div>
		</div>
	)
}

export default Stat
