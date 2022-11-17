import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

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


    it.skip('should add new todo to existing todos when you press enter on input box', () => { })
    it.skip('should check todo when clicked on', () => { })
    it.skip('should allow user to create todo', () => { })
    it.skip('user can edit todo', () => { })
    it.skip('added todo is saved to local storage', () => { })
    it.skip('can save todo', () => { })
    it.skip('saves todo to database', () => { })
    it.skip('loads todos from database', () => { })
    it.skip('renders loaded todos', () => { })
    it.skip('validates text in todos - removes whitespace etc and checks max length', () => { })
    it.skip('validates text in todos - removes whitespace etc and checks max length', () => { })
});
