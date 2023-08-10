export const UserInput = ({ setScrollTop }) => {
    function onScroll(e) {
        setScrollTop(e.target.scrollTop);
    }
    return (
        <textarea id='UserInput' rows='4' autoFocus onScroll={onScroll}></textarea>
    );
};