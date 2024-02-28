// Fields for each fields in input component
const RegisterFields = [
  {
    name: 'username',
    type: 'text',
    validate: ['required', 'include:[word,number,_]'],
  },
  { name: 'email', type: 'text', validate: ['required', 'email'] },
  { name: 'dob', type: 'date', validate: ['required'] },
  {
    name: 'age',
    type: 'number',
    validate: ['required', 'min_num:18', 'max_num:80'],
  },
  {
    name: 'password',
    type: 'password',
    validate: ['required', 'min_char:8'],
  },
  {
    name: 'confirmpassword',
    type: 'password',
    validate: ['required', 'min_char:8', 'confirm:password'],
  },
];

export default RegisterFields;
