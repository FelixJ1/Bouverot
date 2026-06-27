import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Deals from './pages/Deals'
import About from './pages/About'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
  },
])

export default router