import React from 'react'
import {forwardRef} from 'react'

function Password(props,ref) {
  const {control, ...rest} = props
  
	return (
		<input style={{display:'block'}} {...props} ref={ref}  type='text'/>
	)
}

export default forwardRef(Password)