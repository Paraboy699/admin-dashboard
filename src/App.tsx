import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Loader from './components/Loader.tsx'


const Dashboard = lazy(() => import('./pages/Dashboard.tsx'))
const Customers = lazy(() => import('./pages/Customers.tsx'))
const Products = lazy(() => import('./pages/Products.tsx'))
const Transaction = lazy(() => import('./pages/Transaction.tsx'))


const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/product" element={<Products />} />
          <Route path="/admin/customer" element={<Customers />} />
          <Route path="/admin/transaction" element={<Transaction />} />
        </Routes>
      </Suspense>

    </Router>
  )
}

export default App