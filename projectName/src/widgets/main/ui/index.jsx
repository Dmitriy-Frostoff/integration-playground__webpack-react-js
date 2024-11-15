import React, { StrictMode } from 'react';

export default function Main(props) {
  return (
    <main className="layout-one-column container main__container">
      {props.children}
    </main>
  );
}
