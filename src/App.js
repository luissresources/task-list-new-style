import './App.css';
import TaskList from './componentes/TaskList';
import logo from './imagenes/logo-2.png';

function App() {
  return (
    <div className="App container">
      <div className='container-logo'>
        <img className='logo' alt='logo'src={logo} />
      </div>
      <div className='container-tasklist'>
        <h1 className='title-app'>Task list</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
