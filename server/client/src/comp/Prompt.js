import '../css/UserInput-and-Prompt.css';

import { useEffect, useRef } from 'react';

export const Prompt = ({ scrollTop }) => {
    const promptTextarea = useRef(null);
    useEffect(() => {
        console.info(`Prompt detected that scrollTop changed`);
        if (promptTextarea.current) {
            promptTextarea.current.scrollTop = scrollTop;
        }
    }, [scrollTop]);
    const currentPrompt = 'The quick brown fox jumps over the lazy dog.';
    return (
        <textarea ref={promptTextarea} id='Prompt' rows='4' defaultValue={currentPrompt}></textarea>
    );
};