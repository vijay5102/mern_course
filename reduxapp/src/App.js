import logo from './logo.svg';
import './App.css';
import{createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import { myStore } from './redux/Config';
import{provider} from 'react-redux';
let routerPaths = createBrowserRouter([
  {"path":"/","element":<Home/>},
  {"path":"/home","element":<Home/>},
  {"path":"/about","element":<About/>},
  {"path":"/contact","element":<Contact/>},
])
function App() {
  return (
    <provider store={myStore}>
    <div className="App">
      < RouterProvider router={routerPaths} />
      <Header/>
    </div>
    </provider>
  );
}

export default App;
