import {Meta, StoryObj} from '@storybook/react';
import {Button} from './button'

const meta: Meta<typeof Button> = {
    component: Button,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof Button>;


export const BrandColors: Story = {

    render: () => (
        <>
            <Button>Default</Button>
            <Button variant="neutral">netral</Button>
            <Button variant="primary">primary</Button>
            <Button variant="secondary">secondary</Button>
            <Button variant="ghost">ghost</Button>
            <Button variant="success">success</Button>
            <Button variant="error">error</Button>
            <Button variant="warning">warning</Button>
            <Button isLink={true}>isLink</Button>
        </>
    )
}