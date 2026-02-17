
import './App.css'
import EmployeeComponent from './Component/EmployeeComponent'
import FooterComponent from './Component/FooterComponent'
import HeaderComponents from './Component/HeaderComponents'
import ListEmployeeComponent from './Component/ListEmployeeComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
      <BrowserRouter>
        <HeaderComponents />
        <Routes>
          {/* // http://localhost:4029 */}
          <Route path='/' element={<ListEmployeeComponent />}></Route>

          {/* //http://locahhost:4029/employees */}
          <Route path='/employees' element={<ListEmployeeComponent />}></Route>

          {/* //http:localhist:4029/add-employee */}
          <Route path='/add-employee' element={<EmployeeComponent/>}></Route>

          {/* //http:localhist:4029/update-employee/1 */}
          <Route path='/update-employee/:id' element={<EmployeeComponent/>}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
