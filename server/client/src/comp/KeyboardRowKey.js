import '../css/KeyboardRowKey.css';

export const KeyboardRowKey = ({ letter }) => {
    return (
        <div className='KeyboardRowKey'>
            { letter }
        </div>
    );
};