
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Homepage from './Pages/Homepage'
import RegistrationFormPage from './Pages/RegistrationFormPage'

function App() {

  return (
    <>

      <BrowserRouter>

        <NavBar />

        <Routes>

          <Route path="/" element={<Homepage />} />
          <Route path="/registration" element={<RegistrationFormPage />} />

          {/* <Route path="/about" element={<AboutPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} /> */}

          {/* <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<ProfilePage />} />
          </Route> */}

        </Routes>

      </BrowserRouter>


    </>
  )
}

export default App
