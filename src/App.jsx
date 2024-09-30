import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Loader from "./components/Loader"
import ErrorPage from "./components/ErrorPage"


// define all routes here
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  }
])
function App() {
  return (
    <>
      <RouterProvider router={router} fallbackElement={<Loader />} />
    </>
  )
}

export default App
