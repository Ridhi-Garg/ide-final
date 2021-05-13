 //import Header from './components/Header'
import Sidebar from './components/Sidebar'
 //import Editor from './components/Editor'
 import Form from './components/Form'
 //import Form from './components/Form'

 //import Ipop from './components/Ipop'

function App() {
   return (
    <div className="container ">
      <div className="row my-row">
        <div className="col-2 my-col ">
              <img className="class-rounded" id="user-img " src="./code_logo.png" alt="" height='95px' width= '95px'/>
              <Sidebar/>
        </div>

        <div className="col my-col ">
             <Form/>
        </div>

      </div>
    </div>
    
  );
}
export default App;
