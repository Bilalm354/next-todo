import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoItemsList from './TodoitemsList';
import { getFakeExistingTodos } from '../pages';

// TODO: 

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