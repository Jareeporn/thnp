import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Contact from './components/Contact';
function App() {
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "profile",
    element: <Profile/>
  },
  {
    path: "contact",
    element: <Contact/>
  }
])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}
export default App