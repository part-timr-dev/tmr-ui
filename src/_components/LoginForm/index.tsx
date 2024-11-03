import { SubmitHandler, useForm } from 'react-hook-form';

export type InputItem = {
  label: string;
  placeholder: string;
  errorOnEmpty: string;
  validateError: (value: string) => string | boolean;
};

export type LoginFormProps = {
  heading: string;
  inputs: InputItem[];
};

type FormValues = {
  [key: string]: string;
};

const LoginForm = (props: LoginFormProps) => {
  const { heading, inputs } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('Form submitted', data);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-6">{heading}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {inputs.map((input, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {input.label}
            </label>
            <input
              type="text"
              placeholder={input.placeholder}
              {...register(`input${index}`, {
                required: input.errorOnEmpty,
                validate: input.validateError,
              })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors[`input${index}`] && (
              <span className="text-red-500 text-sm">
                {errors[`input${index}`]?.message}
              </span>
            )}
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
