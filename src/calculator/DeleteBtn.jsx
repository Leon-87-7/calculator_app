import { Backspace } from 'phosphor-react';

function DeleteBtn() {
  return (
    <div className="delete-btn">
      <Backspace
        size={28}
        weight="bold"
      />
    </div>
  );
}

export default DeleteBtn;
