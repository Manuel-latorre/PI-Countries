import './App.css'
import Home from './views/Home/Home';
import Landing from './views/Landing/Landing';
import Form from './views/Form/Form';
import Detail from './views/Detail/Detail';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Activities from './components/Activities/Activities'
import { Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div className="App">

        { location.pathname !== '/' && <NavBar />}
        
        <Route exact path="/" render={() => <Landing />} />

        <Route exact path="/home" render={() => <Home />} />

        <Route exact path="/activities" render={() => <Activities />} />

        <Route exact path="/create" render={() => <Form />} />

        <Route exact path="/countries/:id" render={() => <Detail />} />

        {location.pathname !== '/' && <Footer/>}
    </div>
  );
}

export default App;
