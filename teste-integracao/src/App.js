import logo from './logo.svg';
import './App.css';
import ListaCompras from './components/ListaCompras/ListaCompras';

function App() {
  return (
    <div className="App">
      <h1>
        bem vindo ao projeto exemplo da materia de integração e entrega continua!!!!
      </h1>
      <div>
        <h2>Olá pipelines!</h2>
        <ListaCompras></ListaCompras>
      </div>
    </div>
  );
}

export default App;
