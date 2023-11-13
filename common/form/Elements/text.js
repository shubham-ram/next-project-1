import {forwardRef} from 'react'

function Text(props,ref) {
	// const {control, ...rest} = props

	return (
		<input style={{display:'block'}} {...props} ref={ref}/>
	)
}

export default forwardRef(Text)