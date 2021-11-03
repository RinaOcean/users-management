import { validate } from 'indicative/validator';
import { sanitize} from 'indicative/sanitizer'

export const validateThis = async data => {
  const rules = {
    first_name: 'required|alpha|max:256', 
    last_name: 'required|alpha|max:256', 
    birth_date: 'required|date',
    gender: 'required',
    job: 'required|alpha|max:256', 
    biography: 'required|max:1024', 
    is_active: 'boolean',
  };

  const messages = {
    required: (field) => `${field} is required`,
    'first_name.alpha': 'Username contains unallowed characters',
    'last_name.alpha': 'User last name contains unallowed characters',
    'birth_date.date': 'Please choose your birth date',
    'gender.required': 'Please choose your gender',
    'job.alpha': 'Job contains unallowed characters',
    'job.max': 'Job should contain maximum 256 symbols',
    'biography.alpha': 'Biography contains unallowed characters',
    'biography.max': 'Job should contain maximum 1024 symbols',
    
  };

  try{
    await validate(data, rules, messages);
  } catch(error){
    throw new Error(error[0].message);
  }
};


export const sanitizeThis = async data =>{
  const rules ={
    first_name: 'trim', 
    last_name: 'trim',
    job: 'trim', 
    biography: 'strip_tags|trim', 
  };

  try{
    await sanitize(data, rules);
  } catch(error){
    throw new Error(error[0].message);
  }

};
