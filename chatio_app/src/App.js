import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.page';
import IntroPage from './pages/intropage/intropage.page'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ChatPage from './pages/chatpage/chatpage.page';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={IntroPage} />
      <Route exact path="/chat" component={ChatPage} />
    </Switch>
  );
}

export default App;
