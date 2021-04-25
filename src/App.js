
import "./App.css"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import Signin from "./components/authentication/Signin"
import Signup from "./components/authentication/Signup"
import Dashboard from "./components/dashboard/Dashboard"
function App() {
  return(
    
    <BrowserRouter>
     <Switch>
     <Route exact path="/" component={Dashboard} />
       <Route path="/signin" component={Signin}/>
       <Route path="/signup" component={Signup}/>
     </Switch>
    </BrowserRouter>
  )
}

export default App
