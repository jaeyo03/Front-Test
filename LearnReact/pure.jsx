// 내가 한 방법 - 자식 컴포넌트에서 필터링을 진행하기
function List({ items, query }) {
  const newItems = filterItems(items, query);
  return (
    <table>
      {newItems.map(food => (
        <tr key={food.id}>
          <td>{food.name}</td>
          <td>{food.description}</td>
        </tr>
      ))}
    </table>
  );
}

// 권장되는 방법 - 부모에서 필터링 진행하기
export default function FilterableList() {
  const [query, setQuery] = useState('');
  const results = filterItems(foods, query); // 여기서 하기! - 이렇게 하면 List 컴포넌트의 재사용성 증가 및 순수성 보장 가능

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      <SearchBar
        query={query}
        onChange={handleChange}
      />
      <hr />
      <List items={results} />
    </>
  );
}

function List({ items }) {
  return (
    <table>
      {items.map(food => (
        <tr key={food.id}>
          <td>{food.name}</td>
          <td>{food.description}</td>
        </tr>
      ))}
    </table>
  );
}

function filterItems(items, query) {
  query = query.toLowerCase();
  return items.filter(item =>
    item.name.split(' ').some(word =>
      word.toLowerCase().startsWith(query)
    )
  );
}