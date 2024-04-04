
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom"

import Products from './Components/Products';
import Dashboard from './Components/Dashboard';
import Cards from './Components/Card';
import Layout from './Components/Layout';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path = '/' element = {<Layout />}>
        <Route index  element = {<Dashboard/>}></Route>
        <Route path = '/card'  element = {<Cards/>}></Route>
    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider  router = {router}/>
    </div>
  );
}

export default App;
