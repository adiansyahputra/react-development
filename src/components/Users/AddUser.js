import React, { useState, useRef } from 'react';

import ErrorModal from '../UI/ErrorModal';
import Card from '../UI/Card';
import classes from './AddUser.module.css';

import Button from '../UI/Button';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {
  const [error, setError] = useState();
  const usernameInputRef = useRef();
  const ageInputRef = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = usernameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({ title: 'Invalid input', message: 'Please enter a valid name and age (non-empty values).' });
      return;
    }
    if (+enteredAge < 1) {
      setError({ title: 'Invalid age', message: 'Please enter a valid age (> 0).' });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    usernameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = (event) => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" ref={usernameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input type="number" id="age" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
