import { Button } from '@mui/material'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const Icon = ({ isCompleted, updateIsCompleted, todoId }: { isCompleted: boolean, updateIsCompleted: (todoId: string) => void, todoId: string }) => {
    return <div onClick={() => updateIsCompleted(todoId)}> {isCompleted ? <CheckBoxIcon></CheckBoxIcon> : <CheckBoxOutlineBlankIcon></CheckBoxOutlineBlankIcon>}</div>
}
const Todo = ({ todoId, name, isCompleted, updateIsCompleted }: { todoId: string, name: string, isCompleted: boolean, updateIsCompleted: (todoId: string) => void }) => {
    return (
        <Button style={{ justifyContent: 'space-between' }} fullWidth={true} endIcon={<Icon todoId={todoId} isCompleted={isCompleted} updateIsCompleted={updateIsCompleted}></Icon>}>{name} </Button>
    )
}

export default Todo
