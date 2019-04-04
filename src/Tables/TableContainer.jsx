/**
 * importing react packages, tableData object to use inside the TableData component
 */
import React from 'react'
import { tableData } from './fixtures'

/**
 * Defining and declaring the TableData class components
 */
class TableData extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: tableData
        }
    }
    updateTableData(props) {
        this.setState({
            data: props
        })
    }

}

/**
 * Creating an instance for TableData, to access the functions anywhere which has inside of this TableData class
 */
const TableContainer = new TableData()

/**
 * exporting the class component instance TableContainer to use anywhere
 */
export { TableContainer }
export default { TableContainer }