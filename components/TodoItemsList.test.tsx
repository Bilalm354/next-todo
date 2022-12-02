import { render, screen } from '@testing-library/react';
import { returnNewTodoItemWithText, TodoItemData } from '../pages';
import TodoItemsList from './TodoitemsList';

export const getFakeExistingTodos = (): TodoItemData[] => [
    returnNewTodoItemWithText('hello'),
    returnNewTodoItemWithText('hi')
];

describe('TodoItemsList', () => {
    const todoItems = getFakeExistingTodos();
    beforeEach(() => {
        render(<TodoItemsList todoItemsData={todoItems} deleteItem={() => { }} />)
    })

    it('should have unique keys for each TodoItem', () => {
        // TODO
    })

    it('should contain all text from todos on page', () => {
        for (const todoItem of todoItems) {
            const todoText = screen.getByText(todoItem.text);
            expect(todoText).toBeInTheDocument();
        }
    })
})