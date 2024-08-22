# 👗​[Project] AI기반 의류 추천 웹서비스
> [부산대학교 K-Digital Trainig] AI활용 빅데이터분석 풀스택웹서비스 SW 개발자 양성과정  
> 수강중 진행한 프로젝트 #2
<br>

<img src="https://github.com/user-attachments/assets/81267ceb-8b4a-44f8-865f-8150e4bda45f">
<br>

### 시연 영상

1. [Customer Service](https://youtu.be/LfMOa0B2ZWQ)
2. [Business Service](https://youtu.be/-W8icGMYjyM)
---
<br>

## 목차
1. [프로젝트 소개](#1-프로젝트-소개)
2. [팀구성 및 기술스택](#2-팀구성-및-기술스택)
3. [프로젝트 주요 요구사항](#3-프로젝트-주요-요구사항)
4. [화면 설계서](#4-화면-설계서)
5. [Front-end 구현 내용](#5-front-end-구현-내용)
6. [UI 애니메이션 구현 영상](#6-ui-애니메이션-구현-영상)
7. [프로젝트 회고](#7-프로젝트-회고)
<br>

## 1. 프로젝트 소개
- 프로젝트 이름 : AI기반 의류 추천 웹서비스
- 개발기간 : 2024.07.01 ~ 2024.07.25
- 개발목적 :  
  > AI기반 의류 추천 서비스를 제공함으로써 사용자들이 원하는 스타일의 의류를 쉽게 찾을 수 있도록 도와줍니다.   
  > 기업고객과 일반고객을 대상으로 하는 2가지 서비스를 제공합니다.  
  - Business Service : 이 서비스는 단순히 상품을 추천하는 것에 그치지 않고, 기업 고객이 최신 트렌드와 소비자 선호도를 분석할 수 있도록 지원합니다. 추천 시스템을 통해 소비자들이 어떤 스타일을 선호하는지, 어떤 상품이 트렌드에 부합하는지에 대한 유용한 인사이트를 제공합니다. 이를 통해 기업은 신속하게 적합한 상품을 발굴하고, 마케팅 전략을 최적화할 수 있습니다.
  - Customer Service : 또한, 이 모델은 일반 소비자들도 사용할 수 있도록 하여, 자신의 의류 이미지와 유사한 상품을 쉽게 찾아낼 수 있는 개인화된 쇼핑 경험을 제공합니다. 이로써 소비자들이 시간과 노력을 절약하면서도 자신에게 가장 잘 맞는 패션 아이템을 발견할 수 있도록 돕습니다.
- 프로젝트 주제 제공 기업 : 부산대학교 K-Digital Training 과정과 연계된 기업(Nine Ounce)의 데이터를 받고 요구사항을 반영하여 개발진행
- 활용 데이터 : K-Fashion Dataset, Nine Ounce Product Dataset, 인터넷 쇼핑몰 크롤링 Dataset
- **핵심 아이디어 : 인지도 높은 인터넷 의류 쇼핑몰을 크롤링한 데이터셋을 딥러닝을 활용해 학습시키고 고객이 의류 이미지를 입력하면 학습된 모델에서 분석하여 가장 유사한 벡터값을 가지는 상품을 추천해주는 서비스**
<br>

## 2. 팀구성 및 기술스택
- #### 팀명 : ModaMatch
- #### Front-end
> **장민우**(본인)  
> 역할 : UX/UI 디자인, 화면 레이아웃 설계, 페이지별 컴포넌트 제작

> **기술스택**  
> ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
> ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=black)
> ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black)
> ![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white)

- #### Back-end
> **채수철, 김보성**[(GITHUB Link)](https://github.com/kingboseong/k-fashion-project)  
> 역할 : 데이터베이스 설계, REST API 구축, 비즈니스 로직 구현

> **기술스택**  
> ![SpringBoot](https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=black)
> ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=black)
> ![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=black)

- #### Data Analysis
> **신건영**[(GITHUB Link)](https://github.com/LinkDiscovery/ModaMatch-fashion_recommendation_system_project-)  
> 역할 : 데이터 수집 및 전처리, 모델 개발, 프로젝트 일정관리

> **기술스택**  
> ![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white)
> ![PyTorch](https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white)
> ![ResNet-50](https://img.shields.io/badge/ResNet50-3C2179?style=for-the-badge)
> ![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
<br>

## 3. 프로젝트 주요 요구사항
<div align="center">
  
![image](https://github.com/user-attachments/assets/88483753-2aa7-4334-9f50-e41acc537ed5)
</div>
<br>

## 4. 화면 설계서
<div align="center">
  
![image](https://github.com/user-attachments/assets/2cdfca4c-aad6-4cd9-922d-0c2e20685381)

![image](https://github.com/user-attachments/assets/b5894cb9-6ef8-48a5-ad1c-7680cc00d5d7)

![image](https://github.com/user-attachments/assets/f9e3fe49-8d67-469e-aae3-bc254cb6d2d4)

![image](https://github.com/user-attachments/assets/e95b0dfa-756a-46f1-8e9a-06b90931af7d)

![image](https://github.com/user-attachments/assets/fe15a1ce-ee72-4f6b-b81f-f1714a1875b5)

![image](https://github.com/user-attachments/assets/1a851e6e-5b30-4938-a1ce-46a59b198c61)

</div>
<br>

## 5. Front-end 구현 내용
### 📌 라우팅 관리
  - root.js 생성 후 RouterProvider, CreateBrowserRouter (React Router v.6.4 이상)를 사용하여 직관적이고 계층적인 라우팅 관리 구현
  - Suspense fallback, Lazy()를 사용하여 페이지 로딩시간 단축 및 로딩상태 표현
### 📌 페이지 관리
  - MainLayout.js 생성 후 Header, Footer를 넣고 Main이 들어갈 자리에  children(props)을 삽입하는 Layout Component Pattern을 사용하여 유지보수 용이 및 코드 재사용성 증가
### 📌 컴포넌트 관리
  -	기능별, 페이지별 컴포넌트를 계층적으로 구조화하여 코드 가독성 향상
  -	컴포넌트 간 반복되는 로직이나 상태관리를 커스텀 훅으로 추출하여 사용하여 코드 재사용성 증가 및 컴포넌트 간결화 유지
### 📌 로그인 상태 관리
  - Redux를 활용하여 로그인 정보를 전역 상태로 관리
  - React-Cookie를 활용하여 사용자 로그인 시 Access Token과 Refresh Token을 cookie에 저장
  - Axios interceptor로 만료된 access token으로 API 요청 시 자동갱신 하도록 구현
### 📌 시각화 및 외부 라이브러리 사용
  -	Framer Motion : 웹페이지에서 텍스트 및 태그요소에 애니메이션 효과 구현
  -	Tailwind.config.js 커스터마이징으로 웹페이지 상호작용시 애니메이션 효과 구현
  -	Swiper : 이미지 카드를 grid 대신 carousel로 표현하여 UX 향상
  -	Nivo-pie Chart : 출력 데이터를 원형차트로 시각화하여 UX 향상
  -	Dropzone : 파일을 브라우저에 Drag&Drop 할 수 있도록 구현
<br>

## 6. UI 애니메이션 구현 영상
<div align="center">

| Main Page Animation |
| :---: |
| ![Animation_MainPage](https://github.com/user-attachments/assets/7c0a1f30-42a8-41e3-9646-1bff78a066c1) |
<br>

| Customer Service Page(Drag&Drop) Animation |
| :---: |
| ![Animation_ServicePage](https://github.com/user-attachments/assets/a98096b8-edad-418a-b4b6-b8986783e8d0) |
<br>

| Customer Service Page(Select Sample) Animation |
| :---: |
| ![Animation_ServicePage2](https://github.com/user-attachments/assets/f20ac9f1-948d-4ed0-b526-e08b178f4b5f) |
<br>

| Login Page Button Animation |
| :---: |
| ![Animation_LoginPage](https://github.com/user-attachments/assets/c82c300f-8151-4efb-b2c8-1b40e804e675) |
<br>

| Signup Page Button Animation |
| :---: |
| ![Animation_SignupPage](https://github.com/user-attachments/assets/44fc3f54-099f-488a-93fb-769a5b805284) |

</div>
<br>

## 7. 프로젝트 회고

- 배운점
  - 디자인 패턴
    Layout Component Pattern을 사용하면서 컴포넌트를 개별적으로 관리하고 구성할 수 있었으며, 컴포넌트들이 독립적으로 작동하여 재사용성과 유지보수성이 향상 되는 것을 알게 되었다.
  - 라우틸
    RouterProvider를 알게 되었고 App.js 에서 라우팅을 나열하는 것이 아닌, 따로 컴포넌트를 만들어서 계층적으로 라우트를 관리할 수 있어서 프로젝트 도중 수정작업을 수월하게 할 수 있었다.
  - 애니메이션
    화면을 꾸미는데 있어서 공을 좀 많이 들였고, 그만큼 시간도 많이 소요되었던 작업이다. Framer Motion 같은 라이브러리도 사용할 수 있었고, tailwind.config.js 를 커스터마이징 하는 방법도 익힐 수 있었다.
    
- 아쉬운점
  - 시간 분배
    첫 번째 프로젝트와 달리 이번 프로젝트에서는 Front-end를 맡게 되었는데 2개월전 배웠던 React를 다시 기억해내느라 많은 시간이 소요되었다. 게다가 작은 컴포넌트 들을 꾸미는 작업에 많은 시간을 소요하면서(그만큼 재미가 있어서..)
    정작 계획했었던 페이지들(About Page, My Page 등)을 완벽하게 구현하지 못했다. 페이지 구성의 큰 틀을 먼저 잡고 기능들을 먼저 구현한 다음 꾸미는 것은 마지막에 하는 것으로 우선순위를 잡아야 겠다고 생각했다.
  - 튜토리얼 기능
    위 시간 분배와 맞물리는 이유 때문에 원래 계획했었던 튜토리얼 기능을 구현하지 못했다. 처음 서비스를 시작하는 유저에게 첫 화면에서 각 서비스 들에 대한 설명을 모달창으로 구현할 계획이었는데 하지 못해서 아쉬웠다.
    추후 다른 프로젝트 진행시 구현해 볼 계획이다.
    
- 총평  
  첫 번째 프로젝트에서는 Back-end, 이번 프로젝트에서는 Front-end 역할을 맡았다. 교육과정 중 배운것들을 다 구현해보겠다는 마음가짐으로 프로젝트를 진행했고, 교육과정의 제목 처럼 풀스택 웹개발에 대해서 얕게 찍먹해본 느낌이다.
  프로젝트 진행하기 전과 후의 내가 가지고 있는 풀스택 웹개발에 대한 이해도는 많이 달라졌겠지만 이제 출발선상에 올라간 느낌이다.(아직 아닐지도..) 계속해서 정진하자.
    

