import React, {  useState } from 'react';

import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import {  editUser, fetchUser } from '../../redux/users';

import css from './UserEditForm.module.css';
import { useHistory } from 'react-router';

export default function UsersForm({user}) {
  const dispatch = useDispatch();

  
  const [first_name, setFirst_name] = useState(user.first_name);
  const [last_name, setLast_name] = useState(user.last_name);
  const [birth_date, setBirth_date] = useState(user.birth_date);
  const [gender, setGender] = useState(user.gender);
  const [job, setJob] = useState(user.job);
  const [biography, setBiography] = useState(user.biography);
  const [is_active, setIs_active] = useState(user.is_active);

  const firstNameId = nanoid();
  const lastNameId = nanoid();
  const birth_dateId = nanoid();
  const genderId = nanoid();
  const jobId = nanoid();
  const biographyId = nanoid();
  const is_activeId = nanoid();

let history = useHistory()

  const handleSubmit = event => {
    event.preventDefault();
    const updatedUser = {
      first_name,
      last_name,
      birth_date,
      gender,
      job,
      biography,
      is_active,
    }
    dispatch(editUser(user.id, updatedUser))
    dispatch(fetchUser(user.id))
    let path = `/details/${user.id}`;
    history.push(path)
   
  }

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
          checked={is_active}
          value={is_active}
          onChange={event => setIs_active(event.target.value)}
          id={is_activeId}
        />


        <button className={css.addButton} type="submit">Update</button>

      </form >
    </div>
  )

}