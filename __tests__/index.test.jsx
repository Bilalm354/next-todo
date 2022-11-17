import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

// TODO: potensh change to typescript -- needs jest dom types 

describe('index', () => {
    beforeEach(() => {
        render(<Home />)

    });
    it('renders todo heading', () => {
        const heading = screen.getByRole('heading', {
            name: /Todos/i,
        });

        expect(heading).toBeInTheDocument();
    })

    it('should render input box for todo', () => {
        const todoInputBox = screen.getByTestId('todo-input-box');
        expect(todoInputBox).toBeInTheDocument();
    })

    it.skip('should allow user to create todo', () => { })
    it.skip('user can edit todo', () => { })
    it.skip('user can delete todo', () => { })
    it.skip('added todo is saved to local storage', () => { })
    it.skip('can save todo', () => { })
    it.skip('todo is styled', () => { })
    it.skip('saves todo to database', () => { })
    it.skip('loads todos from database', () => { })
    it.skip('renders loaded todos', () => { })
    it.skip('validates text in todos - removes whitespace etc and checks max length', () => { })
    it.skip('validates text in todos - removes whitespace etc and checks max length', () => { })
});
