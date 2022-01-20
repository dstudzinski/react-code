function TableHeader(props) {
  return React.Children.toArray(props.children).map(
    child => React.cloneElement(child, {onSort: props.onSort}
    ));
}