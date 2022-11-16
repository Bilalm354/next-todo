import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

// TODO: create todo 
// TODO: edit todo 
// TODO: save todo 
// TODO: make data model for todo 
// TODO: style todo 
// TODO: delete todo 
// TODO: save to local storage 
// TODO: save to database 
// TODO: delete from database 
// TODO: deploy
// TODO: heading
// TODO: validation

describe('Home', () => {
    it('renders todo heading', () => {
        render(<Home />)

        const heading = screen.getByRole('heading', {
            name: /Todos/i,
        })

        expect(heading).toBeInTheDocument()
    })

    it.skip('user can create todo', () => { })
    it.skip('user can edit todo', () => { })
    it.skip('user can delete todo', () => { })
    it.skip('added todo is saved to local storage', () => { })
    it.skip('can save todo', () => { })
    it.skip('todo is styled', () => { })
    it.skip('saves todo to database', () => { })
    it.skip('loads todos from database', () => { })
    it.skip('renders loaded todos', () => { })
})