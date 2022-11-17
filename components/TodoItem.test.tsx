import { render, screen } from '@testing-library/react'
import TodoItem from './TodoItem'
import '@testing-library/jest-dom'
import { getFakeExistingTodos } from '../pages'

describe('TodoItem', () => {
    const todoItem = getFakeExistingTodos()[0];
    beforeEach(() => {
        render(<TodoItem todoItemData={todoItem} deleteItem={() => { }} />)
    })

    it('should display passed text', () => {
        screen.getByText(todoItem.text)
    })

    it('should render delete button to remove item', () => {
        screen.getByText('-')
    })
})