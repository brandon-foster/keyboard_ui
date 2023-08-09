import '../css/KeyboardRow.css';

import { keyboardRows } from '../data/keyboardRows';

import { KeyboardRowKey } from './KeyboardRowKey';

export const KeyboardRow = ({ rowId, activeKey }) => {
    return (
        <div className='KeyboardRow'>
            {keyboardRows[rowId].map((letter, i) => {
                return (
                    <KeyboardRowKey key={`keyboard-row-key-${i}`} letter={letter} isActiveKey={letter === activeKey}/>
                );
            })}
        </div>
    );
};