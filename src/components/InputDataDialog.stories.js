import InputDataDialog from "./InputDataDialog";

export default {
    title: 'Components/InputDataDialog',
    component: InputDataDialog,
    argTypes: {onInputData: {action: 'onInputData'}},
};

const Template = args => <InputDataDialog {...args} />;

export const Default = Template.bind({});