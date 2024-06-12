import style from './button.module.scss';
import { clsx } from 'clsx';

type ButtonProps = {
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
    return (
        <button {...props} className={clsx(style.Button, props.className)} />
    );
}
