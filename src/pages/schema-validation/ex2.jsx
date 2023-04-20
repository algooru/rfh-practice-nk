import React from 'react';
import ErrorMessage from '../../components/error';

// 🟢 Use these regex patterns.
const regex = {
  email: new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
  phone: new RegExp(
    /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/
  ),
};

const Ex2 = () => {
  const onSubmit = (e) => {
    e.preventDefault();

    const userDetails = {
      name: e.target[0].value,
      email: e.target[1].value,
      phone: e.target[2].value,
      social: {
        instagram: e.target[3].value,
        facebook: e.target[4].value,
      },
    };

    // 👋 Please validate the userDetails data here, and throw an
    // error to the end user if something is wrong with the form submitted
  };

  return (
    <div>
      <h5>Yup Validation - Ex 2</h5>
      <form className="space-y-4" onSubmit={onSubmit}>
        <div className="">
          <input type="text" placeholder="Name" />
        </div>
        <div className="">
          <input type="text" placeholder="Email" />
        </div>
        <div className="">
          <input type="text" placeholder="Phone" />
        </div>
        {/* Social Links */}
        <div className="space-y-4">
          <h6 className="text-gray-400 mb-0">Social Media Links</h6>
          <input type="text" placeholder="Instagram" />
          <input type="text" placeholder="Facebook" />
        </div>
        <input type="submit" value="submit" />
      </form>
      {/*👇👇👇👇👇👇👇 ADD THE ERROR MESSAGE HERE  👇👇👇👇👇👇👇*/}
      <ErrorMessage message="" />
    </div>
  );
};

export default Ex2;

// 📝 Create a form that matches the below 🔻 object and validate for the below rules

/*
    {
        name: "jhon doe",
        email: "jhondoe@gmail.com",
        phone: "9809786787",
        social: {
            facebook: "https://www.instagram.com/theejohndoe/?hl=en",
            instagram: "https://www.facebook.com/people/Jhon-Doe/100084748947456/"
        }
    }
*/

// 🔴 Note the social is a nested object.

// 🚩 RULES
// All the fields are required.
// name: field must have min length of 5
// email: validate for email pattern
// phone: validate for phonenumber pattern it must be a regex using yup, regex patter is provided already.
// social: links must be in a valid URL format
