function TableContent(props) {
  function getRows(itemsCount) {
    const rows = [];

    for (let i = 0; i<itemsCount; i++) {
        rows.push(props.children(i))
    }

    return rows;

    // createArray(itemsCount).map(() => props.children())
  }

  // itemsCount
  // props.children => funkcja
  return getRows(props.itemsCount)
}