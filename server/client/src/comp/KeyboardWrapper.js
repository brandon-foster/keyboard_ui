import '../css/KeyboardWrapper.css';
import '../css/Keyboard.css';

import { KeyboardRow } from './KeyboardRow';

export const KeyboardWrapper = () => {
    return (
        <div className='KeyboardWrapper'>
            <div className='Keyboard'>
                <KeyboardRow rowId={0}/>
                <KeyboardRow rowId={1}/>
                <KeyboardRow rowId={2}/>
                <KeyboardRow rowId={3}/>
            </div>
        </div>
    );
};