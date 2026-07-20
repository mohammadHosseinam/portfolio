import './App.css'
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes/index.jsx';

function App() {
  return (
    <>
      <Routes>
        {Object.keys(routes).map((route) => {
          return (
            <Route
              element={routes[route].element}
              path={routes[route].path}
            />
          );
        })}
      </Routes>
    </>
  )
}

export default App
