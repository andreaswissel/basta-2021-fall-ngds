import { moduleMetadata, Story } from '@storybook/angular';
import { InputModule } from '../input/input.module';
import { DefaultInput } from '../input/input.stories';
import {FormGroupComponent} from './form-group.component';
import { FormGroupModule } from './form-group.module';

export default {
  title: 'Components/Form Group',
  component: FormGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [FormGroupModule]
    })
  ]
};

const Template: Story<FormGroupComponent> = (args) => ({
  props: args,
  template: `
      <app-form-group [columns]="columns" [heading]="heading">
        <app-input [label]="label" [placeholder]="placeholder"></app-input>
        <app-input [label]="label" [placeholder]="placeholder" type="password"></app-input>
      </app-form-group>
  `
});

export const DefaultFormGroup = Template.bind({});

DefaultFormGroup.args = {
  heading: 'This is a heading',
  columns: 2,
  ...DefaultInput.args
};