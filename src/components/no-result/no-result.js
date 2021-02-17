import React from 'react';
import Router from 'next/router';
import NoResultSvg from './no-result.svg';
import {
  NoResultWrapper,
  ImageWrapper,
  ButtonWrapper,
} from './no-result.style';
import { ArrowPrev } from '../../assets/icons/ArrowPrev';
import { Button } from '../button/button';
// import { SearchContext } from 'contexts/search/search.context';
import { FormattedMessage } from 'react-intl';


const NoResultFound = ({ id }) => {

  function onClickButton() {
    Router.push('/');
  }
  return (
    <NoResultWrapper id={id}>
      <h3>
        <FormattedMessage
          id="noResultFound"
          defaultMessage="Sorry, No product found"
        />
      </h3>

      <ImageWrapper>
        <img src={NoResultSvg} alt="No Result" />
      </ImageWrapper>

      <ButtonWrapper>
        <div onClick={onClickButton}>
          <Button>
            <ArrowPrev /> Go Back
          </Button>
        </div>
      </ButtonWrapper>
    </NoResultWrapper>
  );
};

export default NoResultFound;
