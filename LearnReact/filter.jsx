import {useState} from 'react';

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

// 여기 리뷰 필요!!!!!!!!!!!
// 여기서 불필요한 length = 0 초기화가 진행되고 있음
// product 를 필터링하고 하면 더 좋다!
function ProductTable({ products, searchWord, showStocked }) {
  const rows = [];
  let lastCategory = null;

  // 이런식으로 필터하기

  // const filteredProducts = products.filter(product => {
  //   const trimmedSearchWord = searchWord.trim().toLowerCase();
  //   if (showStocked && !product.stocked) return false; // 이런 조건문 아주 좋다 , 옵션이 있는지 보고 그 옵션이 product 와 맞는지 한번에 보는 좋은 방법
  // 아래도 마찬가지
  //   if (trimmedSearchWord && !product.name.toLowerCase().includes(trimmedSearchWord)) return false; //
  //   return true;
  // });

  // 필터로 하면 아래처럼 깔끔하게 작성 가능!

  // filteredProducts.forEach(product => {
  //   if (product.category !== lastCategory) {
  //     rows.push(
  //       <ProductCategoryRow
  //         category={product.category}
  //         key={product.category}
  //       />
  //     );
  //   }
  //   rows.push(
  //     <ProductRow
  //       product={product}
  //       key={`${product.category}-${product.name}`}
  //     />
  //   );
  //   lastCategory = product.category;
  // });

  // 내가 한 방법은 유지 보수 및 생산성이 떨어짐, 코드 변경이 되면 너무 많은 곳을 바꿔야함
  function insert(product){
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  }

  products.forEach((product) => {
    insert(product);
  });

  if(showStocked && searchWord){
    rows.length = 0;
    products.forEach((product) => {
      if(product.name.includes(searchWord) && product.stocked){
        insert(product);
      }
    });
  } else if(showStocked && !searchWord){
    rows.length = 0;
    products.forEach((product) => {
      if(product.stocked){
        insert(product);
      }
    });
  } else if(searchWord){
    rows.length = 0;
    products.forEach((product) => {
      if(product.name.toLowerCase().includes(searchWord)){
        insert(product);
      }
    })
  }
  return (
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({searchWord, setSearchWord, showStocked, setShowStocked}) {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value = {searchWord}
        onChange = {e => setSearchWord(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked = {showStocked} //checked로 해줘야함!!
          onChange = {e => setShowStocked(e.target.checked)}
        />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

function FilterableProductTable({ products, searchWord, setSearchWord, showStocked, setShowStocked }) {
  return (
    <div>
      <SearchBar
        searchWord = {searchWord}
        setSearchWord = {setSearchWord}
        showStocked = {showStocked}
        setShowStocked = {setShowStocked}
      />
      <ProductTable
        products={products}
        searchWord = {searchWord}
        showStocked = {showStocked}
      />
    </div>
  );
}

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

export default function Filter() {
  // 아래 state 는 FilterableProductTable 에 옮겨도 무방함
  const [searchWord, setSearchWord] = useState('');
  const [showStocked, setShowStocked] = useState(false);
  return <FilterableProductTable
    products={PRODUCTS}
    searchWord = {searchWord}
    setSearchWord = {setSearchWord}
    showStocked = {showStocked}
    setShowStocked = {setShowStocked}
  />;
}
