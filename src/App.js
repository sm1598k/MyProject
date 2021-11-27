import Navbar from './component/Navbar';
import Form from './component/Form';

function App() {
  return (
    <>
    <h1>Welcome to my project</h1>
    <Navbar title="MyProject" />

    <div className="container">
      <Form/>
    </div>
    
    </>
  );
}

export default App;
