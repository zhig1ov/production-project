import type { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';

const meta = {
    title: 'shared/Code',
    component: Code,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        text: 'import type { Meta, StoryObj } from \'@storybook/react\';\n'
            + 'import { Code } from \'./Code\';\n'
            + '\n'
            + 'const meta = {\n'
            + '    title: \'shared/Code\',\n'
            + '    component: Code,\n'
            + '    parameters: {\n'
            + '        layout: \'centered\',\n'
            + '    },\n'
            + '    tags: [\'autodocs\'],\n'
            + '\n'
            + '} satisfies Meta<typeof Code>;\n'
            + '\n'
            + 'export default meta;\n'
            + 'type Story = StoryObj<typeof meta>;',
    },
};
