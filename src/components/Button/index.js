import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    disable = false,
    small = false,
    large = false,
    children,
    onClick,
    ...passprops
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passprops,
    };

    if (disable) {
        delete props.disable;
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.to = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        primary,
        outline,
        text,
        disable,
        rounded,
        small,
        large,
    });

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
