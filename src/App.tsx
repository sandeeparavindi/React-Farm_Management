import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RootLayoutComponent} from "./components/sidebar/RootLayoutComponent.tsx";
import {DashboardPage} from "./pages/DashboardPage.tsx";
import {FieldPage} from "./pages/FieldPage.tsx";
import {VehiclePage} from "./pages/VehiclePage.tsx";
import {NotFoundPage} from "./pages/NotFoundPage.tsx";
import {CropPage} from "./pages/CropPage.tsx";
import {StaffPage} from "./pages/StaffPage.tsx";
import {EquipmentPage} from "./pages/EquipmentPage.tsx";
function App() {

  const routes = createBrowserRouter([
    {
      path: '',
      element : <RootLayoutComponent/>,
      children : [
        { path : '', element : <DashboardPage/>},
        { path : '/fields', element : <FieldPage/>},
        { path : '/vehicles', element : <VehiclePage/>},
        { path : '/crops', element : <CropPage/>},
        { path : '/staffs', element : <StaffPage/>},
        { path : '/equipments', element : <EquipmentPage/>},
      ]
    },
    {
      path: "*",
      element: <NotFoundPage/>
    }
  ])
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
