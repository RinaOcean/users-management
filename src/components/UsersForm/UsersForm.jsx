import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { nanoid } from 'nanoid';
import { addUser, fetchAllUsers } from '../../redux/users';

import * as check from '../../components/helpers/validate';

import css from './UsersForm.module.css';
import { useHistory } from 'react-router';

export default function UsersForm() {

  const dispatch = useDispatch();

  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [birth_date, setBirth_date] = useState('');
  const [gender, setGender] = useState('male');
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

  let history = useHistory();

  const handleSubmit = async event => {
    try{
      event.preventDefault();
      
      await check.validateThis({ first_name, last_name, birth_date, gender, job, biography, is_active });
      await check.sanitizeThis({ first_name, last_name, birth_date, gender, job, biography, is_active });

      dispatch(addUser({ first_name, last_name, birth_date, gender, job, biography, is_active }));
      dispatch(fetchAllUsers());

      let path = `/`;
      history.push(path);

    } catch(error){
      console.log(error);
    }
   };

  return (
    <div className={css.formWrapper}>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor={firstNameId}>First Name</label>
        <input
          type="text"
          name="firstName"
          maxLength="256"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name must contain only letters, apostrophe, dash and spaces"
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
          maxLength="256"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Last name must contain only letters, apostrophe, dash and spaces"
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

        <label htmlFor={genderId}>Gender</label>
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
          maxLength="256"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Job must contain only letters, apostrophe, dash and spaces"
          required
          placeholder="Your job"
          value={job}
          onChange={event => setJob(event.target.value)}
          id={jobId}
        />

        <label htmlFor={biographyId}>Biography</label>
        <textarea
          type="text"
          name="biography"
          maxLength="1024"
          required
          placeholder="Your biography"
          value={biography}
          onChange={event => setBiography(event.target.value)}
          id={biographyId}
        >
        </textarea>

        <label htmlFor={is_activeId}>Enabled</label>
        <input
          type="checkbox"
          name="isActive"

          value={is_active}
          onChange={event => setIs_active(event.target.checked)}
          id={is_activeId}
        />


        <button className={css.addButton} type="submit">Add</button>

      </form >
    </div>
  )

}