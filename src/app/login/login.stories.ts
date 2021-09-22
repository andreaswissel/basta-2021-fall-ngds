import { moduleMetadata, Story } from '@storybook/angular';
import {LoginComponent} from './login.component';
import { LoginModule } from './login.module';

export default {
  title: 'Components/Login',
  component: LoginComponent,
  decorators: [
    moduleMetadata({
      imports: [LoginModule]
    })
  ]
};


const Template: Story<LoginComponent> = (args: LoginComponent) => ({
  props: args,
});

export const DefaultLogin = Template.bind({});

DefaultLogin.args = {
};
