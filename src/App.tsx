import Books from "./components/Books";
import "./styles/App.css";

const BOOK_API = [
  {
    id: 67079334,
    name: "선악의 저편",
    price: "20,700원",
    author: "프리드리히 니체 지음 | 박찬국 옮김",
    stars: "⭐⭐⭐⭐⭐ 9.7",
    sideWidth: 72,
    height: 599,
    src: {
      front: `https://image.yes24.com/goods/67079334/XL`,
      side: `https://image.yes24.com/goods/67079334/SIDE/XL`,
      back: `https://image.yes24.com/goods/67079334/BACK/XL`,
    },
  },
  {
    id: 182009922,
    name: "이향인",
    price: "15,210원",
    author: "라미 카민스키 지음 | 최지숙 옮김",
    stars: "⭐⭐⭐⭐⭐ 9.7",
    sideWidth: 47,
    height: 593,
    src: {
      front: `https://image.yes24.com/goods/182009922/XL`,
      side: `https://image.yes24.com/goods/182009922/SIDE/XL`,
      back: `https://image.yes24.com/goods/182009922/BACK/XL`,
    },
  },
];

function App() {
  return (
    <>
      <h1>Books!!!</h1>
      <Books books={BOOK_API} />
    </>
  );
}

export default App;
