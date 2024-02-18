import searchIconV from '../../assets/icon-search.svg';
import './ResultItem.css';

interface ResultItemProps {
  label: string;
  setInputValue: (value: string) => void;
  inputValue: string;
}

const highlightFirstLetters = (text: string, length: number) => {
  // highlight the first letters of the text, according to the number length
  const head = text.substring(0, length);
  const tail = text.substring(length);
  return (
    <p>
      <strong>{head}</strong>
      {tail}
    </p>
  );
};

const ResultItem = ({ label, setInputValue, inputValue }: ResultItemProps) => {
  return (
    <div className="result-item" onClick={() => setInputValue(label)}>
      <img src={searchIconV} alt="search-icon" className="s-icon" />
      {highlightFirstLetters(label, inputValue.length)}
    </div>
  );
};

export default ResultItem;
