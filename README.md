https://www.w3schools.com/

# 프론트 엔드 개발

## 표기법

- 사용자가 이름을 지정하는 경우
- 여러 단어를 사용해서 이름을 지정하는 경우

```
html-css : kebab case

html_css : snake case - Python

htmlCss : camel case - Javascript, JAVA, C, C++

HtmlCss : Pascal Case - Javascript, JAVA, C, C++ (Class)

Front End
- HTML( class,id ) : kebab case
- File/Folder name : snake case
- Js : Camel case
- Js - Class : Pascal Case

```

## HTML

### HTML Introduction

https://www.w3schools.com/html/html_intro.asp

> 웹페이지 구조 표시
>
> 웹페이지 콘텐츠 표시
>
> - 텍스트 콘텐츠
> - 멀티미디어 콘텐츠 : 이미지, 비디오, 오디오

`(backtick)

```
<tagname>CONTENTS</tagname>

** 시작태그만 있는 Element : Empty element
```

### HTML Element

https://www.w3schools.com/html/html_elements.asp

> 포함관계 -기준에 따라서 조상, 조상요소(Acestor), 부모요소(Parent), 자식요소(Child), 자손요소(Descendant)

```
<html>
  <body>
    <h1>Web Page</h1>
  </body>
</html>

* html : body의 부모요소, h1의 조상요소

* body : html의 자식요소, h1의 조상요소

* h1 : html의 자손요소, body의 자식요소

```

### HTML Attributes

https://www.w3schools.com/html/html_attributes.asp

### HTML Heaging

https://www.w3schools.com/html/html_headings.asp

### HTML Paragraph

https://www.w3schools.com/html/html_paragraphs.asp

### HTML Hyperlink

https://www.w3schools.com/html/html_links.asp

a : Anchor
href : Hypertext REFerence

### HTML URL

https://www.w3schools.com/tags/ref_urlencode.asp

인터넷 주소

- IP(Internet Protocol) 주소 : 192.168.9.1
- 도메인(Domain Name) 주소 : www.naver.com
- Domain -> DNS(Domain Name Server/System> -> IP

URL(Uniform Resource Lacator)

- 자세한 주소
- 도메인주소 + 해당 페이지 폴더 위치/파일 위치
- 인터넷 주소를 표현하는 가장 큰 범위
- 프로토콜 : http, https, ftp ...

### HTML File Path

https://www.w3schools.com/html/html_filepaths.asp

절대 경로

- 출발 지점에 상관없이 항상 같은 리소르를 찾을 수 잇도록 표시하는 주소/경로
- 장점 : 항상 같은 자원의 위치로 찾아올 수 있음
- 단점 : 주소 표시 길이가 길다
- Ex) 도메인주소/파일(폴더)경로 : https://www.w3schools.com/html/html_filepaths.asp

상대 경로

- 출발 지점을 기준으로 리소스 경로를 표시하는 주소/경로
- 장점 : 주소 표시 길이가 상대적으로 짧음
- 단점 : 기준에 따라서 표시 방식이 매번 달라짐
- Ex) 파일(폴더) 경로 : html/html_filepaths.asp , ... /html/html_filepaths.asp
- 루트 상대 경로 /html/html_filepaths.asp

### HTML Table

https://www.w3schools.com/html/html_tables.asp

table generator
https://www.tablesgenerator.com/html_tables

### HTML List

https://www.w3schools.com/html/html_lists.asp

중첩목록(Nested List) : 여러 수준(레벨)으로 구성된 목록

### HTML Images

https://www.w3schools.com/html/html_images.asp

alt : alternative

### HTMl Video

https://www.w3schools.com/html/html5_video.asp

### HTML Youtube

https://www.w3schools.com/html/html_youtube.asp

### HTML Semantics

https://www.w3schools.com/html/html5_semantic_elements.asp

### HTML Block & Inline

https://www.w3schools.com/html/html_blocks.asp

> 포함관계에 대한 특성
>
> - 블럭요소 : 다른 블럭요소, 인라인 요소, 콘텐츠 모두 포함 가능
> - 인라인 요소 : 다른 인라인 요소, 콘텐츠는 포함 가능, 블럭 요소는 포함 불가능
> - 예외 : a - 인라인 요소이지만 블럭요소도 포함 가능

### HTML Entities

https://www.w3schools.com/html/html_entities.asp

> HTML 마크업 용도로 Fix된 기호는 대체 코드를 사용
>
> > , <, & , " , '
> > 공백을 여러칸 띄울 때 : 대체코드를 사용
> > 브라우저 렌더링용 대체코드 : ⓒ => &copy;

### HTML ID, Class

https://www.w3schools.com/html/html_id.asp

https://www.w3schools.com/html/html_classes.asp

> id 특성
>
> - 하나의 HTML 문서 내에서 동일한 id 이름을 사용할 수 없음.
> - 하나의 HTML 문서 내에서 고유해야함

> - 하나의 HTML Element에 id이름을 여러 개 붙일 수 없음.
>   class 특성
> - 하나의 HTML 문서 내에서 동일한 class이름을 여러번 사용할 수 있음.
> - 하나의 HTMl Element에 여러가지 class이름을 붙일 수 있음.

## CSS

### CSS Introduction

https://www.w3schools.com/css/css_intro.asp

### CSS Syntax

https://www.w3schools.com/css/css_syntax.asp

### CSS Selector

https://www.w3schools.com/css/css_selectors.asp

### CSS How to

https://www.w3schools.com/css/css_howto.asp

> JS에서 CSS를 제어할 때 인라인 방식으로 제어함

### CSS Text

https://www.w3schools.com/css/css_text.asp

### CSS Font

https://www.w3schools.com/css/css_font.asp

> Web font
>
> - Google Font : https://fonts.google.com/ (영문,한글)
> - Noonnu Font : https://noonnu.cc/ (한글)

### CSS Box Model

https://www.w3schools.com/css/css_boxmodel.asp

> Box Model 구성 요소
>
> - Content(width/height)
> - padding
> - border
> - margin

### CSS width/height

https://www.w3schools.com/css/css_dimension.asp

> width/height 기본 특성
>
> - 블럭 요소 : width는 부모요소에 맞춰져서 채워짐. height는 자식요소에 맞춰짐
> - 인라인 요소 : width/height 적용되지 않음 - 레이아웃 구성용도로 사양하지 않음

> 단위
>
> - px : px 값으로 고정
> - % : 부모요소를 기준으로 특정 비율크기로 설정

### CSS Padding

https://www.w3schools.com/css/css_padding.asp

### CSS Margin

https://www.w3schools.com/css/css_margin.asp

### CSS Margin

https://www.w3schools.com/css/css_margin.asp

### CSS Border

https://www.w3schools.com/css/css_border.asp

> border 축약 표현에 방향을 표현하는 더해서 내용으로 정리

### CSS Background

https://www.w3schools.com/css/css_background.asp

\*\* CSS 상속

> 부모요소에 적용된 CSS sTyle이 자식요소에 적용되는 것
> 모든 CSS 속성이 상속되는 것은 아님

### CSS color 코드값

> CSS에서 16진수 코드값과 10진수 코드값을 사용할 수 있음
> 16진수 코드값 : #16진수숫자 6자리 (0~9,a~f)
> 10진수 코드값: RGB(10진수숫자,10진수숫자,10진수숫자)
> 10진수 코드갑 + 투명도 표시 : RGBA(10진수숫자, 10진수숫자,10진수숫자,0.0~1.0)

### CSS Flexbox

https://www.w3schools.com/css/css3_flexbox_container.asp

> 박스 배치 제어를 위한 display: flex 속성 및 배치 관련 속성을 부모요소에 적용함
> flex-direction 속성
>
> - 박스 배치 방향 제어
> - 가로배치,세로배치 모두 제어가 가능함
> - 가로배치가 기본 값

### 반응형 웹

> 반응형 웹, 적응형 웹
> OSMU(one sourcs multi use) 여부로 반응형과 적응형을 구분
> Web Front End에서의 OSMU의 기준은 HTML Source cod => Contents

### Media Query

> @media 키워드를 사용해서 break point를 설정을 하고, 그에 따른 독리된 코드 블럭을 실행할수 있게 하는 것
> break point(변경정)

```
EX> pc 해상도: 1024px ~ 1920px phone 해상도 : 320px ~ 640px

@media screen and (min-width:1024px) and (max-width:1920px){}
@media screen and (min-width:320px) and (max-width:640px){}

Ex) pc 해상도(기준) : 해상도 설정 하지 않음 / tablet 해상도 : ~900px / phone 해상도 : ~640px

body{color:red;}

@media screen and(max-width:900px){}

@media screen and (max-width:640px){}

```

\*\* 가운데 배치/정렬 방식

> 가로방향
>
> text-align :center 텍스트, 인라인요소
> margin-left, margin-right를 auto -가로길이가 정해진 블럭요소
> justify-content:center - flex 박스 배치

> 세로방향
> align-items:center - flex 박스 배치
> line-height : 텍스트

### CSS display

https://www.w3schools.com/cssref/pr_class_display.asp

### 복합(조합) 선택자

> div p : 공백 - 자손 선택자 : 자식요소, 자손요소 모두 선택
> div>p : > - 자식 선택자 : 자식요소만 선택

### 가상 클래스

> Element의 상태 구분
>
> - a:link
> - aLvisited
> - a:Lhover
> - a:active

> Elemnet의 특정 요소를 선택
>
> - .list-item:first-child(첫번째 요소 선택), .list-item:last-child(마지막 요소 선택)
