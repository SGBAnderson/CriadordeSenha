import style from './styles.module.css'

export function Title ( {children} ) {
    return (
        <h1 className={style.tittles}>
            {children}
        </h1>
    );
} 