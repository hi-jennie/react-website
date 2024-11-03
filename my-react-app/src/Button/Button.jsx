import styles from './Button.module.css';

// external styles is great for global styles

// module styles is for individual components
function Button() {
  return <button className={styles.button1}>Click me!</button>;
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