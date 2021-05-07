import { BrowserRouter, Switch, Route } from "react-router-dom"
import Signin from "./Services/Authentication/components/Signin"
import Signup from "./Services/Authentication/components/Signup"
import Dashboard from "./Services/Dashboard/Dashboard"
import Topnav from "./Services/Layout/components/Navbars/Topnav"
import Createproject from "./Services/Projects/Components/Createproject"
import { Provider } from "react-redux"
import ProjectDetails from "./Services/Projects/Components/ProjectDetails"
import store from "./Store/store"
function App() {
  return (
    <Provider store={store}>

    <BrowserRouter>
      <Topnav/>
      <Switch>
      <Route exact path="/" component={Dashboard} />
        <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/create" component={Createproject} />
        <Route path="/project/:id" component={ProjectDetails} />
      </Switch>
    </BrowserRouter>
       </Provider>
  )
}

export default App
