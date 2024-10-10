import PropTypes from "prop-types";

function List({ items, category }) {
  // array
  // const cars = ['BMW', 'Marcedes', 'Audi', 'Ferrari', 'Lamborghini'];
  items.sort((a, b) => a.name.localeCompare(b.name)); //alphabet
  // cars.sort((a, b) => b.name.localeCompare(a.name)); //reverse alphabet
  // cars.sort((a, b) => b.price - a.price); //price big to low
  // cars.sort((a, b) => a.price - b.price); //price low to big

  const listItems = items.map((item) => (
    <li key={crypto.randomUUID()}>
      {item.name}: &nbsp;<strong>${item.price}</strong>
    </li>
  ));

  const lowPriceItems = items.filter((item) => item.price < 500);

  const filterItems = lowPriceItems.map((item) => (
    <li key={crypto.randomUUID()}>
      {item.name}: &nbsp;<strong>${item.price}</strong>
    </li>
  ));

  // console.log(listItems);

  return (
    <>
      <h2 className="list-category">{category}</h2>
      <ol className="list-items">{listItems}</ol>
      <ul className="list-items">{filterItems}</ul>
    </>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, price: PropTypes.number })
  ),
  category: PropTypes.string,
};

List.defaultProps = {
  items: [],
  category: "Unknown",
};

export default List;
