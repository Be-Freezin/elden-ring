import React from 'react'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'

const Stat = ({ vig, initVigor, add, subtract, name }) => {
	return (
		<div className="w-full flex justify-between">
			<span>{name}</span>
			<span>{initVigor}</span>
			<input
				className="w-10 text-center bg-black border-2 border-accent-primary rounded-md"
				type="text"
				value={vig}
			/>
			<span>{vig}</span>
			<div className="flex">
				<TiArrowSortedUp onClick={add} size={25} className="cursor-pointer mr-2" />
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