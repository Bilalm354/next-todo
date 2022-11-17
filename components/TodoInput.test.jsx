import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import TodoInput from './TodoInput'

describe('TodoInput', () => {
    beforeEach(() => {
        render(<TodoInput />)
    })
    it('should render input box for todo', () => {
        const todoInputBox = screen.getByTestId('todo-input-box');
        expect(todoInputBox).toBeInTheDocument();
    })

    it('should have a + to click on', () => {
        const todoInputplus = screen.getByTestId('todo-input-plus');
        expect(todoInputplus).toBeInTheDocument();
    })

    it('should empty the input box value after addingTodo', () => {

    })

    it('should keep the input box selected after submitting todo', () => { })
})