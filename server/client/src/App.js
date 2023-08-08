import './css/App.css';
import { KeyboardWrapper } from './comp/KeyboardWrapper';
import { appConf } from './conf/appConf';

function App() {
  return (
    <div className='App'>
      <header>
        <h1>{appConf.APP_NAME}</h1>
      </header>
      <main className='App-main'>
        <KeyboardWrapper/>
      </main>
    </div>
  );
}

export default App;
