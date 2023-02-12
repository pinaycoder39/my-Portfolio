import './/App.css';
//provide link here
import { Link, Route, Routes } from 'react-router-dom';
import { Aboutme } from './pages/Aboutme'
import { Frontend } from './pages/Frontend'
import { Backend } from './pages/Backend'


function App() {
  return (
    <> 
   <div class="wrapper">
   <div class="options-container">
   <Link className="button" to = "/" >About Me</Link> 
   <Link className="button" to = "/frontend">Front End</Link> 
   <Link className="button" to = "/backend">Back End</Link>
   {/* <button> <a href="/aboutme">About Me</a></button>
    <button> <a href="/frontend">Front End</a></button> */}
    {/* <button> <a href="/backend" >Back End</a></button> */}
   </div>  

  <Routes>
    <Route path="/" element = {<Aboutme />}/>
    <Route path="/frontend" element = {<Frontend />}/>
    <Route path="/backend" element = {<Backend />}/>
  </Routes>
  </div>
  </>
  )
}

export default App;
