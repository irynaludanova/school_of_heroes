import Link from "next/link";

const Button = ({ variant = "solid", href, children, className = "", ...props }) => {
  const baseStyles = "py-3 px-8 rounded-lg font-medium text-base transition-colors duration-300 inline-block";
  const variantStyles =
    variant === "outline"
      ? "bg-transparent border border-black text-black hover:bg-black/10"
      : "bg-black text-white hover:bg-gray-800 hover:shadow-md";

  const combinedStyles = `${baseStyles} ${variantStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;