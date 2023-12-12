import "./App.css";
import { Route } from "react-router-dom";
import Homeepage from "./pages/Homeepage";
import Chattpage from "./pages/Chattpages";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homeepage} exact/>
      <Route path="/chats" component={Chattpage} />
    </div>
  );
}

export default App;
