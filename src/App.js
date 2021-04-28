import "./App.css"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import Signin from "./Services/Authentication/components/Signin"
import Signup from "./Services/Authentication/components/Signup"
import Dashboard from "./components/dashboard/Dashboard"
import { Provider } from "react-redux"
import store from "./store/store/store"
import Topnav from "./components/layout/Navbar/Topnav"
function App() {
  return (
 
    <Provider store={store}>
      <BrowserRouter>
     <Topnav/>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App
