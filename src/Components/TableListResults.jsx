Import class ColumnAlignTable extends React.Component {
  render() {
    return (
      <BootstrapTable data={ products }>
          <TableHeaderColumn dataField='id' isKey={ true } dataAlign='center'>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name' headerAlign='right'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price' headerAlign='center' dataAlign='right'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
export default ColumnAlignTable;