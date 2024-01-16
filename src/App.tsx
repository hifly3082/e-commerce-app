import { Provider } from 'react-redux'
import { Suspense, lazy } from 'react'
import {
  Route,
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate
} from 'react-router-dom'
import './App.css'

import FullPageSpinner from './components/FullPageSpinner'
import store from './store/store'

const Layout = lazy(() => import('./components/Layout'))
const Home = lazy(() => import('./pages/Home'))
const Cart = lazy(() => import('./pages/Cart'))
const Product = lazy(() => import('./pages/Product'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/*'
      element={
        <Suspense fallback={<FullPageSpinner />}>
          <Layout>
            <Outlet />
          </Layout>
        </Suspense>
      }>
      <Route index element={<Navigate replace to='home' />} />

      <Route path='home' element={<Home />} />
      <Route path='cart' element={<Cart />} />
      <Route path='product/:id' element={<Product />} />
    </Route>
  )
)

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
