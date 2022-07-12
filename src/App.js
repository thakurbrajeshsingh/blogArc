import { BrowserRouter, Routes, Route } from 'react-router-dom'




import { Login, Home } from './container'
import DataProvider from './context/DataProvider';




function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <div style={{ marginTop: 64 }}>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider >

  );
}

export default App;
