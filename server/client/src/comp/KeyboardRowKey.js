import '../css/KeyboardRowKey.css';

export const KeyboardRowKey = ({ letter, isActiveKey }) => {
    return (
        <div className={`KeyboardRowKey ${isActiveKey && 'KeyboardRowKey-activeKey'}`}>
            { letter }
        </div>
    );
};