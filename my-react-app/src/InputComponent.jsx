import {useState} from 'react';

function InputComponent() {
    const [name, setName] = useState('Shirley');
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState('');
    const [payment, setPayment] = useState('');
    const [shipping, setShipping] = useState('');


    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }

    return (
        <div className='delivery-food-container'>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type='number'/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder='Enter Your Comments'/>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value=''>Select your option </option>
                <option value='Visa'>Visa</option>
                <option value='Mastercard'>Mastercard</option>
                <option value='Gift card'>Gift card</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                {/*{shipping === 'Pick up'} 就是一个条件判断语句。当条件为 true 时，checked 属性就为 true，因此该单选框会显示为选中状态；反之，则不选中。 */}
                <input type='radio' value='Pick up'
                        checked={shipping === 'Pick up'}
                        onChange={handleShippingChange}/>
                Pick up
            </label><br/>

            <label>
                <input type='radio' value='Delivery'
                        checked={shipping === 'Delivery'}
                        onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    )

}

export default InputComponent