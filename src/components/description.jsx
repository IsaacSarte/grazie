import React from 'react'

const DescriptionWithButton = ({ withButton = false, description, buttonLabel, }) => {
  return (
    <React.Fragment>
      <div className="flex justify-between">
        <span>
            {description}
        </span>
        {withButton ? (
           <button>
            {buttonLabel}
           </button>
        ) : null}
      </div>
    </React.Fragment>
  )
}

export default DescriptionWithButton;