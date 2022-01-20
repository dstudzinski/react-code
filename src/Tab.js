import React from "react";

class TableCell extends React.Component {
  render() {
    return (
      <span onClick={() => this.props.onSort(this.props.name)}>{this.props.children}</span>
    );
  }
}

TableCell.displayName = 'TableCell';

export {
  TableCell,
}


function TableRow(props) {
  return props.children;
}

function TableRowExpandableContent(props) {
  return props.shown ? props.children : null;
}