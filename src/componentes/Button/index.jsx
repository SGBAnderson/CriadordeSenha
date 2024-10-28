import styles from "./styles.module.css"


function Button({ children, label, onClick }) {
  return (
    <button className={styles.button} onClick={onClick} >
        {children}
        {label}
    </button>
  );
}

export default Button;