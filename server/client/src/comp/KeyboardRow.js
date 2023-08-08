import '../css/KeyboardRow.css';

import { KeyboardRowKey } from './KeyboardRowKey';

export const KeyboardRow = ({ rowId }) => {
    const rows = [
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],        
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'],        
        ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],        
    ];
    return (
        <div className='KeyboardRow'>
            {rows[rowId].map((letter, i) => {
                return (
                    <KeyboardRowKey key={`keyboard-row-key-${i}`} letter={letter}/>
                );
            })}
        </div>
    );
};