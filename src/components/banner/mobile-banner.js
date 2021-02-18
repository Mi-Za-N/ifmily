import React, { useCallback, useState } from 'react';
import {
  Box,
  Content,
} from './banner.style';
import { Button } from '../button/button';
import { useAppState, useAppDispatch } from '../../contexts/app/app.provider';

export const MobileBanner = ({ type, intlTitleId }) => {
  const [isOpen, setOpen] = useState(false);
  const isClickSearchButton = useAppState("isClickOnSearch");

  const dispatch = useAppDispatch();
  const setSticky = useCallback(() => dispatch({ type: 'SET_STICKY' }), [
    dispatch,
  ]);
  const removeSticky = useCallback(() => dispatch({ type: 'REMOVE_STICKY' }), [
    dispatch,
  ]);
  
  return (
    // <Box display={['flex', 'flex', 'none']}>
      <Content>
          <Button
            variant="text"
            onClick={() => setOpen(true)}
            style={{ textTransform: 'capitalize' }}
          >
            {type}
          </Button>
          
          {/* {isClickSearchButton ? (
            <>
            <br />
         <SearchWrapper>
          <Search minimal={true} />
        </SearchWrapper>
              </>
              ): null} */}
      </Content>
    // {/* </Box> */}
  );
};
