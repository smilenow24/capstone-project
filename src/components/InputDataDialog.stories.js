import InputDataDialog from "./InputDataDialog";

export default {
    title: 'Components/InputDataDialog',
    component: InputDataDialog,
    argTypes: {updateInput: {action: 'updateInput'}},
};

const Template = args => <InputDataDialog {...args} />;

export const Default = Template.bind({});