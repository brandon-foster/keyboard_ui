import { useState } from 'react';

import '../css/KeyboardWrapper.css';
import '../css/Keyboard.css';

import { listenerManager } from '../listenerManager';

import { KeyboardRow } from './KeyboardRow';

export const KeyboardWrapper = () => {
    const [activeKey, setActiveKey] = useState(null);
    listenerManager.setListener('keydown', function onKeyDown(e) {
        setActiveKey(() => e.key);
    });
    return (
        <div className='KeyboardWrapper'>
            <div className='Keyboard'>
                <KeyboardRow rowId={0} activeKey={activeKey}/>
                <KeyboardRow rowId={1} activeKey={activeKey}/>
                <KeyboardRow rowId={2} activeKey={activeKey}/>
                <KeyboardRow rowId={3} activeKey={activeKey}/>
                <KeyboardRow rowId={4} activeKey={activeKey}/>
            </div>
        </div>
    );
};