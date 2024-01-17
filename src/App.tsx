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
const HomePage = lazy(() => import('./pages/HomePage'))
const CartPage = lazy(() => import('./pages/CartPage'))
const ProductsPage = lazy(() => import('./pages/ProductsPage'))
const ProductPage = lazy(() => import('./pages/ProductPage'))

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

      <Route path='home' element={<HomePage />} />
      <Route path='cart' element={<CartPage />} />
      <Route path='products' element={<ProductsPage />} />
      <Route path='products/:id' element={<ProductPage />} />
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
