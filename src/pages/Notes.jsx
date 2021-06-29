// import notes from "./../assets/data/notes.json";
import {  BrowserRouter as Router, useRouteMatch, Switch, Route } from "react-router-dom";
import useContextGetter from "../hooks/useContextGetter";
import { Link } from "react-router-dom";


import ViewNote from "../components/notes/viewNotes";
import Note from "../components/notes/note";


function Notes() {
  const {
    state: { userData, notes },
  } = useContextGetter();
  let match = useRouteMatch();

  return (
    <main className="mt-5">
      <Router>
        <div className='align'>
        <nav className="navigation navigation--inline">
          <ul>
            <li>
            <Link to="/">Add Note</Link>
            </li>
            <li>
              <Link to="/notes">View Notes</Link>
            </li>
            <li>
              <Link to="/notes">Login</Link>
            </li>
            <li>
              <Link to="/notes">Register</Link>
            </li>
          </ul>
        </nav>
        
      <Switch>
        <Route path={`${match.path}/:noteId`}>
          <Note />
        </Route>
        <Route path={match.path}>
          <div className="container m-5 py-2">
            <h2 className="font-weight-bold text-center">Welcome {userData.email}</h2>
          </div>
          {/* Placed navigation buttons after welcome text*/}
          <div>
            <Link className="btn btn-info btn-lg my-4 mx-2" to="/" role="button">
           Add Notes
          </Link>
          <Link className="btn btn-info btn-lg my-4 mx-2" to="/notes" role="button">
           View Notes
          </Link>
        </div>
          <div className="my-2">

          </div>
         <ViewNote notes={notes} url={match.url} />
        </Route>
      </Switch>
      </div>
      </Router>
    </main>
  );
}

export default Notes;
