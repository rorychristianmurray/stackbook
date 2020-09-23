import React from 'react';
import { useConnect } from '@blockstack/connect'

const SignIn = () => {
  const { doOpenAuth } = useConnect()

  return (
    <div onClick={() => doOpenAuth(true)} className="alrdy">
      already have a username?
    </div>
  );
};

export default SignIn;
