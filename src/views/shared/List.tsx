import React from 'react';

interface Props {
  datas: { id: number; title: string }[];
}

export default function List({ datas }: Props) {
  return (
    <ul>
      {datas.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
