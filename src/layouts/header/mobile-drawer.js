import React from 'react';
import { useAppState, useAppDispatch } from '../../contexts/app/app.provider';
import Drawer from '../../components/drawer/drawer';
import { CloseIcon } from '../../assets/icons/CloseIcon';
import {
  HamburgerIcon,
  DrawerClose,
} from './header.style';



const MobileDrawer = () => {
    
  const isDrawerOpen = useAppState('isDrawerOpen');
  const dispatch = useAppDispatch();
  // Toggle drawer
  const toggleHandler = () => {
    dispatch({ type: 'IS_SIDEBAR_OPEN', payload: '1' });
  };

  return (
  <Drawer
      width='316px'
      drawerHandler={
        <HamburgerIcon>
          <span />
          <span />
          <span />
        </HamburgerIcon>
      }
      open={isDrawerOpen}
      toggleHandler={toggleHandler}
      closeButton={
        <DrawerClose>
          <CloseIcon />
        </DrawerClose>
      }
    >
     
   </Drawer>
  );
};

export default MobileDrawer;
