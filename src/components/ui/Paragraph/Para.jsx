import React from 'react'
import {useTypewriter , Cursor} from 'react-simple-typewriter'

const Para = ({names , text , className}) => {

  const [writer] = useTypewriter({
    words : names,
    loop : {},
    typeSpeed: 50,
    deleteSpeed: 50,
  })

  return (
    <h1 className={className}>
      {text} {' '}
      <span>
        {writer}
      </span>
      <span>
        <Cursor/>
      </span>
    </h1>
  )
}

export default Para