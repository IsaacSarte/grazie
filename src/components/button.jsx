import React from 'react'
import cn from 'classnames'

const Button = ({ label, bgColor, txtColor }) => {
  return (
    <React.Fragment>
      <button className={cn("w-32 py-4 font-semibold text-lg", bgColor, txtColor)}>
        {label}
      </button>
    </React.Fragment>
  )
}

export default Button;