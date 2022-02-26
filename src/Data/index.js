//배너 이미지 배열
export const BannerList = [
  "https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61nfpX0p23L._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61rSRZL9kaL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/610aFo74RdL._SX3000_.jpg"
];

//배너 이미지 아이템 박스 배열
export const ItemList = [
  "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/January/Fuji_Dash_EchoDot_Jan21_1x._SY304_CB413050328_.jpg",
  "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg",
  "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/January/Fuji_Dash_Echo_Jan21_1x._SY304_CB413054652_.jpg",
  "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
];

// type 구분 짓기 위해 생성
// 0 = 일반 아이템, 1 = 회원가입 유도 아이템, 2 = 스크롤 아이템
export const MainItem = [
  {
    title: "Gaming accessories",
    img: ItemList[0],
    type: 0
  },
  {
    title: "Alexa, play music.",
    img: ItemList[1],
    type: 0
  },
  {
    title: "Shop by Category",
    img: ItemList[2],
    type: 0
  },
  {
    title: "Easy returns",
    img: ItemList[3],
    type: 1
  }
];
