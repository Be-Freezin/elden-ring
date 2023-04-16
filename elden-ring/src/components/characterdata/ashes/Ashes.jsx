import React from 'react'

const Ashes = ({ ashesList }) => {

   

  return (
			<div className="my-3 ">
				<select
					name="ashesList"
					id="ashesList"
					className="daisy-select-ashes "
				>
					{ashesList}
				</select>
			</div>
		)
}

export default Ashes