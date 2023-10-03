// TypesScript не хочет устанавливаться ((

const currency = {'USD': '$', 'EUR': '€'};
const levels = ['level-low', 'level-medium', 'level-high'];

function Card(item) {
  if (item.state === "active") {
    return (
      <div className="item">
        <div className="item-image">
          <a href={item.url}>
            <img src={item.MainImage["url_570xN"]} alt="..."/>
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{item.title.length <= 50? item.title : item.title.slice(0,50) + "…"}</p>
          <p className="item-price">
            {Object.keys(currency).includes(item.currency_code)? currency[item.currency_code] + item.price : item.price + " " + item.currency_code}
          </p>
          <p className={"item-quantity " + levels[Math.min(Math.floor((item.quantity-1)/10),2)]}>{item.quantity + " left"}</p>
        </div>
      </div>
    );
  }
}

export default function Listing({items}) {
  return (
    <div className="item-list">
      { items.map(item => <>{Card(item)}</>) }
    </div>
  );
}