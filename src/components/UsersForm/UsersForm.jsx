import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import './UsersForm';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/users';

export default function UsersForm() {

  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [sex, setSex] = useState('');
  const [job, setJob] = useState('');
  const [biography, setBiography] = useState('');
  const [is_active, setIs_active] = useState(false);

  const firstNameId = nanoid();
  const lastNameId = nanoid();
  const dateOfBirthId = nanoid();
  const sexId = nanoid();
  const jobId = nanoid();
  const biographyId = nanoid();

  const submitHandler = event => {
    event.preventDefault();
    dispatch(addUser(firstName, lastName, job, biography))
  }

  return (
    <form onSubmit={submitHandler} autoComplete="off">
      <label htmlFor={firstNameId}>First Name</label>
      <input
        type="text"
        name="firstName"
        required
        placeholder="Your first name"
        value={firstName}
        onChange={event => setFirstName(event.target.value)}
      />

      <label htmlFor={lastNameId}>Last Name</label>
      <input
        type="text"
        name="lastName"
        required
        placeholder="Your last name"
        value={lastName}
        onChange={event => setLastName(event.target.value)}
      />

      <label htmlFor={jobId}>Job</label>
      <input
        type="text"
        name="job"
        required
        placeholder="Your job"
        value={job}
        onChange={event => setJob(event.target.value)}
      />

      <label htmlFor={biographyId}>Job</label>
      <input
        type="text"
        name="biography"
        required
        placeholder="Your biography"
        value={biography}
        onChange={event => setBiography(event.target.value)}
      />

      <button type="button">Add</button>

    </form>
  )

}