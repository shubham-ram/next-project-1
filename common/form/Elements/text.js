import React from 'react'

function Text(props) {
	const {control, ...rest} = props

	return (
		<input style={{display:'block'}} {...rest} {...control}/>
	)
}

export default Text