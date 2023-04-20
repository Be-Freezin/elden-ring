import React from 'react'

const Select = ({label, id, placeholder, onChange, children, ...rest}) => {
  {label ? <span className="small-txt-label">{label}</span> : null}
  return (
    <select name={id} id={id} placeholder={placeholder} onChange={onChange} {...rest}>
{children}
    </select>
  )
}

export default Select