import {Routes, Route} from "react-router-dom"
import { Header, Footer } from '../components/layout'
import { Home } from '../pages/user'
export default function User() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}
export {User}