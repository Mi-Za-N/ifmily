import React from 'react';
import { useRouter } from 'next/router';
import { openModal, closeModal } from '@redq/reuse-modal';
import MobileDrawer from './mobile-drawer';
import {
  MobileHeaderWrapper,
  MobileHeaderInnerWrapper,
  DrawerWrapper,
  LogoWrapper,
  SearchWrapper,
  SearchModalWrapper,
  SearchModalClose,
} from './header.style';
import Search from '../../features/search/search';
import LogoImage from '../../assets/images/Logo-For-Web-Kmart24-218by36.png';

import { SearchIcon } from '../../assets/icons/SearchIcon';
import { LongArrowLeft } from '../../assets/icons/LongArrowLeft';
import Logo from '../../layouts/logo/logo';
import { isCategoryPage } from '../is-home-page';
import useDimensions from '../../utils/useComponentSize';
import { useAppState, useAppDispatch } from "../../contexts/app/app.provider";



const SearchModal = () => {
  const onSubmit = () => {
    closeModal();
  };
  return (
    <SearchModalWrapper>
      <SearchModalClose type='submit' onClick={() => closeModal()}>
        <LongArrowLeft />
      </SearchModalClose>
      <Search
        className='header-modal-search'
        showButtonText={false}
        onSubmit={onSubmit}
      />
    </SearchModalWrapper>
  );
};

const MobileHeader = ({ className }) => {
  const { pathname, query } = useRouter();

  const [mobileHeaderRef, dimensions] = useDimensions();

  

    // const dispatch = useAppDispatch();

    // const toggleSearchBox = React.useCallback(() => {
    //   dispatch({
    //     type: "TOGGLE_SEARCH"
    //   });
    // },[dispatch]);

  const handleSearchModal = () => {
    
    openModal({
      show: true,
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'search-modal-mobile',
        width: '100%',
        height: '100%',
      },
      closeOnClickOutside: false,
      component: SearchModal,
      closeComponent: () => <div />,
    });
  };
  const type = pathname === '/restaurant' ? 'restaurant' : query.type;

  const isHomePage = isCategoryPage(type);

  return (
    <MobileHeaderWrapper>
      <MobileHeaderInnerWrapper className={className} ref={mobileHeaderRef}>
        <DrawerWrapper>
          <MobileDrawer />
        </DrawerWrapper>

        <LogoWrapper>
          <Logo 
          imageUrl={LogoImage}
           alt='shop logo' />
        </LogoWrapper>

        {isHomePage ? (
          <SearchWrapper
              onClick={handleSearchModal}
            // onClick={toggleSearchBox}
            className='searchIconWrapper'
          >
            <SearchIcon />
          </SearchWrapper>
        ) : null}
      </MobileHeaderInnerWrapper>
    </MobileHeaderWrapper>
  );
};

export default MobileHeader;
