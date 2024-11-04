import styles from './Button.module.css';

// external styles is great for global styles

// module styles is for individual components
export function Button() {
  // const handleClick = () => console.log('Button clicked!');
  // return <button onClick={handleClick} className={styles.button1}>Click me!</button>;
  // pay attention the reason why we use arrow function in handleClick2
  // because onclick accepts a function and not a function call
  let count = 0;
  const handleClick2 = (name) => {
    if(count < 3){
      console.log('Button clicked!', name);
      count++;
    }else {
      console.log(`${name}, stop clicking me!`);
    }
  };
  return <button onClick={() => handleClick2('Shirley')} className={styles.button1}>Click me!</button>;
}

// inline styles is good for any small component with minimal styling
export function Button2() {
  const style = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
  }

  return <button className={style}>Click me!</button>;
}
export default Button;

export function Button3() {
  const handleClick = (e) => e.target.textContent = 'OUCH!'; 
  return(<button onDoubleClick={(e) => handleClick(e)}>Click me</button>)
}