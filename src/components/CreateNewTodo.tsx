import { Button, TextField } from '@mui/material'
import { ChangeEvent } from 'react';

type Props = {
    newTodo: string;
    onNewTodoChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onAddNewTodo: () => void;
}
const CreateNewTodo = ({ newTodo, onNewTodoChange, onAddNewTodo }: Props) => {
    return (
        <div>
            <TextField size='small' value={newTodo} onChange={onNewTodoChange}></TextField>
            <Button variant="outlined" onClick={onAddNewTodo}>Add</Button>
        </div>
    )
}

export default CreateNewTodo
