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

const YourComponentName: React.FC<YourComponentNameProps> = (props) => {
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

## Writing Examples for the Component

Inside the same file where you wrote the documentation (`YourComponentName.stories.tsx`), you can add more examples by creating additional stories:

```tsx
export const ExampleOne = Template.bind({});
ExampleOne.args = {
    // Define args for ExampleOne
};

export const ExampleTwo = Template.bind({});
ExampleTwo.args = {
    // Define args for ExampleTwo
};
```

## Learn More

You can learn more in the Sure, here's a draft for your README document:

```markdown
# Project Name

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-repo/project-name.git
    ```
2. Navigate to the project directory:
    ```sh
    cd project-name
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
    or
    ```sh
    yarn install
    ```

## Running the App

### Running Storybook

To run Storybook for developing and testing components:

```sh
npm run storybook
```
or
```sh
yarn storybook
```

This will start Storybook and open it in your default web browser.

## Writing a New Component

1. Navigate to the 

src

 directory:
    ```sh
    cd src
    ```
2. Create a new directory for your component inside the `components` directory:
    ```sh
    mkdir components/YourComponentName
    ```
3. Inside the new directory, create your component file, e.g., `YourComponentName.tsx`:
    ```tsx
    import React from 'react';

    interface YourComponentNameProps {
        // Define your props here
    }

    const YourComponentName: React.FC<YourComponentNameProps> = (props) => {
        return (
            <div>
                {/* Your component implementation */}
            </div>
        );
    };

    export default YourComponentName;
    ```

## Writing Documentation for the Component

1. Create a new file for your component's documentation inside the 

stories

 directory, e.g., `YourComponentName.stories.tsx`:
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

## Writing Examples for the Component

1. Inside the same file where you wrote the documentation (`YourComponentName.stories.tsx`), you can add more examples by creating additional stories:
    ```tsx
    export const ExampleOne = Template.bind({});
    ExampleOne.args = {
        // Define args for ExampleOne
    };

    export const ExampleTwo = Template.bind({});
    ExampleTwo.args = {
        // Define args for ExampleTwo
    };
    ```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

To learn how Storybook and how it works, checkout [StoryBook documentation](https://storybook.js.org/docs)