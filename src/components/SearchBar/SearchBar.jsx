import { useState } from 'react';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (evt) => {
    setInputValue(evt.target.value); /* evt.target - це місце, де виникла подія, в даному випадку подія виникає в input */
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>{inputValue}</p>
    </div>
  );
};

export default SearchBar;
