import './CreateTodoButton.css';

function CreateTodoButton({ setOpenModal }) {
    return (
        <button type="button" className="CreateTodoButton"
        onClick={
                () => {
                    setOpenModal(state => !state);
                }
            }>
            +
        </button>
    );
  };

  export { CreateTodoButton };