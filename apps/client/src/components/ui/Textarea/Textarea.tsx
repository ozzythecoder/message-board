import { clsx } from 'clsx';
import style from './textarea.module.scss';

type TextareaProps = {
    className?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea(props: TextareaProps) {
    return (
        <textarea
            maxLength={500}
            {...props}
            className={clsx(style.Textarea, props.className)}
        />
    );
}
