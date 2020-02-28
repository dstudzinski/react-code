import React from 'react';
import {useCachedFetch} from "./hooks/useCachedFetch";

function FetchData(props) {
  const fetched = useCachedFetch('http://jsonplaceholder.typicode.com/posts');

  return (
    <div>
      <pre>{JSON.stringify(fetched, null, 2)}</pre>
    </div>
  )
}

export default FetchData;
