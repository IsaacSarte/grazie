import React from 'react'
import cn from 'classnames'

const DescriptionWithButton = ({ withButton = false, description, buttonLabel, bgColor, txtColor, descColor}) => {
  return (
    <React.Fragment>
      <div className="flex flex-col md:flex-row justify-between">
        <span className={cn("mt-16 md:text-2xl font-semibold ", descColor)}>
            {description}
        </span>
        {withButton ? (
           <button className={cn("mt-4 md:mt-16 w-24 md:w-32 py-4 font-semibold md:text-lg", bgColor, txtColor)}>
            {buttonLabel}
           </button>
        ) : null}
      </div>
    </React.Fragment>
  )
}

export default DescriptionWithButton;