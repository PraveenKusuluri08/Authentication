
import "./App.css"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import signin from "./components/authentication/signin"

function App() {
  return(
    
    <BrowserRouter>
     <Switch>
       <Route path="/signin" component={signin}/>
     </Switch>
    </BrowserRouter>
  )
}

export default App
