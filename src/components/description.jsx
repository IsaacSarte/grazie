import React from 'react'
import cn from 'classnames'

const DescriptionWithButton = ({ withButton = false, description, buttonLabel, bgColor, txtColor }) => {
  return (
    <React.Fragment>
      <div className="flex justify-between">
        <span className="mt-4 text-2xl font-semibold">
            {description}
        </span>
        {withButton ? (
           <button className={cn("mt-4 w-32 py-4 font-semibold text-lg", bgColor, txtColor)}>
            {buttonLabel}
           </button>
        ) : null}
      </div>
    </React.Fragment>
  )
}

export default DescriptionWithButton;