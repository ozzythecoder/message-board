import style from './card.module.scss';
import clsx from 'clsx';

type CardProps = SidebarState & {
    children?: React.ReactNode;
    className?: string;
};

type SidebarState =
    | {
          sidebar: true;
          renderSidebarContent: () => JSX.Element;
      }
    | {
          sidebar?: false | undefined;
          renderSidebarContent?: never;
      };

export function Card(props: CardProps) {
    const sidebarContent = props.sidebar ? props.renderSidebarContent() : null;

    return (
        <div className={clsx(style.card_content, props.className)}>
            {sidebarContent && (
                <div className={style.sidebar_content}>{sidebarContent}</div>
            )}
            <div className={style.card_body}>{props.children}</div>
        </div>
    );
}
