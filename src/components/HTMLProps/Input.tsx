import { ComponentProps } from "react";

type InputProps = {
  onChange: (value: string) => void;
} & Omit<ComponentProps<"input">, "onChange">;

const Input = ({ className, onChange, ...rest }: InputProps) => {
  return (
    <input
      onChange={(e) => onChange(e.target.value)} // (string)
      className={`default-className ${className}`}
      {...rest}
    />
  );
};

const Parent = () => {
  return (
    <Input
      className="textField"
      // onChange={(e) => console.log(e.target.value)}
      onChange={(value) => console.log(value)}
    />
  );
};
