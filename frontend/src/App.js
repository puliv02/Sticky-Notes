import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './screens/Home'
import NoteScreen from './screens/NoteScreen'
import ReadNoteScreen from './screens/readNoteScreen';

function App() {
  return (
    <Router>
  

    <main>
        <Switch>
        <Route exact path="/" component={Home}/>
        
        <Route exact path="/:url" component={NoteScreen}/>

        <Route exact path="/readNotes/:url" component={ReadNoteScreen}/>

        </Switch>
        </main>
    



    
   

    </Router>
   
  );
}

export default App;
