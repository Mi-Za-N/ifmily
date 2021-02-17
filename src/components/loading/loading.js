import React from 'react';
import {
  NoResultWrapper,
} from './loading.style';
import { FormattedMessage } from 'react-intl';


const Loading = ({ id }) => {

  return (
    <NoResultWrapper id={id}>
      <h3>
        <FormattedMessage
          id="noResultFound"
          defaultMessage="loading..."
        />
      </h3>
    </NoResultWrapper>
  );
};

export default Loading;
