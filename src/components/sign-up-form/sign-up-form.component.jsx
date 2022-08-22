import { useState } from 'react';

export const defaultForm = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
const SignUpFrom = () => {
  const [formDetails, setForm] = useState(defaultForm);

  const { displayName, email, password, confirmPassword } = formDetails;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...formDetails, [name]: value });
  };
  console.log(formDetails);

  return (
    <div>
      <h1> Hi, welcome, Please Sign Up</h1>
      <form action="" onSubmit={() => {}}>
        <label htmlFor="">Display Name</label>
        <input
          type="text"
          required
          name="displayName"
          onChange={handleChange}
          value={displayName}
        />

        <label htmlFor="">email</label>
        <input
          type="email"
          required
          name="email"
          onChange={handleChange}
          value={email}
        />

        <label htmlFor="">Password</label>
        <input
          required
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />

        <label htmlFor="">Confirm Password</label>
        <input
          required
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpFrom;
