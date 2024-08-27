## 프로젝트

포켓몬 도감 만들기

## 프로젝트 주소

[포켓몬 도감 바로가기](https://pokemon-dex-virid.vercel.app/)

## 프로젝트 소개

포켓몬 리스트와 나만의 포켓몬을 지정할 수 있는 어플리케이션

**랜딩 페이지**
![image11](https://github.com/user-attachments/assets/0ec182c0-27dc-4cdb-9a30-fa81d941e194)

**메인 페이지**
![캡처](https://github.com/user-attachments/assets/09a30c6f-2aa1-4530-b4d1-3f74774df229)
![localhost_5173_dex](https://github.com/user-attachments/assets/e0b1d69b-33f6-4287-8fb4-e75f7c250af6)

## 개발기간

2024.08.21~ 2024.08.28

## 기술스택

<div style="display: flex; gap: 10px;">
  <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=white"/>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/>
  <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=flat-square&logo=styledcomponents&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
  <img src="https://img.shields.io/badge/redux-764ABC?style=flat-square&logo=redux&logoColor=white"/>
  <img src="https://img.shields.io/badge/reduxToolkit-999999?style=flat-square&logo=reduxsaga&logoColor=white"/>
  <img src="https://img.shields.io/badge/reactrouter-CA4245?style=flat-square&logo=reactrouter&logoColor=white"/>

</div>

## 폴더구조

```

pokemonDex                                           //
├─ public                                            //
│  └─ icon                                           //
│     └─ favicon.ico                                 //
├─ src                                               //
│  ├─ assets                                         //
│  │  └─ img                                         //
│  │     ├─ ball.png                                 //
│  │     ├─ bg.jpeg                                  //
│  │     ├─ deleteBall.png                           //
│  │     ├─ logo.png                                 //
│  │     └─ pikachu.png                              //
│  ├─ components                                     //
│  │  ├─ dashboard                                   //
│  │  │  └─Dashboard.jsx                             //
│  │  ├─ pokemonCard                                 //
│  │  │  └─PokemonCard.jsx                           //
│  │  ├─ pokemonDetail                               //
│  │  │  └─PokemonDetail.jsx                         //
│  │  └─ pokemonList                                 //
│  │     └─PokemonList.jsx                           //
│  ├─ data                                           //
│  │  └─ mock.js                                     //
│  ├─ pages                                          //
│  │  ├─ dex                                         //
│  │  │  └─ Dex.jsx                                  //
│  │  ├─ home                                        //
│  │  │  └─Home.jsx                                  //
│  │  └─ pokemonApi                                  //
│  │     └─ API.bak                                  //
│  ├─ redux                                          //
│  │  ├─ config                                      //
│  │  │  └─ configStore.js                           //
│  │  ├─ modules                                     //
│  │  │  └─ pokemonReducer.js                        //
│  │  └─ slices                                      //
│  │     └─ pokemonSlice.js                          //
│  ├─ shared                                         //
│  │  ├─ layout                                      //
│  │  │  └─Layout.jsx                                //
│  │  ├─ outlet                                      //
│  │  │  └─WrapOutlet.jsx                            //
│  │  └─router                                       //
│  │    └─ Router.jsx                                //
│  ├─ styles                                         //
│  │  ├─ CommonStyle.js                              //
│  │  ├─LayoutStyle.js                               //
│  │  └─ reset.css                                   //
│  ├─  App.jsx                                       //
│  └─ index.jsx                                      //
├─ .env                                              //
├─ .gitignore                                        //
├─ eslint.config.js                                  //
├─ index.html                                        //
├─ package.json                                      //
├─ README.md                                         //
├─ vite.config.js                                    //
└─ yarn.lock                                         //

```

## 필수기능

- [x] Git 브랜치 전략 사용하기
- [x] 페이지 라우팅 구현하기<br/><br/>
- [x] 도감 페이지
- [x] Dashboard, PokemonList, PokemonCard로 컴포넌트를 구분
- [x] 포켓몬 리스트가 표시되고, 각 포켓몬 카드는 '추가' 버튼페이지 라우팅 구현하기
- [x] 선택된 포켓몬이 대시보드에 표시되며, 이 포켓몬들은 '삭제' 버튼 구현
- [x] 최대 6개의 포켓몬만 선택
- [x] 포켓몬 카드를 클릭하면 해당 포켓몬의 디테일 페이지로 이동
- [x] 디테일 페이지 <br/><br/>
- [x] queryString으로 포켓몬 ID를 받아 해당 포켓몬의 상세 정보를 표시
- [x] "뒤로 가기" 버튼을 통해 이전 페이지로 돌아갈 수 있도록 구현<br/><br/>
- [x] 알림 기능 구현
- [x] 포켓몬을 선택할 때 이미 선택된 포켓몬이라면 alert 메시지를 띄우고, 선택된 포켓몬이 6개가 되면 더 이상 선택할 수 없도록 alert 메시지<br/><br/>
- [x] 스타일링
- [x] styled-components를 사용하여 포켓몬 카드와 대시보드를 스타일링

## 도전기능

- [x] Redux Toolkit으로 리팩터링하기
- [x] 디테일 페이지에 '추가' 버튼 추가하기
- [x] 리스트 페이지의 데이터를 유지시키기(react-router-dom 의 심화사용)
- [ ] UI 라이브러리 활용하기
- [ ] alert 대신 Modal 또는 toast와 같은 UI 요소를 사용하여 피드백을 제공
  - 예시1) [https://www.npmjs.com/package/react-toastify](https://www.npmjs.com/package/react-toastify)
  - 예시2) [https://sweetalert2.github.io/](https://sweetalert2.github.io/)
  - 예시3) [https://sonner.emilkowal.ski/](https://sonner.emilkowal.ski/)

## 질문/답변

1.  **Props drilling**이란 무엇인가요?<br>
    리액트에서 상태나 데이터를 컴포넌트 트리의 깊숙한 하위 컴포넌트로 전달하기 위해, 여러 컴포넌트 계층을 거쳐 props를 전달하는 과정
2.  **Context API**를 사용하여 props drilling을 어떻게 해결할 수 있었나요?<br>
    트리 구조의 상위에서 데이터를 사용하여, 하위 컴포넌트에서 필요한 데이터를 직접 가져와 사용. 중간 컴포넌트들이 불필요하게 데이터를 거치지 않고 데이터를 비교적 자유롭게 사용 함
3.  이 과제에서 **컴포넌트 구조를 어떻게 구성**했나요? 그 이유는 무엇인가요?<br>

    - components : dashboard, pokemonCard, pokemonDetail, pokemonList등 포켓몬에 대한 정보를 필요로하는 파일들을 컴포넌츠 폴더에 구성 <br>
    - data : mock.js등 데이터를 가공해야할 원본이 있는 부분을 폴더에 구성 <br>
    - pages : 메인 들어가기 페이지와 랜딩 첫 화면 페이지를 해당 폴더에 구성<br>
    - redux : 상태관리를 위한 폴더를 따로 구성 <br>
    - shared : 공통 레이아웃과 react-router-dom에 관한 파일들을 해당 폴더에 구성<br>
    - styles : css, styled-components를 해당 파일에 구성 <br>

    따로 분리를 하려다 보니 이런식으로 흘러가게 되었는데 다음에는 DB나 이미지 같은 부분들은 public폴더에 따로 분리하고, 컴포넌트에 페이지와 하위 페이지의 구성을 나누어서 따로 폴더를 분리하는 게 좋을 것 같다. 폴더의 가지수가 많아지니 가독성도 떨어지고 찾는 것도 오히려 힘들다.

4.  **컴포넌트 분리**가 코드의 가독성과 재사용성에 어떤 이점을 제공했나요?<br>
    반복 코드를 쉽게 삭제하고 수정할 수 있었으며, 필요한 부분만 독립적으로 수정하기 좋았다.

## 추가예정

- 트러블슈팅 부분
- 리팩토링 과정
- 영상 올리기
- UI 라이브러리 활용
