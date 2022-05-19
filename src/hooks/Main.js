import React from 'react'
import GlobalContextProvider from './GlobalContext'
import MyComponent from './MyComponent'
import UseContext from './UseContext'

const Main = () => {
  return (
    <>
        <MyComponent image={'https://english.onlinekhabar.com/wp-content/uploads/2020/09/Daraz.jpg'} title={'title'} description={'this is the description section'}/>
    
        <GlobalContextProvider>
          <UseContext/>
        </GlobalContextProvider>
    
    </>
  )
}

export default Main