import Header from "./Header";

export default {
    title: 'Components/Header',
    component: Header,
    argTypes: {updateInput: {action: 'updateInput'}},
};

const Template = args => <Header {...args} />;

export const Default = Template.bind({});