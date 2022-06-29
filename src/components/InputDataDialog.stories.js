import InputDataDialog from "./InputDataDialog";

export default {
    title: 'Components/InputDataDialog',
    component: InputDataDialog,
    argTypes: {setInputs: {action: 'setInputs'}},
};

const Template = args => <InputDataDialog {...args} />;

export const Default = Template.bind({});