import StateProvider from "./components/StateProvider";
import {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// Style import
import "./assets/css/App.css";


// Font awesome import
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";


// Pages
import Notes from "./pages/Notes";
import UserNote from "./pages/UserNote";
import Landing from './pages/Landing';

//Webfontloader
import WebFont from 'webfontloader';


library.add(fas);

function App() {
    useEffect(() => {
	WebFont.load({
	    google: {
		families: ['Playfair Display', 'Viaoda', 'Libre']
	    }
	});
    }, []);

    return (
    <StateProvider>
	<Router>
        <ScrollToTop />
          <Switch>
              <Route exact path="/">
                <Landing />  
              </Route> 
              <Route path="/mynotes">
                <UserNote />  
              </Route>
              <Route path='/notes'>
		  <Notes />
		</Route>
          </Switch>
      </Router>
    </StateProvider>
  );
}

export default App;
