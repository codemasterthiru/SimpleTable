/**
 * importing the styled from styled-components to render the html tags
 */
import styled from 'styled-components'

const TableContainer = styled.table`
`
const TableHeader = styled.th`
  border: 2px solid #ff5f33;
`
const TableHead = styled.thead`
`
const TableRow = styled.tr`
`
const TableCell = styled.td`
  border: 2px solid #36d4ff;
`

const SearchContainer = styled.div`
  padding: 10px;
`
const SearchInput = styled.input`
  margin-right: 10px;
`
const SearchButton = styled.button`
`
const SearchDropDown = styled.select`
  margin-right: 10px;
`
const OptionList = styled.option`
`
/**
 * exporting the const variable styles to use as jsx elements,
 * in the required place.
 */
export { 
  TableContainer,
  TableHeader,
  TableHead,
  TableRow,
  TableCell,
  SearchInput,
  SearchContainer,
  SearchButton,
  SearchDropDown,
  OptionList,
}