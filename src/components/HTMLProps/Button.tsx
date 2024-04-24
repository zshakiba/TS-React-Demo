import { ComponentProps } from "react";

type ButtonProps = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<ComponentProps<"button">, "children">;

const Button = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <button className={`default-classname btn--${variant}`} {...rest}>
      {children}
    </button>
  );
};

const Parent = () => {
  return (
    <Button
      variant="primary"
      onClick={() => console.log("Clicked")}
      type="button"
    >
      Click
    </Button>
  );
};

//? Basic component => Button, Input,... => Custom UI design system.
// wrapping html element.
