import "./App.css"
import { BrowserRouter, Switch, Route} from "react-router-dom"
import Signin from "./Services/Authentication/components/Signin"
import Signup from "./Services/Authentication/components/Signup"
import Dashboard from "./Services/Dashboard/components/Dashboard"
import Topnav from "./Services/Layout/components/Navbars/Topnav"
function App() {
  return (
 
   
      <BrowserRouter>
     <Topnav/>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          
        </Switch>
      </BrowserRouter>
  
  )
}

export default App
