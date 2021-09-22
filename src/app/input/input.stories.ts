import {InputComponent} from './input.component';
import {Story} from '@storybook/angular';

export default {
  title: 'Components/Input',
  component: InputComponent,
};

const Template = (args: InputComponent) => ({
  props: args
});

export const DefaultInput: Story<InputComponent> = Template.bind({});

DefaultInput.args = {
  label: 'My Label',
  placeholder: 'My Placeholder'
};

DefaultInput.argTypes = {
  label: {
    name: 'Label',
    defaultValue: 'Input Label'
  },
  placeholder: {
    name: 'Placeholder'
  },
  type: {
    name: 'Input type',
    control: {type: 'select', options: ['text', 'password']}
  }
};
