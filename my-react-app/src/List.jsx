import PropTypes from 'prop-types';
function List(props) {
    const items = props.items;
    const category = props.category;

    // alphabetic order
    // fruits.sort((a, b) => a.name.localeCompare(b.name));
    // numeric order
    // fruits.sort((a, b) => a.calories - b.calories);
    // const lowCaloriesFruits = fruits.filter(fruit => fruit.calories < 60);

    const listItems = items.map(item => 
                        (<li key={item.id}> 
                        {item.name}: &nbsp;
                        <b>{item.calories}</b></li>))

    return (<>
            <p className='list-category'>{category}</p>
            <ul className='list-items'>{listItems}</ul>
            </>   
    )
}

List.propTypes = {
    items: PropTypes.string,
    category: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                                name: PropTypes.string,
                                                calories: PropTypes.number
                                                }))
}

List.defaultProps = {
    items: [],
    category: 'No category'
}
export default List;