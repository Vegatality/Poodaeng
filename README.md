# 프로젝트 이름

푸댕

푸댕은 서울시의 반려견 배변 시설 위치와 길 안내, 반려견의 실종 위치와 사용자들의 제보를 제공하는 서비스입니다.
![image](https://github.com/hanghae-99-real-project/front-end/assets/123563774/f5818931-6153-48c7-8645-04e331150382)
 
## 푸댕(PooDaeng) 소개 YOUTUBE ##

[![푸댕 유튜브](http://img.youtube.com/vi/qkDX3ZYx_NI/0.jpg)](https://youtu.be/8FlGsRvcaRw)


## 🔗서비스 링크 ##
https://poodaeng.vercel.app/

<br/>

## 👨‍👨‍👦 FE 팀원 👨‍👨‍👦

| Role | GitHub                                                |
| ---- | ----------------------------------------------------- |
| FE   | [조형민](https://github.com/Vegatality)                |
| FE   | [서대식](https://github.com/ringkoo)                   |

<br/>

## ⚙️ 사용한 기술 스택 ⚙️
![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white)
![TanStack Query](https://img.shields.io/badge/-TanStack%20Query-FF4154?logo=tanstack&logoColor=white)
![HTML5](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white)
![Geolocation](https://img.shields.io/badge/-Geolocation-007BFF?logo=geolocation&logoColor=white)
![Framer Motion](https://img.shields.io/badge/-Framer%20Motion-0055FF?logo=framer&logoColor=white)
![Lodash](https://img.shields.io/badge/-Lodash-0769AD?logo=lodash&logoColor=white)
![Material-UI](https://img.shields.io/badge/-Material--UI-0081CB?logo=material-ui&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/-Tailwind%20CSS-38B2AC?logo=tailwind-css&logoColor=white)
![Axios](https://img.shields.io/badge/-Axios-FF0000?logo=axios&logoColor=white)
![React Router](https://img.shields.io/badge/-React%20Router-CA4245?logo=react-router&logoColor=white)
![React Quill](https://img.shields.io/badge/-React%20Quill-0081CB?logo=react&logoColor=white)
![Swiper.js](https://img.shields.io/badge/-Swiper.js-6332F6?logo=swiper&logoColor=white)
![Zustand](https://img.shields.io/badge/-Zustand-000000?logo=zustand&logoColor=white)
![Kakao Map](https://img.shields.io/badge/-Kakao%20Map-FFCD00?logo=kakaomap&logoColor=white)
![Tmap](https://img.shields.io/badge/-Tmap-EE3D34?logo=tmap&logoColor=white)

<br>

## 📒 작업공간(S.A) 📒

![푸댕 S.A](https://github.com/hanghae-99-real-project/back-end/assets/125964794/e5472469-3da5-4f58-b913-40a43de77010)
[푸댕 S.A](https://www.notion.so/Poo-Daeng-b6a9dfbab28e4295b889bf0040ff1b21)

<br>

## 🎨 디자인 🎨

![푸댕 S.A](https://github.com/hanghae-99-real-project/back-end/assets/125964794/e5472469-3da5-4f58-b913-40a43de77010)
[푸댕 디자인](https://www.figma.com/file/pBnEtEMaoNtBYKXftbYfKW/%ED%91%B8%EB%8C%95-%EB%94%94%EC%9E%90%EC%9D%B8?type=design&node-id=0-1&mode=design&t=Ik37bQY8HltMvWNF-0)

<br>

## 🛠 Project Architecture 🛠

![KakaoTalk_20230622_174339706](https://github.com/Vegatality/Studyarea/assets/123563774/08b77e81-e566-4757-9251-3f1d7ad2da27)

<br>

## ✨ 프로젝트 기능 정리 ✨

1. 회원가입: 유저 위치 동의, 이미지 업로드, 휴대폰 번호 인증

2. 로그인, 로그아웃: Access-token과 Refresh-token을 사용한 로그인 인증, 소셜 로그인(카카오)

3. 메인화면: 푸박스 조회, 댕파인더 조회(로그인 한 유저 중 위치정보 동의한 유저는 반경 5km 내외의 댕파인더 10개 조회, 로그인 하지 않은 유저와 로그인 한 유저 중 위치정보 동의하지 않은 유저는 댕파인더 10개 랜덤 조회)

4. 마이페이지: 조회, 프로필 수정(nickname & password), 유저가 작성한 글 조회, 유저가 등록한 푸박스 조회, 유저가 등록한 북마크 조회

5. 푸박스: 등록(30m 내외에 등록한 푸박스가 있으면 푸박스 등록 X (중복 등록 막기 위해서)), 조회(KAKAO API 지도, 푸박스 정보, 푸박스 상세 정보), 푸박스 신고(5회 신고 시 푸박스 자동 삭제)

6. 푸박스 네비게이션: 등록된 푸박스로 가는 최단 루트 길찾기(주소, 최소 시간, geolocation, TMAP API)

7. 댕파인더 게시글: 반려견 실종 신고 작성, 반려견 실종 신고 최신순으로 조회, 반려견 실종 신고 유저 현위치에서 가까운 순으로 조회, 반려견 실종 신고 조회(찾았어요), 반려견 실종 신고 상세 조회, 반려견 실종 신고 수정, 반려견 실종 신고 삭제, 반려견 실종 신고 북마크(등록, 삭제), 검색, 페이지네이션

8. 댓글, 비밀 댓글: 작성, 조회, 수정, 삭제

9. 대댓글, 비밀 대댓글: 작성, 조회, 삭제

9. 알림: 생성(댓글, 대댓글), 조회, 알림 읽음 처리

<br/>

## 기여

서대식
- 알림 기능
- 이벤트
- 공통 Header, Footer
- Kakao API
  - 위도,경도를 사용하여 푸박스 등록
   - 서버에 등록된 DB를 조회하여 kakao map 에 marker 표시
  - 푸박스 상세 보기
  - 푸박스 신고
- Tmap API
  - 푸박스 길찾기
- 마이페이지
  - 프로필 수정

조형민
- 로그인
- 회원가입(번호, 소셜)
- 실종 반려견 게시글 CRUD
- 게시글 댓글&대댓글 CRUD
- 게시글 header footer
- 게시글 검색 기능
- 게시글 북마크, 클립보드
- 게시글 지도 실종위치 & 마커(Kakao API)
- 마이페이지 내가 작성한 게시글, 북마크

### 트러블 슈팅
1. 푸박스 등록 (이미지 , 위치 좌표 , 내용) 을 하는데 500, 419, 400, 에러가 뜸. 
- 원인
    - 서버에 전송하는 post 형식과 서버에서 받는 형식이 달라서 정상적으로 전송되지않음
- 해결
    - formdata는 기본적으로 form tag 안에 넣은부분만 들어가는걸 확인
    - Blob을 사용하니, 서버에서 원하는 형식이 아닌걸 서버측 테스트 로그를 보고 확인 후 form data로 모든 데이터를 전달
    - 서버쪽에서 refreshtoken을 받는 코드에서 오류가 있었음을 확인 후 수정했더니, 정상 작동함
2.  디자인된 아이콘이 깨지는 현상
- 원인
    - 하단 Foorter에서 `<img src=’image.png’>` 의 형태로 했을 때, 이미지가 커질수록 깨지는 현상이 발생함
- 해결
    - 각 이미지들을 svg 로 받아 각각 적용
    
    ```jsx
    import { ReactComponent as PooBox } from '../assets/images/Poobox.svg';
    import { ReactComponent as HomeIcon } from '../assets/images/home.svg';
    import { ReactComponent as MapIcon } from '../assets/images/Map.svg';
    import { ReactComponent as DaengIcon } from '../assets/images/daengfinder.svg';
    import { ReactComponent as ProfileIcon } from '../assets/images/myprofile.svg';
    ```
    
    - 추가적으로 hover 이벤트를 적용하여 마우스 오버 시 테두리 색상을 변경하도록 추가함
3.  네비게이션 기능 구현시 tmap api호환성 문제

- 원인 
  - Tmap API에서의 도보 길찾기 기능을 사용하기 위해 kakao API 를 모두 사용하지않고 Tmap API 만 사용하기로 함.
    그러나 Tmap API는 index.html 로만 구성되어있어, React에서 컴포넌트화하여 불러 올 수 없음
- 시도
  - html 코드를 보고 React 로 리펙토링
- 해결
  - 기존 만들어진 Kakao API의 기능들은 그대로 가져가고 Tmap API 에서는 길찾기 기능만 사용함. Tmap API 에서 제공하는 html코드중에서 <script>코드를 리펙토링하여 React component로 사용함
