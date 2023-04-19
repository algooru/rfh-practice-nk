import React from 'react';
import { useForm } from 'react-hook-form';
import ErrorMessage from '../components/error';

// 🟢 Use these regex patterns.
const regex = {
  email: new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
  phone: new RegExp(
    /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/
  ),
};

const NestedObjects = () => {
  const onSubmit = (formValues) => {};

  return (
    <div>
      <h5>Nested Objects</h5>
      <form className="space-y-4">
        <div className="">
          <input type="text" placeholder="Name" />
          <ErrorMessage message="" />
        </div>
        <div className="">
          <input type="text" placeholder="Email" />
          <ErrorMessage message="" />
        </div>
        <div className="">
          <input type="text" placeholder="Phone" />
          <ErrorMessage message="" />
        </div>
        {/* Social Links */}
        <div className="space-y-4">
          <h6 className="text-gray-400 mb-0">Social Media Links</h6>
          <input type="text" placeholder="Instagram" />
          <input type="text" placeholder="Facebook" />
        </div>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default NestedObjects;

// 📝 Create a form that matches the below 🔻 object

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
// phone: validate for phonenumber pattern
