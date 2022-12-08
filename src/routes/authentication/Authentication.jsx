import { SignInForm, SignUpForm } from '../../components';

import './authentication.scss'

const Authentication = () => {

  return (
    <div className='authentication-container'>
        <SignInForm />
        <SignUpForm />
    </div>
  )
}


export default Authentication