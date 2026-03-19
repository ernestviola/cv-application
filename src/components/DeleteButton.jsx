import { DeleteOutline as Delete } from '@mui/icons-material';
export default function DeleteButton({ deleteHandler, index }) {
  return (
    <button
      onClick={(e) => deleteHandler(e, index)}
      aria-label='delete education'
      className='delete-button'
    >
      <Delete />
    </button>
  );
}
