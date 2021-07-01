import React from 'react';

interface Props {
  name: string;
  email: string;
}

export default function UserInfo({ name, email }: Props) {
  return (
    <div>
      <div>name: {name}</div>
      <div>email: {email}</div>
    </div>
  );
}
