//import { BrowserRouter, Route } from "react-router-dom";
// HashRouter를 사용하면 #표시가 브라우저 주소창에 남지만 git page에 업로드 설정하기 쉽다.
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation"
import Home from "./routes/Home"
import About from "./routes/About"

function App() {
  return <HashRouter>
    <Navigation/>
    <Route path="/" exact={true} component={Home}/>
    <Route path="/about" component={About}/>    
  </HashRouter>
}

export default App;