import { TodoItemData } from "../pages";

export interface TodoItemProps {
    todoItemData: TodoItemData;
    deleteItem: (id: number) => void;
}

export default function TodoItem({ todoItemData, deleteItem }: TodoItemProps) {
    const { text, id } = todoItemData
    return (
        <div className="flex space-x-2">
            <p>{text}</p>
            <div onClick={() => deleteItem(id)}>-</div>
        </div>
    )
}