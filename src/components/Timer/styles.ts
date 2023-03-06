import React from "react";

const container: React.CSSProperties = {
  display: 'flex',
  width: '100%',
  maxWidth: '400px',
  margin: '0 auto',
  flexDirection: 'column',
  border: '1px solid black',
  padding: '1rem',
  boxSizing: 'border-box',
};

const heading: React.CSSProperties = {
  margin: 0,
};

const counter: React.CSSProperties = {
  fontSize: '2rem',
  textAlign: 'center',
};

const resetButton: React.CSSProperties = {
  height: '2rem',
};

export default {
  container,
  heading,
  counter,
  resetButton,
}
