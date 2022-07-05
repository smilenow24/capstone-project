import CategoryButton from "./CategoryButton";

export default {
    title: 'Components/CategoryButton',
    component: CategoryButton,
    argTypes: {lastInputValue: {action: 'lastInputValue'}},
};

const Template = args => <CategoryButton {...args} />;

export const Default = Template.bind({});