import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = 'gold' | 'ghost';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    icon?: string;
    children: ReactNode;
}

export function Button({
    variant = 'gold',
    icon,
    children,
    className = '',
    ...rest
}: Props) {
    return (
        <button className={`btn-${variant} ${className}`.trim()} {...rest}>
            {icon && <i className={`fas ${icon}`}></i>}
            {children}
        </button>
    );
}
