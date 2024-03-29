import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'



import { Login, Home, CreatePost, DetailedPost, UpdatePost, About, Contact } from './container'
// components
import { Header } from './components'
import DataProvider from './context/DataProvider';


const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ?
    <>
      <Header />
      <Outlet />
    </>
    : <Navigate replace to='/login' />
}

function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);

  return (
    <DataProvider>
      <BrowserRouter>

        <div style={{ marginTop: 64 }}>
          <Routes>
            <Route path='/login' element={<Login isUserAuthenticated={isUserAuthenticated} />} />

            <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path='/' element={<Home />} />
            </Route>
            <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path='/create' element={<CreatePost />} />
            </Route>

            <Route path='/details/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path='/details/:id' element={<DetailedPost />} />
            </Route>

            <Route path='/update/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path='/update/:id' element={<UpdatePost />} />
            </Route>

            <Route path='/about' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path='/about' element={<About />} />
            </Route>

            <Route path='/contact' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path='/contact' element={<Contact />} />
            </Route>

          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider >

  );
}

export default App;
