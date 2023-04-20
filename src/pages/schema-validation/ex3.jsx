import React from 'react';
import { useForm } from 'react-hook-form';
import ErrorMessage from '../../components/error';

// 🟢 Use these regex patterns.
const regex = {
  email: new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
  phone: new RegExp(
    /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/
  ),
};

const Ex3 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formValues) => {
    console.log(formValues, 'formValues');
  };
  return (
    <div>
      <h6>Yup with RHF - Ex 3</h6>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="">
          <input type="text" placeholder="Name" {...register('name')} />
          <ErrorMessage message={errors?.name?.message} />
        </div>
        <div className="">
          <input type="text" placeholder="Email" {...register('email')} />
          <ErrorMessage message={errors?.email?.message} />
        </div>
        <div className="">
          <input type="text" placeholder="Phone" {...register('phone')} />
          <ErrorMessage message={errors?.phone?.message} />
        </div>
        {/* Social Links */}
        <div className="space-y-4">
          <h6 className="text-gray-400 mb-0">Social Media Links</h6>
          <input
            type="text"
            placeholder="Instagram"
            {...register('social.facebook')}
          />
          <input
            type="text"
            placeholder="Facebook"
            {...register('social.instagram')}
          />
        </div>
        <ErrorMessage message={errors?.social?.facebook?.message} />
        <ErrorMessage message={errors?.social?.instagram?.message} />

        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Ex3;

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
// social: validate for URL

// 📝 INSTRUCTIONS

// 1. Write the schema for the above object.
// 2. You might note that there are no validations inside the {...register()} function.
// 3. Since you have to use YUP to do the form validation.
// 4. Follow the below URL to learn how to integrate YUP schema to the form.
// https://react-hook-form.com/get-started/#SchemaValidation
