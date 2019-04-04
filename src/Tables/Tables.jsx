/**
 * importing react packages, Search, TableComponent, and TableContainer component to use inside the Tables class component
 */
import React from 'react'
import { Search } from './Search'
import { TableComponent } from './TableComponent'
import { TableContainer } from './TableContainer'

/**
 * defining and declaring the Tables class component
 */
class Tables extends React.Component {
    render() {
        return(
            <>
                <Search data={TableContainer.state.data.columns}/>
                <TableComponent data={TableContainer.state.data}/>
            </>
        )
    }
}

/**
 * exporting the Tables class component to use anywhere
 */
export { Tables }
export default { Tables }