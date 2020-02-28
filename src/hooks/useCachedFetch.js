import {useState, useEffect} from 'react';

export function useCachedFetch(url) {
  const [data, storeData] = useState(null);

  useEffect(() => {
    console.log('useCachedFetch: effect called');
    // you should check if loaded data is related to url! This check is missing here
    if (!data) {
      console.log('useCachedFetch: data not fetched yet - loading');
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log('useCachedFetch: store fetched data');
          storeData(data);
        });
    } else {
      console.log('useCachedFetch: data already fetched');
    }

    return () => {
      // when data was changed - there is nothing to cancel
      // when url changed or it's unmount - you should cancel pending promise
      console.log(`useCachedFetch: you should 'cancel' pending promises here`);
    }
  }, [data, url]);

  console.log('useCachedFetch: returning data');
  return data;
}
