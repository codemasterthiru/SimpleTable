import React from 'react'
import { 
    TableContainer,
    TableHeader,
    TableHead,
    TableRow,
    TableCell,
} from './styles'

class TableComponent extends React.Component {
    render() {
        const dataColumns = this.props.data.columns
        const dataRows = this.props.data.rows
        const renderTableHeader = (column) => {
            return(
                <TableHeader>{column}</TableHeader>
            )
        }
        const renderTableRows = (row) => {
            const renderRows = (column) => {
                return(
                    <TableCell>{row[column]}</TableCell>
                )
            }
            return(
                <TableRow>{dataColumns.map(renderRows)}</TableRow>
            )
        }
        const TableHeaders = () => {
            return(
                <TableHead>
                    <TableRow>{dataColumns.map(renderTableHeader)}</TableRow>
                </TableHead>
            )
        }
        const TableBody = () => {
            return(dataRows.map(renderTableRows))
        }
        return (
            <TableContainer className="table table-bordered table-hover" width="100%">
                <TableHeaders />
                <TableBody />
            </TableContainer>
        )

    }
}

export { TableComponent }
export default { TableComponent }