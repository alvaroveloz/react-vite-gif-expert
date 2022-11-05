import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState();

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;
    onAddCategory(inputValue.trim());
    setInputValue('');
  };

  return (
    <form className='mb-5 fluid' onSubmit={(event) => onSubmit(event)}>
      <InputGroup className='mb-3'>
        <InputGroup.Text id='basic-addon1'>Add Category</InputGroup.Text>
        <Form.Control
          placeholder='Ex: Thundercats'
          value={inputValue}
          onChange={onInputChange}
        />
      </InputGroup>
    </form>
  );
};
