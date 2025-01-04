import {describe} from "node:test";
import {Button} from '.';
import {render,screen,fireEvent} from '@testing-library/react'
import {exec} from "node:child_process";

describe("Button Component", () => {

    test("renders a default button", () => {
        const {getByText} = render(<Button>Click here</Button>);
        expect(getByText("Click here")).toBeInTheDocument();
    });


    test('disabled the button when isDisabled prop is true',()=>{
        render(<Button isDisabled={true}>Click here</Button>);
        expect(screen.getByRole("button")).toBeDisabled();
    })

    test('applies the correct css class for diffrent varints',()=>{

        const {rerender}=render(<Button variant="primary">Click here</Button>);
        expect(screen.getByRole("button")).toHaveClass("btn-primary");

        rerender(<Button variant="info">Click here</Button>);
        expect(screen.getByRole("button")).toHaveClass('btn-info');
    });

    test("renders the button with the correct label", () => {
        render(<Button>Click Me</Button>);
        const buttonElement = screen.getByText("Click Me");
        expect(buttonElement).toBeInTheDocument();
    });

    test("calls the onClick handler when clicked", () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick} >Click Me</Button>);
        const buttonElement = screen.getByText(/click me/i);
        fireEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test("does not call onClick handler when disabled", () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick} disabled >Click Me</Button>);
        const buttonElement = screen.getByText(/click me/i);
        fireEvent.click(buttonElement);
        expect(handleClick).not.toHaveBeenCalled();
    });

    test('show rendered button',()=>{
        render(<Button  variant="primary" isOutline={true} size="large" isDisabled={true}>Click here</Button>);

        screen.debug();
    })





});


