# Project Name

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm or yarn

### Installation

1. **Clone the repository with SSH**:

```sh
git clone git@github.com:part-timr-dev/tmr-ui.git
```

2. **Navigate to the project directory**:

```sh
cd project-name
```

3. Install dependencies:

```sh
npm install
```

## Running Storybook

To run Storybook for developing and testing components:

```sh
npm run storybook
```

This will start Storybook and open it in your default web browser.

## Writing a New Component

Navigate to the `/src/stories/_components` directory:

```sh
```

Create a new directory for your component inside the components directory:

```sh
mkdir ComponentName
```

Inside the new directory, create your component file, e.g., `YourComponentName.tsx`:

```tsx
import React from 'react';

interface YourComponentNameProps {
    // Define your props here
}

const YourComponentName: = (props: YourComponentNameProps) => {
    return (
        <div>
            {/* Your component implementation */}
        </div>
    );
};

export default YourComponentName;
```

## Writing Documentation for the Component

Create a new file for your component's documentation inside the stories directory, e.g., `YourComponentName.stories.tsx`:

```tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import YourComponentName from '../components/YourComponentName/YourComponentName';

export default {
    title: 'Components/YourComponentName',
    component: YourComponentName,
} as Meta;

const Template: Story = (args) => <YourComponentName {...args} />;

export const Default = Template.bind({});
Default.args = {
    // Define default args here
};
```
More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout

This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs

More on argTypes: https://storybook.js.org/docs/api/argtypes

Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

## Writing Examples for the Component

Inside the same file where you wrote the documentation (`YourComponentName.stories.tsx`), you can add more examples by creating additional stories:

```tsx
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};
```

Check out [Writing Stories for Storybook document](https://storybook.js.org/docs/writing-stories/args) to learn more

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

To learn how Storybook and how it works, checkout [StoryBook documentation](https://storybook.js.org/docs)