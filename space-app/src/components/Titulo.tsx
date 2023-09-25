import React from 'react'

function Titulo({children}: React.PropsWithChildren) {
  return (
    <h1>{children}</h1>
  )
}

export default Titulo
