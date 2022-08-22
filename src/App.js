import React from 'react'
import  ReactDOM  from 'react-dom'
import Name from './Component/Profile/FullName'
import Address from './Component/Profile/Address'
import ProfilePhoto from './Component/Profile/ProfilePhoto'


const App=()=>{
  return(
    <div>
      
      <Name/>
      <Address/>
      <ProfilePhoto/>
    </div>
  )
}
export default App

ReactDOM.render(<App/>,document.getElementById("root"))