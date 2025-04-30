import './App.css'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <>
      <Header />

      <div className='container'>
        <Navigation />
        <AppRoutes />
      </div>
    </>
  )
}

export default App
