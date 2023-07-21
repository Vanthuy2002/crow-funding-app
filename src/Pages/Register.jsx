import Label from 'src/components/label';
import Input from 'src/components/Input';
import FormGroup from 'src/components/common/FormGroup';
import Checkbox from 'src/components/Checkbox';
import Button from 'src/components/Button';
import Authen from 'src/Layout/Authen';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { message } from 'src/constants';
import FormError from 'src/components/Errors';

const schema = yup.object({
  username: yup.string().required(message.require),
  email: yup.string().required(message.require).email(message.email),
  password: yup.string().required(message.require).min(8, message.password),
});

const Register = () => {
  const [accept, setAccept] = useState(false);
  const handleAccepts = () => {
    setAccept(!accept);
  };
  const { handleSubmit, control, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const { isSubmitting, errors } = formState;
  const handleRegister = (value) => {
    console.log(value);
  };

  return (
    <Authen heading='Register an accounts'>
      <p className='mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8'>
        Aready have an accounts ?{' '}
        <Link to='/login' className='font-medium underline text-primary'>
          Login now
        </Link>
      </p>
      <button className='flex items-center justify-center w-full py-3 mb-5 text-base font-semibold border text-text2 gap-x-2 border-strock'>
        <img srcSet='/icon-google.png 2x' alt='' />
        <span>Register with Google</span>
      </button>
      <p className='mb-4 text-xs font-normal text-center lg:text-sm lg:mb-8 text-text2 dark:text-white'>
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleRegister)} autoComplete='off'>
        {/* username */}
        <FormGroup>
          <Label htmlFor='username'>Username*</Label>
          <Input
            control={control}
            name='username'
            type='text'
            placeholder='Enter your username...'
          />
          <FormError>{errors?.username?.message}</FormError>
        </FormGroup>

        {/* email */}
        <FormGroup>
          <Label htmlFor='email'>Email*</Label>
          <Input
            control={control}
            name='email'
            type='text'
            placeholder='example@gmail.com'
          />
          <FormError>{errors?.email?.message}</FormError>
        </FormGroup>

        <FormGroup>
          <Label htmlFor='password'>Password*</Label>
          <Input
            control={control}
            name='password'
            type='text'
            placeholder='Your password....'
          />
          <FormError>{errors?.password?.message}</FormError>
        </FormGroup>
        {/* checked */}
        <Checkbox checked={accept} onClick={handleAccepts} name='terms'>
          <p className='text-sm font-normal text-text2'>
            I argree for the{' '}
            <span className='text-purple-500 underline'>Tearsm of Use</span> and
            have read the policy
          </p>
        </Checkbox>
        <Button
          isLoading={isSubmitting}
          className='w-full text-white bg-primary'
        >
          Create my accounts
        </Button>
      </form>
    </Authen>
  );
};

export default Register;
