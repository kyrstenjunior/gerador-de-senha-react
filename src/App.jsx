import header from './assets/logo.png';
import Input from './components/Input';

function App() {

  return (
    <div className="App">
      <img src={header} style={{maxWidth: 600, marginBottom: 30}} />
      <Input />
    </div>
  )
}

export default App
