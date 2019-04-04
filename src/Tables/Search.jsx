/**
 * importing react packages, styles, tableData object and TableContainer class component to use inside the Search component
 */
import React from 'react'
import {
    SearchContainer,
    SearchInput,
    SearchButton,
    SearchDropDown,
    OptionList,
} from './styles'
import { tableData } from './fixtures'
import { TableContainer } from './TableContainer'

/**
 * Search component Declaration and definition
 */
class Search extends React.Component {
    /**
     * Component life cycle, componentWillMount()
     * which comes everytime the Search component calls
     */
    componentWillMount() {
        this.setState({
            selectValue: '',
            inputValue: ''
        })
    }
    /**
     * Input on change event
     */
    searchInputOnChange = (event) => {
        const inputVal = document.getElementById('search-input').value
        this.setState({
            inputValue: inputVal
        })
    }
    /**
     * Select dropdown on change event
     */
    selectDropDownOnChange = (event) => {
        const currentTarget = event.currentTarget
        this.setState({
            selectValue: currentTarget.value
        })
    }
    /**
     * Finding table value function
     */
    findingTableValue = (row) => {
        const selectedRow = row[this.state.selectValue]
        if(selectedRow && selectedRow.includes(this.state.inputValue)) {
            return row
        }
    }
    /**
     * Searching table function
     */
    searchTable = (data) => {
        TableContainer.updateTableData(data)
        // <TableComponent data={data} />
        console.log('data', data)
        console.log('tablethings', TableContainer)
    }
    /**
     * handle click event
     */
    handleClick = (event) => {
        const searchData = tableData.rows.map(this.findingTableValue)
        const cleanArray = searchData.filter(key => (key !== undefined))
        if(searchData){
            this.searchTable(cleanArray)
        }
    }
    /**
     * Default render method of class
     */
    render() {
        const searchOptions = this.props.data
        /**
         * renderSearchOptions function to render the option list
         */
        const renderSearchOptions = (options) => {
            return(
                <OptionList value={options} id={options} className={'search-option'}>{options}</OptionList>
            )
        }
        /**
         * RenderSelectDropDown as a functional component
         * To Search dropdown rendering
         */
        const RenderSelectDropDown = () => {
            return(
                <SearchDropDown onChange={this.selectDropDownOnChange} id="search-dropdown" >
                    {searchOptions.map(renderSearchOptions)}
                </SearchDropDown>
            )
        }
        /**
         * default return method of class
         */
        return(
            <SearchContainer>
                <SearchInput onChange={this.searchInputOnChange} id="search-input" />
                <RenderSelectDropDown />
                <SearchButton onClick={this.handleClick}>Search</SearchButton>
            </SearchContainer>
        )
    }
}
/**
 * export Search to use anywhere
 */
export { Search }
export default { Search }