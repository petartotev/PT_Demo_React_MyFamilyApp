import './App.css';
import Parent from './components/Parent/Parent.js';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretUp, faCaretDown, faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faCaretUp, faCaretDown, faTrash);

function App() {


  return (
    <div className="App container align-items-center justify-content-center">
      <Parent />
      <ScrollToTop />
    </div>
  );
}

export default App;
