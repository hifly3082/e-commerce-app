import { lazy } from 'react'
import {
  Route,
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate
} from 'react-router-dom'
import './App.css'

const Layout = lazy(() => import('./components/Layout'))
const Home = lazy(() => import('./pages/Home'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/*'
      element={
        <Layout>
          <Outlet />
        </Layout>
      }>
      <Route index element={<Navigate replace to='home' />} />
      <Route path='home' element={<Home />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
