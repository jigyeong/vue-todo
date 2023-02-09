import Inputbox from './Inputbox';

const templateDecorator = () => ({
  template: `
<div class="ui form"><story/></div>
	`,
});

export default {
  title: 'Example/Inputbox',
  component: Inputbox,
  argTypes: {
    title: { control: 'text' },
    isValide: {control: 'boolean'}
  },
  decorators: [templateDecorator],
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Inputbox },
  template: `<Inputbox v-model="text" :title="title" :isValide="isValide" />`,
  data() {
    return { text: '', name: 'Inputbox' }
  }
});

export const Title = Template.bind({});
Title.args = {
  title: '텍스트',
  isValide: false,
};