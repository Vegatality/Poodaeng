/* eslint-disable no-unused-vars */
import Cookies from 'js-cookie';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { shallow } from 'zustand/shallow';
import { ReactComponent as DaengIcon } from '../assets/images/newDaengfinder.svg';
import { ReactComponent as HomeIcon } from '../assets/images/newHome.svg';
import { ReactComponent as MapIcon } from '../assets/images/newMap.svg';
import { ReactComponent as ProfileIcon } from '../assets/images/newMyprofile.svg';
import { ReactComponent as PooBox } from '../assets/images/newPoobox.svg';
import { tokenStore } from '../pages/SignInPage';

function Tabbar({ setIsActive }) {
  const navigate = useNavigate();
  const location = useLocation();

  const refreshToken = Cookies.get('refreshToken');

  // console.log('active', isActive);
  const { deleteToken } = tokenStore(
    state => ({
      deleteToken: state.deleteToken,
    }),
    shallow,
  );

  // const HomeIconHandler = () => {
  //   navigate('/');
  //   setIsActive('home');
  // };

  // const MapIconHandler = () => {
  //   navigate('/map');
  //   setIsActive('map');
  // };

  // const PooPostIconHandler = () => {
  //   if (!refreshToken) {
  //     deleteToken();
  //     navigate('/login');
  //   } else {
  //     navigate('/poopost');
  //   }
  //   setIsActive('poopost');
  // };

  // const DaengIconHandler = () => {
  //   navigate('/daengfinder');
  //   setIsActive('daengfinder');
  // };

  // const ProfileIconHandler = () => {
  //   if (!refreshToken) {
  //     navigate('/unknown');
  //   } else {
  //     navigate('/mypage');
  //   }
  //   setIsActive('mypage');
  // };

  const handleIconClick = route => {
    navigate(route);
  };
  return (
    <div className='sticky bottom-0 bg-[#FFFFFF] z-20'>

      <div className='flex justify-evenly items-center w-[375px] h-[65px] shadow-sm pb-5'>
        <div className='flex flex-col items-center '>
          <HomeIcon
            className={`fill-[#AEAEAE] w-7 h-7 text-[#AEAEAE] ${
              location.pathname === '/' ? 'fill-mainColor' : ''

            }`}
            onClick={() => handleIconClick('/')}
          />
          <div
            className={`absolute bottom-1 text-xs mb-1 text-[#AEAEAE] font-nomal ${
              location.pathname === '/' ? 'text-mainColor' : ''
            }`}
          >
            홈
          </div>
        </div>
        <div className='f-fc-ic relative'>
          <MapIcon
            className={`fill-[#AEAEAE] w-7 h-7  ${
              location.pathname === '/map' ? 'fill-mainColor' : ''

            }`}
            onClick={() => handleIconClick('/map')}
          />
          <div
            className={`absolute bottom-1 text-xs mb-1 text-[#AEAEAE] ${
              location.pathname === '/map' ? 'text-mainColor' : ''
            }`}
          >
            지도
          </div>
        </div>
        <div className='f-fc-ic relative'>
          <PooBox
            className={`fill-[#AEAEAE] w-7 h-7 ${
              location.pathname.includes('/poopost') ||
              location.pathname.includes('/poolanding')
                ? 'fill-mainColor'
                : ''
            }`}
            onClick={() => handleIconClick('/poolanding')}
          />
          <div
            className={`absolute bottom-1 text-xs mb-1 text-[#AEAEAE] ${
              location.pathname.includes('/poopost') ||
              location.pathname.includes('/poolanding')
                ? 'text-mainColor'
                : ''
            }`}
          >
            등록
          </div>
        </div>
        <div className='f-fc-ic relative'>
          <DaengIcon
            className={`fill-[#AEAEAE] w-7 h-7 ${
              location.pathname === '/daengfinder' ? 'fill-mainColor' : ''
            }`}
            onClick={() => handleIconClick('/daengfinder')}
          />
          <div
            className={`absolute bottom-1 text-xs mb-1 text-[#AEAEAE] ${
              location.pathname === '/daengfinder' ? 'text-mainColor' : ''
            }`}
          >
            댕파인더
          </div>
        </div>
        <div className='f-fc-ic relative'>
          <ProfileIcon
            className={`fill-[#AEAEAE] w-7 h-7 ${
              location.pathname === '/mypage' ? 'fill-mainColor' : ''
            }`}
            onClick={() => handleIconClick('/mypage')}
          />
          <div
            className={`absolute bottom-1 text-xs mb-1 text-[#AEAEAE] ${
              location.pathname === '/mypage' ? 'text-mainColor' : ''
            }`}
          >
            MY
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabbar;
