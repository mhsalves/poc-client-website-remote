import React from "react";

const container: React.CSSProperties = {
  display: 'flex',
  width: '100%',
  maxWidth: '400px',
  margin: '0 auto',
  flexDirection: "column",
  border: '1px solid black',
  padding: '0',
};

const sentence: React.CSSProperties = {
  borderBottom: '1px solid black',
  padding: '1rem',
  display: 'grid',
  gridTemplateColumns: '1fr 0.2fr 1fr',
  gridGap: '0.5rem',
};

const operator: React.CSSProperties = {
  width: '30px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const input: React.CSSProperties = {
  margin: '0',
  width: '100%',
  height: '2rem',
  boxSizing: 'border-box',
};

const result: React.CSSProperties = {
  textAlign: 'center',
};

export default {
  container,
  sentence,
  operator,
  input,
  result,
}
