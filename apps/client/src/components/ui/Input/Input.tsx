import './input.scss';

type InputProps = {
    className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps) {
    return <input {...props} className="Input" />;
}
