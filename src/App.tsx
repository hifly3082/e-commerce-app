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
import { DarkModeProvider } from './context/DarkModeContext'

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
      {/* <Route path='products/*'>
        <Route path=':categoryId'>
          <Route index element={<ProductsPage />} />
          <Route path=':productId'>
            <Route index element={<ProductPage />} />
          </Route>
        </Route>
      </Route> */}
      <Route path='products/*'>
        <Route index element={<ProductsPage />} />
        <Route path=':productId'>
          <Route index element={<ProductPage />} />
        </Route>
      </Route>
    </Route>
  )
)

function App() {
  return (
    <Provider store={store}>
      <DarkModeProvider>
        <RouterProvider router={router} />
      </DarkModeProvider>
    </Provider>
  )
}

export default App
