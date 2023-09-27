import React from 'react'

function Password(props) {
  const {control, ...rest} = props
  
	return (
		<input style={{display:'block'}} {...rest} {...control} type='text'/>
	)
}

export default Password