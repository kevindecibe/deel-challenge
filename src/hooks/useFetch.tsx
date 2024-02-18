import { useState, useEffect } from 'react';
import { DataItem } from '../utils/types';

// I only want to show up to 5 results for the autocomplete
const LIMIT_RESULTS = 5;

/**
 * Custom hook used to fetches data from the Giphy API based on the provided query and limit.
 * @returns State of the fetched data, loading status, success status, and any errors that occur during the fetch operation.
 */

const useFetchData = (query: string) => {
  const [data, setData] = useState<DataItem[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    setSuccess(false);
    setError(false);

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search/tags?api_key=JLM4XW6RFHAoqe8UNbbvYxKGZjAzzD9w&q=${query}&limit=${LIMIT_RESULTS}&offset=0&rating=g&lang=en`
        );
        const data = await response.json();
        setData(data.data);
        setSuccess(true);
      } catch (e) {
        console.error(e);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (query === '') {
      setData([]);
      return;
    }
    fetchData();
  }, [query]);

  return { data, success, error, loading };
};

export default useFetchData;
