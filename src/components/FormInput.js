import React, { useState } from "react";

const FormInput = (props) => {
  const [name, setName] = useState("");
  const [DoB, setDob] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setDob(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      dateOfBirth: new Date(DoB),
    };
    props.onSaveData(data);
    setName('')
    setDob('')

  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div className="input">
          <label> Name </label>
          <input
            type="text"
            placeholder=" Enter your name"
            value={name}
            onChange={nameChangeHandler}
          />
        </div>
        <div className="input">
          <label> Date of Birth </label>
          <input
            type="date"
            placeholder=" Enter your Date of birth"
            value={DoB}
            onChange={dateChangeHandler}
          />
        </div>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default FormInput;
