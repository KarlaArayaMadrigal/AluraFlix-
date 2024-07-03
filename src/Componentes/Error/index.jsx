import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  color: red;
  margin-top: 10px;
`;

const Error = ({ message }) => {
  return <ErrorContainer>{message}</ErrorContainer>;
};

export default Error;
