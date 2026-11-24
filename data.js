// 취향 갤러리 데이터 — 학생이 고치는 곳은 이 파일 하나입니다.
// 카드는 7장(4 · 5 · 6 · 7 · 9 · 10 · 11주). week 숫자는 바꾸지 않습니다(서브 페이지 파일 이름과 같습니다).
// author는 한글 이름, authorEn은 영문 이름입니다. 화면 왼쪽 위에 "영문이름 Archive"로 나옵니다.
// name은 한 단어, nameEn은 그 영문입니다(카드 아래 영문 라벨). object는 오브젝트 이름이고 objects 폴더의 hairline-이름.html 중 이름 부분을 쓰면 바뀝니다.
// color는 오브젝트의 선 색입니다. {"hi": "#2f6fd6", "edge": "#7a9ccf"}처럼 # 색 코드로 씁니다(hi 강조선 · edge 윤곽선 · mid 기본선 · lo 흐린선 · stroke 선 굵기 0.5~2.5). 비워 두면 기본 색입니다.
// 메모(note)에는 위의 내용 · 의도 · 기준에 없는 새 사실을 한 가지 적습니다(물건 이름, 곡 하나, 고르다 뺀 것 등). 같은 말을 다시 쓰면 글이 비어 보입니다.
// archive는 서브 페이지에 보관하는 그 주의 작업입니다. itemsLabel(모은 것의 이름) · items(모은 것: title 제목 · meta 곁글 · text 한 줄 · src 이미지) · open(열어 볼 페이지: label · href). 서브 페이지에는 items가 사진 한 장 + 제목 · 설명으로 넘어가는 화면으로 나옵니다. 이미지는 images 폴더에, 열어 볼 페이지는 작품 폴더에 복사해 두고 그 경로를 씁니다.
// embed(선택)는 열어 볼 페이지를 서브 페이지 화면 안에 그대로 넣는 값입니다: "embed": {"src": "작품/10주/레코드/index.html", "title": "10주 내 음악 페이지"}. 내 페이지가 화면 안에서 어색하면 embed를 지우고 open만 씁니다.
// 쉼표 · 따옴표 · 괄호가 하나라도 빠지면 화면이 비고 빨간 문구가 나옵니다. 그럴 땐 data_첫판.js와 비교하세요.
window.GALLERY = {
  "author": "한시연",
  "authorEn": "hansiyeon",
  "definition": "저는 빠르게 지나가는 것들을\n천천히 붙잡아 두는 디자이너입니다.",
  "cards": [
    {
      "week": 4,
      "name": "시선",
      "nameEn": "Gaze",
      "object": "tiles",
      "color": {},
      "what": "하늘 · 손 · 길 사진을 다섯 장씩 골라 15장으로 '나의 시선 아카이브' 사이트를 만들었다.",
      "why": "눈길이 닿는 자리의 타일이 뒤집혀 숨은 뒷면의 점을 보여 준다.",
      "line": "늘 보던 것을 한 번 더 보게 되는 순간",
      "note": "사이트 첫 화면 문구는 \"Unfamiliar Familiar\"였다.",
      "archive": {
        "itemsLabel": "사진 묶음 3개 · 사진 15장",
        "items": [
          {
            "title": "하늘",
            "meta": "묶음 1 · 사진 5장",
            "text": "색과 구름의 결이 매번 달라서 골랐다.",
            "src": "images/w04_sky.jpg"
          },
          {
            "title": "손",
            "meta": "묶음 2 · 사진 5장",
            "text": "말보다 손이 더 많은 걸 보여줘서 골랐다.",
            "src": "images/w04_hands.jpg"
          },
          {
            "title": "길",
            "meta": "묶음 3 · 사진 5장",
            "text": "어딘가로 향하는 느낌이 좋아서 골랐다.",
            "src": "images/w04_road.jpg"
          }
        ],
        "open": [
          {
            "label": "4주 시선 사이트 열기",
            "href": "작품/04주/site/index.html"
          }
        ]
      }
    },
    {
      "week": 5,
      "name": "반짝임",
      "nameEn": "People",
      "object": "heads",
      "color": {},
      "what": "키키 하음을 좋아하는 이유 세 가지(고양이상 비주얼 · 컨셉 소화력 · 강렬한 퍼포먼스)를 근거와 함께 사이트로 만들었다.",
      "why": "하음의 강렬한 퍼포먼스를 무대 조명으로 옮겼다. 다섯 대의 조명이 한 사람을 향해 차례로 고개를 돌린다.",
      "line": "유니크하게 자기 색을 드러내는 사람",
      "note": "무대에서 가장 눈이 간 건 다양한 표정연기와 시원시원한 춤선이었다.",
      "archive": {
        "itemsLabel": "하음을 좋아하는 이유 3가지 · 이유 카드",
        "items": [
          {
            "title": "고양이상 비주얼",
            "meta": "본 것 · 위로 올라간 눈매, 얼굴상",
            "text": "고양이를 떠올리게 해서 / 유니크하고 예뻐서",
            "src": "images/w05_card1.png"
          },
          {
            "title": "컨셉 소화력",
            "meta": "본 것 · 키키 공식 앨범 티저 사진",
            "text": "다양한 컨셉을 잘 소화해서",
            "src": "images/w05_card2.png"
          },
          {
            "title": "강렬한 퍼포먼스",
            "meta": "본 것 · 무대 위에서 표정연기가 다양함",
            "text": "시원시원한 춤선이 돋보여서",
            "src": "images/w05_card3.png"
          }
        ],
        "open": []
      }
    },
    {
      "week": 6,
      "name": "머묾",
      "nameEn": "Stay",
      "object": "foldmap",
      "color": {},
      "what": "lake · library · subway, 머물고 싶은 공간 세 곳의 사진 15장으로 취향 아카이브를 시작했다.",
      "why": "머물고 싶은 세 곳, 호수 · 도서관 · 지하철을 접힌 지도 세 칸에 담았다. 짚은 곳의 칸이 들리고 핀이 솟는다.",
      "line": "혼자 조용히 생각에 잠길 수 있는 곳",
      "note": "반대로 싫은 곳은 시끄럽고 사람 많은 곳이다.",
      "archive": {
        "itemsLabel": "머물고 싶은 공간 3곳 · 직접 찍은 사진",
        "items": [
          {
            "title": "lake",
            "meta": "산책 · 생각이 많아질 때",
            "text": "고요하고 편안해서 머물고 싶다.",
            "src": "images/w06_lake.jpg"
          },
          {
            "title": "library",
            "meta": "독서 · 집중하고 싶을 때",
            "text": "조용하고 집중이 잘 돼서 머물고 싶다.",
            "src": "images/w06_library.jpg"
          },
          {
            "title": "subway",
            "meta": "이동 · 노래 들으면서 이동할 때",
            "text": "이동하기 편리해서 머물고 싶다.",
            "src": "images/w06_subway.jpg"
          }
        ],
        "open": [
          {
            "label": "6주 취향 아카이브 열기",
            "href": "https://siyeon9-taste-archive-w06.netlify.app"
          }
        ]
      }
    },
    {
      "week": 7,
      "name": "편리",
      "nameEn": "Ease",
      "object": "tilt",
      "color": {},
      "what": "노트북 · 애플워치 · 카메라 · 노트와 펜 · 선글라스, 매일 고르는 물건 다섯 개를 더해 아카이브를 처음 공개했다.",
      "why": "자꾸 찾게 되는 물건들은 손이 가는 쪽으로 기울면 그쪽으로 모여든다. 편리함을 '내 쪽으로 오는 물건'으로 그렸다.",
      "line": "자꾸 찾게 되는 편리함",
      "note": "핸드크림은 향이 좋고 끈적거리지 않아서 계속 고른다.",
      "archive": {
        "itemsLabel": "매일 고르는 물건 5개",
        "items": [
          {
            "title": "노트북",
            "meta": "과제하고 작업할 때",
            "text": "과제도 작업도 다 이 안에서 하는, 하루 중 가장 오래 펼쳐 두는 물건이라서",
            "src": "images/w07_01.png"
          },
          {
            "title": "애플워치",
            "meta": "시간을 보거나 연락을 간단히 확인할 때",
            "text": "휴대폰이랑 연동이 가능해 편리해서",
            "src": "images/w07_02.png"
          },
          {
            "title": "카메라",
            "meta": "평범한 하루에서 한 번 더 보고 싶은 순간이 생길 때",
            "text": "디카 특유의 감성이 좋아서",
            "src": "images/w07_03.png"
          },
          {
            "title": "노트와 펜",
            "meta": "떠오른 생각이나 마음에 남은 말을 적어 두고 싶을 때",
            "text": "손바닥만 한 크기라 어디든 넣고 다니기 편해서",
            "src": "images/w07_04.png"
          },
          {
            "title": "선글라스",
            "meta": "친구랑 놀러 갈 때",
            "text": "친구랑 같이 산 거라 가볍게 맞춰 쓰기 좋고 재밌어서",
            "src": "images/w07_05.png"
          }
        ],
        "open": [
          {
            "label": "7주 취향 아카이브 열기 (배포)",
            "href": "https://siyeon9-taste-archive.netlify.app"
          }
        ]
      }
    },
    {
      "week": 9,
      "name": "유영",
      "nameEn": "Drift",
      "object": "typewriter",
      "color": {},
      "what": "마음에 남은 말 다섯 개를 피그마로 타이포 이미지 다섯 장과 책으로 만들었다.",
      "why": "마음에 남은 말 다섯 개를 타자기로 옮겼다. 자판을 짚을 때마다 종이에 한 자씩 찍혀 한 줄씩 올라간다.",
      "line": "가장 중요한 말 앞에는 넉넉한 여백을 둔다",
      "note": "글자보다 빈 공간이 말을 더 많이 한다는 걸 이 주에 알았다.",
      "archive": {
        "itemsLabel": "아끼는 말 5개 · 타이포 이미지",
        "items": [
          {
            "title": "그래 넌 두 눈으로 꼭 봐야만 믿잖아 기꺼이 함께 가주지",
            "meta": "01 · 잔나비, 「외딴섬 로맨틱」",
            "text": "작게 떨어진 말들과 크게 강조한 말로 '외딴섬'과 '로맨틱'의 대비를 표현했다.",
            "src": "images/w09_01.png"
          },
          {
            "title": "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아간다.",
            "meta": "02",
            "text": "작게 시작한 문장이 세로선을 지나 '닮아간다.'에서 커지도록 하여, 꿈에 가까워지는 과정을 표현하였다.",
            "src": "images/w09_02.png"
          },
          {
            "title": "유영",
            "meta": "03 · 단어",
            "text": "두 한자 사이의 빈 공간을 물로 삼아, 그 안을 떠다니는 '유영'을 표현했다.",
            "src": "images/w09_03.png"
          },
          {
            "title": "인생은 너무나 남루한 것이어서 …",
            "meta": "04 · 방송인 이금희",
            "text": "여백을 사이에 두고 마지막 줄을 굵게 내려, 소소한 순간이 없다면 남는 무게를 표현했다.",
            "src": "images/w09_04.png"
          },
          {
            "title": "그 어떤 아름다운 꽃들도 다 흔들리며 피었나니",
            "meta": "05 · 도종환, 「흔들리며 피는 꽃」",
            "text": "'다' 뒤에 짧은 선을 그어 쉼을 주고, 흔들림 끝에 피어나는 시간을 표현했다.",
            "src": "images/w09_05.png"
          }
        ],
        "open": [
          {
            "label": "9주 말 책 열기",
            "href": "작품/09주/책/index.html"
          }
        ]
      }
    },
    {
      "week": 10,
      "name": "하루",
      "nameEn": "Day",
      "object": "faders",
      "color": {},
      "what": "눈 뜰 때부터 잠들기 전까지 내 하루를 채우는 다섯 곡으로 레코드 페이지를 만들었다.",
      "why": "하루를 채우는 다섯 곡을 믹서의 다섯 채널로 그렸다. 손이 지나가는 곳의 페이더가 물결처럼 올라간다.",
      "line": "그 시간의 기분을 편안하게 바꿔 주는 곡",
      "note": "하루의 첫 곡은 잔나비의 「아윌다이포유♥x3」이다.",
      "archive": {
        "embed": {
          "src": "objects/hairline-clock.html",
          "title": "10주 하루를 채우는 다섯 곡 · 전자시계"
        },
        "itemsLabel": "하루를 채우는 다섯 곡",
        "items": [
          {
            "title": "아윌다이포유♥x3",
            "meta": "01 · 잔나비 · 눈 뜨고 하루를 시작할 때",
            "text": "곡의 분위기가 밝아서 들으면 기분 좋게 아침을 맞이합니다."
          },
          {
            "title": "sunny days",
            "meta": "02 · wave to earth · 집을 나서고 이동할 때",
            "text": "음악으로도 맑은 날씨가 느껴져서 이동길의 설렘이 느껴집니다."
          },
          {
            "title": "UNDERCOVER",
            "meta": "03 · OSUN · 하루 중 언제든",
            "text": "사운드가 좋아서, 잠시 쉬고 싶을 때 멍 때리며 듣기 좋습니다."
          },
          {
            "title": "Last Night on Earth",
            "meta": "04 · Green Day · 집으로 돌아가는 길",
            "text": "차분하고 서정적인 분위기의 노래로, 들으면 위로가 됩니다."
          },
          {
            "title": "Cheapest Flight",
            "meta": "05 · PREP · 잠들기 전",
            "text": "독특한 사운드와 곡의 분위기가 기분을 편안하게 만들어 줍니다."
          }
        ],
        "open": [
          {
            "label": "10주 레코드 페이지 열기",
            "href": "작품/10주/레코드/index.html"
          }
        ]
      }
    },
    {
      "week": 11,
      "name": "장면",
      "nameEn": "Scene",
      "object": "praxinoscope",
      "color": {},
      "what": "음악 영화 다섯 편의 장면 배색을 뽑아 배색 카드 다섯 장과 극장 페이지를 만들었다.",
      "why": "그림 열두 장이 이어져 한 장면이 되는 프락시노스코프로 그렸다. 올리면 원통이 돌고, 가운데 거울 기둥에 비친 점이 움직이는 장면이 된다.",
      "line": "차분한 바탕 위, 결정적인 순간의 작은 빨강",
      "note": "다섯 편 중 세 편에서 가장 영화다운 색이 1% 안팎의 작은 빨강이었다.",
      "archive": {
        "itemsLabel": "음악 영화 5편 · 배색 카드",
        "items": [
          {
            "title": "A Star Is Born",
            "meta": "01 · Bradley Cooper, 2018 · #502C29",
            "text": "짙은 적갈색이 두 사람의 마지막 행복을 따뜻하고 아늑한 온도로 붙잡아 둔다.",
            "src": "images/w11_01.png"
          },
          {
            "title": "Bohemian Rhapsody",
            "meta": "02 · Bryan Singer, 2018 · #88120F",
            "text": "빛바랜 런던 거리의 갈색 톤 속에서 홀로 타오르는 짙은 빨강.",
            "src": "images/w11_02.png"
          },
          {
            "title": "Begin Again",
            "meta": "03 · John Carney, 2014 · #943238",
            "text": "회색빛 뉴욕의 밤 속 원피스의 장밋빛이, 음악을 나눠 듣는 순간 도시를 따뜻하게 한다.",
            "src": "images/w11_03.png"
          },
          {
            "title": "The Sound of Music",
            "meta": "04 · Robert Wise, 1965 · #788525",
            "text": "햇살 아래 알프스 언덕의 올리브 초록이 처음 함께 노래하는 순간을 밝은 무대로 만든다.",
            "src": "images/w11_04.png"
          },
          {
            "title": "Sing Street",
            "meta": "05 · John Carney, 2016 · #B52220",
            "text": "빛바랜 회색 골목 속 빨간 기타가 처음으로 자기 목소리를 내는 순간을 새긴다.",
            "src": "images/w11_05.png"
          }
        ],
        "open": [
          {
            "label": "11주 극장 페이지 열기",
            "href": "작품/11주/극장/index.html"
          }
        ],
        "embed": {
          "src": "작품/11주/극장/index.html?embed=1",
          "title": "11주 내 영화 극장"
        }
      }
    }
  ]
};
