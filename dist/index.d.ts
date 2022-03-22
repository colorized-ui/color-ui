/// <reference types="react" />
interface ButtonProps {
    label: string;
}
declare const Button: (props: ButtonProps) => JSX.Element;

declare const ColorProvider: () => JSX.Element;

export { Button, ColorProvider };
