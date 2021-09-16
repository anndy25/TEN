import { Route, Switch } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home/Home.jsx'
import Hiring from './Pages/Hiring/Hiring.jsx'
import Courses from './Pages/Courses/Courses'
import Navbar from './Pages/ComComponents/Navbar'
import Footer from './Pages/ComComponents/Footer'
function App() {
  return (
    < >
      <Navbar />
      <div className='cont-main'>
        <div className="cont-sect">
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/hiring' component={Hiring}></Route>
            <Route path='/courses' component={Courses}></Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
