import Item from '../Item/Item'

function ItemList({ items }) {
    return (
        <div className="item-list">
            {items.map((item) => {
                return <Item key={item.id} itemDetail={item} />
            })}
        </div>
    )
}

export default ItemList
