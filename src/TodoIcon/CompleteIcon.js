import React from "react";
import { TodoIcon } from './index.js';

function CompleteIcon({ completed, onComplete }) {
    return (
        <TodoIcon 
        type="check"
        color={completed ? '#00897b' : 'rgba(165, 165, 165, 0.5)' }
        onClick={onComplete}
    /> 
    );
}

export { CompleteIcon };