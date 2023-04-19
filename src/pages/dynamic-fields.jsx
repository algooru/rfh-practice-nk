import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import ErrorMessage from '../components/error';

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
    control,
    getValues,
    formState: { errors },
  } = useForm({});

  const { fields, append } = useFieldArray({
    control,
    name: 'addressList',
    required: true,
  });

  const onSubmit = (formValues) => {
    console.log(formValues, 'formValues');
    // reset();
  };

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
            {...register('phone.0', {
              required: true,
              pattern: { value: regex.phone, message: 'Invalid mobile number' },
            })}
          />
          <input
            type="text"
            placeholder="Phone Number 2"
            {...register('phone.1', {
              required: true,
              pattern: { value: regex.phone, message: 'Invalid mobile number' },
            })}
          />
          <ErrorMessage message={errors?.phone?.[0]?.message} />
          <ErrorMessage message={errors?.phone?.[1]?.message} />
        </div>

        {/* Addresses */}
        <div className="">
          <h6 className="mb-1">Address</h6>
          <div className="space-y-4">
            <select defaultValue="primary">
              <option value="primary">Primary</option>
              <option value="secondary">Secondary</option>
            </select>
            <textarea
              id=""
              cols="30"
              rows="10"
              placeholder="Address"
            ></textarea>
          </div>
          <button type="button">Add</button>
          <hr className="my-3" />
        </div>

        <input type="submit" value="submit" className="button-primary w-full" />
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
        addresses:[
            {
            type: 'primary address',
            address: '4th block jaynagar 560045'
            },
           {
            type: 'secondary address',
            address: '3rd T block malleshwaram 560015'
            }
        ]
    }
*/

// 🔴 Note the social is a nested object.
