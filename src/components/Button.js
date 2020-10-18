import React from 'react';
import './Button.css';

const STYLE = [

'btn--primary',
'btn--outline'
]

const SIZES = [

'btn--medium',
'btn--large'

]

export const Button =({

children,
type,
onClick,
buttonStyle,
ButtonSize
}) => {

	const CheckButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle:STYLES[0]
    const CheckButtonSize =  SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    
    return(
    	<button className={btn ${CheckButtonStyle} ${CheckButtonSize}}>
    	{children}
    	</button>
    	)


}