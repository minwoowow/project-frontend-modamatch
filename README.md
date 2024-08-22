# 👗​[Project] AI기반 의류 추천 웹서비스
> [부산대학교 K-Digital Trainig] AI활용 빅데이터분석 풀스택웹서비스 SW 개발자 양성과정  
> 수강중 진행한 프로젝트
<br>

### 시연영상

<a href="#"><img src="https://github.com/user-attachments/assets/81267ceb-8b4a-44f8-865f-8150e4bda45f"></a>
<br>

## 목차
1. 프로젝트 소개
2. 팀구성 및 기술스택
3. 구현 기능
4. 화면 설계서
5. REST API 명세
6. ERD 명세

<br>

### 1. 프로젝트 소개
- 프로젝트 이름 : AI기반 의류 추천 웹서비스
- 개발기간 : 2024.07.01 ~ 2024.07.25
- 개발목적 :  
  > AI기반 의류 추천 서비스를 제공함으로써 사용자들이 원하는 스타일의 의류를 쉽게 찾을 수 있도록 도와줍니다.   
  > 기업고객과 일반고객을 대상으로 하는 2가지 서비스를 제공합니다.  
  - Business Service : 이 서비스는 단순히 상품을 추천하는 것에 그치지 않고, 기업 고객이 최신 트렌드와 소비자 선호도를 분석할 수 있도록 지원합니다. 추천 시스템을 통해 소비자들이 어떤 스타일을 선호하는지, 어떤 상품이 트렌드에 부합하는지에 대한 유용한 인사이트를 제공합니다. 이를 통해 기업은 신속하게 적합한 상품을 발굴하고, 마케팅 전략을 최적화할 수 있습니다.
  - Customer Service : 또한, 이 모델은 일반 소비자들도 사용할 수 있도록 하여, 자신의 의류 이미지와 유사한 상품을 쉽게 찾아낼 수 있는 개인화된 쇼핑 경험을 제공합니다. 이로써 소비자들이 시간과 노력을 절약하면서도 자신에게 가장 잘 맞는 패션 아이템을 발견할 수 있도록 돕습니다.
  - **핵심 아이디어 : 유저가 의류 이미지를 입력하면 인지도 높은 인터넷 의류 쇼핑몰에서 크롤링한 방대한 상품 데이터셋을 학습한 모델에서 이미지 분석을 한 후 유사도가 높은 상품 10개를 화면에 출력**
<br>

### 2. 팀구성 및 기술스택
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

### 3. 프로젝트 주요 요구사항
<div align="center">
  
![image](https://github.com/user-attachments/assets/88483753-2aa7-4334-9f50-e41acc537ed5)
</div>
