import React, { useState } from 'react';

import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/users';

import css from './UsersForm.module.css';

export default function UsersForm() {

  const dispatch = useDispatch();

  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [birth_date, setBirth_date] = useState('');
  const [gender, setGender] = useState('');
  const [job, setJob] = useState('');
  const [biography, setBiography] = useState('');
  const [is_active, setIs_active] = useState(false);

  const firstNameId = nanoid();
  const lastNameId = nanoid();
  const birth_dateId = nanoid();
  const genderId = nanoid();
  const jobId = nanoid();
  const biographyId = nanoid();
  const is_activeId = nanoid();

  const handleSubmit = event => {
    event.preventDefault();
    console.log(first_name, last_name, birth_date, gender, job, biography, is_active);
    dispatch(addUser({ first_name, last_name, birth_date, gender, job, biography, is_active }))

    setFirst_name('');
    setLast_name('');
    setBirth_date('');
    setGender('');
    setJob('');
    setBiography('');
    setIs_active(false);
  }

  return (
    <div className={css.formWrapper}>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor={firstNameId}>First Name</label>
        <input
          type="text"
          name="firstName"
          required
          placeholder="Your first name"
          value={first_name}
          onChange={event => setFirst_name(event.target.value)}
          id={firstNameId}
        />

        <label htmlFor={lastNameId}>Last Name</label>
        <input
          type="text"
          name="lastName"
          required
          placeholder="Your last name"
          value={last_name}
          onChange={event => setLast_name(event.target.value)}
          id={lastNameId}
        />

        <label htmlFor={birth_dateId}>Date of birth</label>
        <input
          type="date"
          name="dateOfBirth"
          required
          value={birth_date}
          onChange={event => setBirth_date(event.target.value)}
          id={birth_dateId}
        />

        <label htmlFor={genderId}>Your gender</label>
        <select
          name="gender"
          id={genderId}
          value={gender}
          onChange={event => setGender(event.target.value)}
        >
          <option value="male">male</option>
          <option value="female">female</option>

        </select>

        <label htmlFor={jobId}>Job</label>
        <input
          type="text"
          name="job"
          required
          placeholder="Your job"
          value={job}
          onChange={event => setJob(event.target.value)}
          id={jobId}
        />

        <label htmlFor={biographyId}>Biography</label>
        <input
          type="text"
          name="biography"
          required
          placeholder="Your biography"
          value={biography}
          onChange={event => setBiography(event.target.value)}
          id={biographyId}
        />

        <label htmlFor={is_activeId}>Enabled</label>
        <input
          type="checkbox"
          name="isActive"

          value={is_active}
          onChange={event => setIs_active(event.target.value)}
          id={is_activeId}
        />


        <button type="submit">Add</button>

      </form >
    </div>
  )

}