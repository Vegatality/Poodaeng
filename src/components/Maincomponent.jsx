import React from "react";
import { KakaoMyPoint } from "./Kakaomypoint";

function Maincomponent() {
  const DetailMapHandler = () => {
    console.log(1);
  };

  return (
    <div className='container'>
      <div className='flex justify-between '>
        <img
          className='ml-[25px] mt-[63px] mb-[21px]'
          src='Logo.png'
          alt='PooDaeng.png'
        />
        <img
          className='mr-[22px] mt-[63px] mb-[21px]'
          src='Alert.png'
          alt='Alert.png'
        />
      </div>
      <div className='flex justify-center items-center w-[375px] h-[179px] border'>
        <div className=''>eventBox</div>
      </div>
      <div>
        <div className='ml-[23px] mt-[21px] font-[700] text-[20px] '>
          내주변푸박스찾기
        </div>
        <div className='ml-[23px] mt-[4px] font-[500] text-[11px] text-[#808080]'>
          지금 내 주변에 있는 푸박스의 위치를 확인하세요.
        </div>
        <div className='w-[330px] h-[155px] border ml-[22px]'>
          <KakaoMyPoint onClick={DetailMapHandler} />
          <div className='relative bottom-8 left-20 z-10'>button</div>
        </div>
        <div className='border mt-[39px]' />
      </div>
      <div className='mt-[25px] ml-[23px] font-[700]'>내 주변 실종신고</div>
      <div className='ml-[23px] mt-[4px] font-[500] mb-[20px] text-[11px] text-[#808080]'>
        주변의 실종 반려동물들을 찾아주세요.
      </div>
      <div className='flex gap-[10px] '>
        <div className='flex border w-[102px] h-[102px] rounded-xl ml-[23px]'>
          board card1
        </div>
        <div className='flex border w-[102px] h-[102px] rounded-xl'>
          board card2
        </div>
        <div className='flex border w-[102px] h-[102px] rounded-xl'>
          board card3
        </div>
      </div>
    </div>
  );
}

export default Maincomponent;
