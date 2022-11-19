import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

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
    it.skip('should be able to add due date to todo', () => { })
    it.skip('should be able to sort by date added', () => { })
    it.skip('should be able to sort by date due', () => { })
    it.skip('should be able to check todo', () => { })
});
