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
    renderSidebarContent?: () => JSX.Element;
}

export function Card({
    renderSidebarContent,
    title,
    border,
    className,
    ...props
}: CardProps) {
    const sidebarContent = renderSidebarContent ? renderSidebarContent() : null;

    return (
        <div className={card({ border, className })} {...props}>
            {sidebarContent && (
                <div className={style.sidebar_content}>{sidebarContent}</div>
            )}
            <div className={style.card_body}>
                {title && <h2 className={style.card_title}>{title}</h2>}
                {props.children}
            </div>
        </div>
    );
}
