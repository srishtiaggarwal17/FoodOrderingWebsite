import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import {Outlet} from 'react-router-dom';
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      {/* The <Provider> makes the Redux store (AppStore) available to every component in your app. */}
      <Provider store={AppStore}> 
        <div className="top">
          <Header />
          <Outlet />
          <Footer/>
          <ToastContainer/>
        </div>
      </Provider>
    </>
  )
}

export default App;
