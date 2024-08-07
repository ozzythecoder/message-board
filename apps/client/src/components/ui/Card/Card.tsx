import style from './card.module.scss';
import { cva, type VariantProps } from 'class-variance-authority';

const card = cva(style.card_content, {
    variants: {
        border: {
            none: null,
            thin: style.border_thin,
            thick: style.border_thick,
        },
    },
    defaultVariants: {
        border: 'none',
    },
});

export interface CardProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof card> {
    title?: string;
    sidebar?: () => JSX.Element;
}

const CardSidebar = ({ content }: { content: JSX.Element }) => {
    return <div className={style.sidebar_content}>{content}</div>;
};

function Card({ title, border, className, sidebar, ...props }: CardProps) {
    return (
        <div className={card({ border, className })} {...props}>
            {sidebar && <CardSidebar content={sidebar()} />}
            <div className={style.card_body}>
                <>
                    {title && <h2 className={style.card_title}>{title}</h2>}
                    {props.children}
                </>
            </div>
        </div>
    );
}

export { Card };
