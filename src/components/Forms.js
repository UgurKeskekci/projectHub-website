import React from 'react'

function Forms({children, onSubmit}) {
  return (
    <form onSubmit={onSubmit} className="mt-6">
        {children}
    </form>
  )
}

export default Forms