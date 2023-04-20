import React from 'react'

const Select = ({ label, id, placeholder, onChange, children, ...rest }) => {

	return (
		<div className="flex flex-col">
			{label ? <span className="small-txt-label">{label}</span> : null}
			<select
				className="daisy-select"
				name={id}
				id={id}
				placeholder={placeholder}
				onChange={onChange}
				{...rest}
			>
				{children}
			</select>
		</div>
	)
}

export default Select
