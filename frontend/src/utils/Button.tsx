import React from 'react'
import '../style/utils/Button.scss'
type ButtonProps = {
    btnName: string,
    classValue?: string,
    w: string,
    h: string,
    onclick:()=>void
}
const Button: React.FC<ButtonProps> = ({ btnName, classValue, w, h,onclick }) => {

    return (
        <div id='global-btn' style={{ width: w, height: h }}>
            <button onClick={onclick} className={classValue ? classValue : ''}>{btnName}</button>
        </div>
    )
}

export default Button