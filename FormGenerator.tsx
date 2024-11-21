import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Field } from '../types/SchemaTypes';

type FormGeneratorProps = {
  fields: Field[];
};

const FormGenerator: React.FC<FormGeneratorProps> = ({ fields }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit: SubmitHandler<any> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 bg-white rounded-md">
      {fields.map((field) => (
        <div key={field.id} className="mb-4">
          <label htmlFor={field.id} className="block mb-2">
            {field.label} {field.required && <span className="text-red-500">*</span>}
          </label>
          {field.type === 'text' || field.type === 'email' ? (
            <input
              {...register(field.id, { required: field.required })}
              placeholder={field.placeholder}
              type={field.type}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          ) : field.type === 'textarea' ? (
            <textarea
              {...register(field.id, { required: field.required })}
              placeholder={field.placeholder}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          ) : field.type === 'select' ? (
            <select {...register(field.id, { required: field.required })} className="w-full p-2 border border-gray-300 rounded-md">
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : null}
          {errors[field.id] && <p className="text-red-500 text-sm mt-1">{field.label} is required.</p>}
        </div>
      ))}
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Submit</button>
    </form>
  );
};

export default FormGenerator;
