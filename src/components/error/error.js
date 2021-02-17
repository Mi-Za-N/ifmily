import React from 'react';
import {
  NoResultWrapper,
} from './error.style';
import { FormattedMessage } from 'react-intl';


const Error = ({ id }) => {

  return (
    <NoResultWrapper id={id}>
      <h3>
        <FormattedMessage
          id="noResultFound"
          defaultMessage="An error occur..."
        />
      </h3>
    </NoResultWrapper>
  );
};

export default Error;
