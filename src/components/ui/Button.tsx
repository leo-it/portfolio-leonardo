import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { Link } from "@/lib/i18n/routing";

type ButtonVariant = "primary" | "outline" | "ghost";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-stage-gold text-stage-dark hover:bg-stage-gold/90 border border-stage-gold",
  outline:
    "border border-stage-gold/60 text-stage-gold hover:bg-stage-gold/10",
  ghost: "text-stage-cream/80 hover:text-stage-gold",
};

interface BaseProps {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
    external?: boolean;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200";

  const styles = `${base} ${variantStyles[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, external, ...rest } = props;
    if (external || href.startsWith("#") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          className={styles}
          target={external && !href.startsWith("mailto:") ? "_blank" : undefined}
          rel={external && !href.startsWith("mailto:") ? "noopener noreferrer" : undefined}
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={styles} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} type="button" {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
