import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Loader from "./components/Loader"
import ErrorPage from "./components/ErrorPage"
import About from "./pages/About"


// define all routes here
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/about",
    element: <About />
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
