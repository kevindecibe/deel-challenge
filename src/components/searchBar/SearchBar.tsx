import { useState, useEffect } from 'react';
import deel from '../../assets/deel-logo.svg';
import ResultItem from '../resultItem/ResultItem';
import useFetchData from '../../hooks/useFetch';
import useDebounce from '../../hooks/useDebounce';
import { DataItem } from '../../utils/types';
import './SearchBar.css';

const SearchBar = () => {
  const [results, setResults] = useState<DataItem[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const debouncedValue = useDebounce(inputValue, 500);
  const { data, success, error, loading } = useFetchData(debouncedValue);

  useEffect(() => {
    if (debouncedValue === '') {
      setResults([]);
    }
    if (debouncedValue !== '' && success) {
      setResults(data);
    }
  }, [data, debouncedValue, success]);

  return (
    <main className="main-section">
      <img src={deel} alt="deel-logo" className="deel-logo" />
      <h1>Autocomplete Challenge</h1>
      <div className="autocomplete-bar">
        <input
          className="search"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Start type something to search..."
        />
        {success && results.length > 0 && (
          <div className="data">
            {results.map((item: DataItem, index: number) => {
              return (
                <ResultItem
                  label={item.name}
                  setInputValue={setInputValue}
                  inputValue={debouncedValue}
                  // should be an unique key like id
                  key={`${item.name}-${index}`}
                />
              );
            })}
          </div>
        )}
        {success && results.length === 0 && (
          <div className="data">
            <p>No results. Try searching for something else...</p>
          </div>
        )}
        {loading && (
          <div className="data">
            <p>Loading...</p>
          </div>
        )}
        {error && (
          <div className="data">
            <p>There is an error. Try again...</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default SearchBar;
