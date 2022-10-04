import Navbar from "./Navbar.jsx";
import Home from "./Home";
import { Switch, Route , Redirect} from 'react-router-dom';
import MainHome from './MainHome';
import SignUp from './SignUp';
import Footer from './Footer';
import Login from './Login';


const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/category' component={MainHome} />
        <Route exact path='/product/:id' component={Home} />
        <Route exact path='/signUp' component={SignUp} />
        <Route exact path='/login' component={Login} />
        <Redirect to='category' />
      </Switch>
      <Footer />
    </>
  )
}

export default App;
