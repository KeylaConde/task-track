import React from "react";
import { TodoIcon } from './index.js';

function DeleteIcon({ onDelete }) {
    return (
    <TodoIcon 
    type="delete"
    color="rgba(165, 165, 165, 0.5)"
    onClick={onDelete}
    />
    );
}

export { DeleteIcon };