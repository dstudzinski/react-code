import React from 'react';

import {Tab} from "./Tab";
import {Tabs} from "./Tabs";
import './App.css';

import {Table, HeaderCell, ServiceHelper} from './MagicTable';

class App extends React.Component {
  state = {
    sortBy: undefined,
    sortedData,
    selectedColumns: {
      wlasciciel: true,
      data: false,
    }
  }

  data = [
    {
      title: 'jakis tytul',
      owner: 'Dawid',
      created: '2020-03-01T10:34:06.637Z',
      modified: '2020-03-01T10:34:06.637Z',
      number: '0000010',
    },
    {
      title: 'jakis tytul 2',
      owner: 'Paweł',
      created: '2020-03-01T10:34:06.637Z',
      modified: '2020-03-01T10:34:06.637Z',
      number: '0000011',
    },
  ];

  render() {
    return (
      <div className="App">
        <ColumnsSelector
          selectableColumns={['wlasciciel', 'data']}
          onSelectColumns={(selectedColumns) => this.setState({selectedColumns})}
        />
        <Table>
          <TableHeader onSort={this.handleSort}>
            {this.state.selectedColumns.wlasciciel && <TableCell name="wlascicel" sortable={false}>Column1Label</TableCell>}
            {this.state.selectedColumns.data && <TableCell name="data">{asdf.format().sort().join()}</TableCell>}
          </TableHeader>
          <TableContent itemsCount={data.length}>
            {(index) => this.getRow({documentIndex: index, sortedData: this.state.sortedData})}
          </TableContent>
        </Table>
      </div>
    );
  }

  getRow = (props) => {
    const {documentIndex, sortedData} = props;
    const document = sortedData[documentIndex];

    return (
      <TableRow onExpand={this.handleExpan}>
        <TableRowCell name="wlasciciel">{document.title.toUpperCase()}</TableRowCell>
        <TableRowCell name="data">{document.created}</TableRowCell>
        <TableRowExpandableContent isExpanded={this.state.expanded.includes(documentIndex)}>
          asdfadfadfasfd
        </TableRowExpandableContent>
      </TableRow>
    )
  }

  sortDataMemoized = memoizeOne(sortData);

  /*
  function mem(func) {




   */

  handleSort = (columnName) => {
    // setState ustaw jako kkolumna do posortowania
    const sortedData = this.sortDataMemoized(data, this.state.sortBy);
    this.setState({sortBy: columnName, sortedData})
  };


  handleTabSelect = tabSelected => {
    this.setState({tabSelected})
  }
}

export default App;
