import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate
} from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'

import store from './store/store'
import { DarkModeProvider } from './context/DarkModeContext'
import FullPageSpinner from './components/ui/FullPageSpinner'
import GlobalStyles from './styles/globalStyles'

const AppLayout = lazy(() => import('./components/layout/AppLayout'))
const HomePage = lazy(() => import('./pages/home/HomePage'))
const CartPage = lazy(() => import('./pages/cart/CartPage'))
const FavoritesPage = lazy(() => import('./pages/favorites/FavoritesPage'))
const ProductsPage = lazy(() => import('./pages/products/ProductsPage'))
const ProductPage = lazy(() => import('./pages/product/ProductPage'))
const NotFound = lazy(() => import('./pages/NotFound'))
const ComingSoon = lazy(() => import('./pages/ComingSoon'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/*'
      element={
        <Suspense fallback={<FullPageSpinner />}>
          <AppLayout />
        </Suspense>
      }>
      <Route index element={<Navigate replace to='home' />} />
      <Route path='home' element={<HomePage />} />
      <Route path='*' element={<NotFound />} />
      <Route path='soon' element={<ComingSoon />} />
      <Route path='cart' element={<CartPage />} />
      <Route path='favorites' element={<FavoritesPage />} />
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
        <Toaster />
        <GlobalStyles />
        <RouterProvider router={router} />
      </DarkModeProvider>
    </Provider>
  )
}

export default App
