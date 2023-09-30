import React from 'react'

const Button = ({ label }) => {
  return (
    <React.Fragment>
      <button className="w-32 py-4 bg-yellow-800 text-white font-semibold text-lg">
        {label}
      </button>
    </React.Fragment>
  )
}

export default Button;