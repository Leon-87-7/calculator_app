import { Backspace } from 'phosphor-react';

function DeleteBtn({ onDeleteClick }) {
  return (
    <div
      className="delete-btn"
      onClick={onDeleteClick}
    >
      <Backspace
        size={28}
        weight="bold"
      />
    </div>
  );
}

export default DeleteBtn;
