import './css/App.css';

import { appConf } from './conf/appConf';

import { KeyboardWrapper } from './comp/KeyboardWrapper';
import { UserInput } from './comp/UserInput';

function App() {
  return (
    <div className='App'>
      <header>
        <h1>{appConf.APP_NAME}</h1>
      </header>
      <main className='App-main'>
        <div className='App-componentContainer'>
          <UserInput/>
          <KeyboardWrapper/>
        </div>
      </main>
    </div>
  );
}

export default App;
