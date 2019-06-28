import React from 'react'
import App from '../src/App'
import {
    render,
    cleanup
} from '@testing-library/react'

import 'jest-dom/extend-expect'

describe('App component', () => {
    it('should render app component', () => {
        const { getByTestId } =  render(<App/>)
        expect(getByTestId('app-component')).toHaveTextContent('App')
    })
})
