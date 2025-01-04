import {Meta, StoryObj} from '@storybook/react';
import {Button} from './button'
import results from "../../../../.jest-test-results.json";
import {withTests} from '@storybook/addon-jest';


const meta: Meta<typeof Button> = {
    component: Button,
    tags: ["autodocs"],
    decorators: [
        (Story) => {
            document.documentElement.classList.add("dark");
            return <Story/>
        }
    ]
}

export default meta;

type Story = StoryObj<typeof Button>;



export const Tests:Story={
    args: {
        shape: "default",
        loadingType: "ring",
        loadingText: "Test",
        isLoading: true,
        size: "small",
        variant: "error",
        type: {},
        isDisabled: false,
        isLink: false,
        isOutline: true,
        className: "",
        animatedIcon: false
    },

    render:(args)=>(
        <Button {...args}>
            Click Here
        </Button>
    )
}


Tests.decorators=[
    withTests({results})
];





export const BrandColors: Story = {
    render: () => (
        <>
            <Button>Default</Button>
            <Button variant="neutral">netral</Button>
            <Button variant="primary">primary</Button>
            <Button variant="secondary">secondary</Button>
            <Button variant="ghost">ghost</Button>
            <Button isLink={true}>isLink</Button>
        </>
    )
}

export const StateColors: Story = {
    render: () => (
        <>
            <Button variant="success">success</Button>
            <Button variant="error">error</Button>
            <Button variant="warning">warning</Button>
            <Button variant="info">info</Button>
        </>

    )
}


export const OutlineButtons:Story={
    render:()=>(
        <>
            <Button>Default</Button>
            <Button isOutline variant="neutral">netral</Button>
            <Button isOutline variant="primary">primary</Button>
            <Button isOutline variant="secondary">secondary</Button>
            <Button isOutline variant="ghost">ghost</Button>
            <Button isOutline isLink={true}>isLink</Button>
        </>

    )
}

export const OutlineStateButtons:Story={
    render:()=>(
        <>
            <Button isOutline variant="success">success</Button>
            <Button isOutline variant="error">error</Button>
            <Button isOutline variant="warning">warning</Button>
            <Button isOutline variant="info">info</Button>
        </>
        )
}

export const ButtonSize:Story={
    render:()=>(
        <>
            <Button size={"large"} variant="neutral">Large</Button>
            <Button size={"normal"} variant="neutral">Normal</Button>
            <Button size={"small"} variant="neutral">Small</Button>
            <Button size={"tiny"} variant="neutral">Tiny</Button>
        </>
    )
}

export const WideButton:Story={
    render:()=>(
        <>
            <Button shape={"wide"} variant="neutral">
                Wide Button
            </Button>
        </>
    )
}

export const FullButton:Story={
    render:()=>(
        <>
            <Button shape={"full"} variant="neutral">
                Full Button
            </Button>
        </>
    )
}

export const SqaureButtons: Story = {
    render: () => (
        <>
            <Button variant="neutral" size="tiny" shape="square">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                    ></path>
                </svg>
            </Button>
            <Button variant="neutral" size="small" shape="square">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                    ></path>
                </svg>
            </Button>
            <Button variant="neutral" size="normal" shape="square">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                    ></path>
                </svg>
            </Button>
            <Button variant="neutral" size="large" shape="square">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                    ></path>
                </svg>
            </Button>
        </>
    ),
};


export const DisabledButton:Story={
    render:()=>(
        <>
            <Button disabled variant={"neutral"}>
                     Disabled Button
            </Button>
        </>
    )
}

export const IconButton: Story = {
    render: () => (
        <>
            <Button variant="neutral">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                </svg>
                Submit
            </Button>
            <Button variant="neutral">
                Submit
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                </svg>
            </Button>
        </>
    ),
};


export const ButtonWithLoading:Story={
    render:()=>(
        <>
            <Button isLoading={true} loadingText={"loading"}  variant="neutral">success</Button>
            <Button isLoading={true} loadingText={"loading"} loadingType={"ring"} variant="neutral">error</Button>
            <Button isLoading={true} loadingText={"loading"}  variant="primary">warning</Button>
            <Button isLoading={true} loadingText={"loading"} loadingType={"ring"} variant="accent">info</Button>
        </>
    )
}
