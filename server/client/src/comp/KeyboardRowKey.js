import '../css/KeyboardRowKey.css';

export const KeyboardRowKey = ({ letter, isActiveKey }) => {
    const spaceBarClassValue = letter === ' ' ? 'KeyboardRowKey-spacebar' : '';
    const activeKeyClassValue = isActiveKey ? 'KeyboardRowKey-activeKey' : '';
    return (
        <div className={`KeyboardRowKey ${activeKeyClassValue} ${spaceBarClassValue}`}>
            { letter }
        </div>
    );
};