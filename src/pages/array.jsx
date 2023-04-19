import React from 'react';
import { useForm } from 'react-hook-form';
import ErrorMessage from '@/components/error';

// 🟢 Use these regex patterns.
const regex = {
  email: new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
  phone: new RegExp(
    /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/
  ),
};

const NestedObjects = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (formValues) => {
    console.log(formValues, 'formValues');
    reset();
  };

  console.log(errors, 'errors');

  return (
    <div>
      <h5>Array Values</h5>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="">
          <input
            type="text"
            placeholder="Name"
            {...register('name', {
              required: { value: true, mesasge: 'Name is required' },
              minLength: {
                value: 5,
                message: 'Name must have min length of 4',
              },
            })}
          />
          <ErrorMessage message={errors?.name?.message} />
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Email"
            {...register('email', {
              required: true,
              pattern: {
                value: regex.email,
                message: 'Email is not valid format',
              },
            })}
          />
          <ErrorMessage message={errors?.email?.message} />
        </div>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Phone number 1"
            {...register('phone', {
              required: true,
              pattern: { value: regex.phone, message: 'Invalid mobile number' },
            })}
          />
          <input
            type="text"
            placeholder="Phone Number 2"
            {...register('phone', {
              required: true,
              pattern: { value: regex.phone, message: 'Invalid mobile number' },
            })}
          />
          <ErrorMessage message="" />
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
        phone: ["9809786787", '9898384783],
    }
*/

// 🔴 Note phone field is a array of numbers
