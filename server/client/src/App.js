import './css/App.css';

import { appConf } from './conf/appConf';

import { KeyboardWrapper } from './comp/KeyboardWrapper';
import { UserInput } from './comp/UserInput';
import { Prompt } from './comp/Prompt';

function App() {
  return (
    <div className='App'>
      <header>
        <h1 className='App-h1'>{appConf.APP_NAME}</h1>
      </header>
      <main className='App-main'>
        <div className='App-componentContainer'>
          <Prompt/>
          <UserInput/>
          <KeyboardWrapper/>
        </div>
      </main>
    </div>
  );
}

export default App;
