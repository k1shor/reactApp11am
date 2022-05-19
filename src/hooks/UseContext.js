import React, {useContext} from 'react'
import { GlobalContext } from './GlobalContext'

const UseContext = () => {
    const message = useContext(GlobalContext)

  return (
    <>
        {message}

    </>
  )
}

export default UseContext