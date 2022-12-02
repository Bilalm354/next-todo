import { TodoItemData } from "../pages";
import TodoItem from "./TodoItem";

interface TodoItemsList {
    todoItemsData: TodoItemData[];
    deleteItem: (id: number) => void;
}

export default function TodoItemsList({ todoItemsData, deleteItem }: TodoItemsList) {
    return (
        <>
            {todoItemsData.map(todoItemData => <TodoItem key={todoItemData.id} todoItemData={todoItemData} deleteItem={deleteItem} />)}
        </>
    )
}