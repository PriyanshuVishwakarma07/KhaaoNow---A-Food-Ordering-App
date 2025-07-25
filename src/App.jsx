import Header from './components/Header'
import Body from "./components/Body"
import './App.css';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurentMenu from './components/RestaurentMenu';

const App = () => {
  return (
    <div>
      <Header/>
      <Outlet />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/" ,
    element: <App />,
    errorElement: <Error />,
    children: [
  {path: "/", element: <Body />},
  {path: "/about", element: <About />},
  {path: "/contact", element: <Contact />},
  {path: "/error", element: <Error />},
  {path:"/restaurants/:resId", element: <RestaurentMenu />}
  ]
},
])


export default appRouter;











