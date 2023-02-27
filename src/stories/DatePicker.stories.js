import DatePicker from '../components/DatePicker.vue';

export default {
    title: 'Example/DatePicker',
    component: DatePicker,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
      backgroundColor: { control: 'color' },
      size: {
        control: { type: 'select' },
        options: ['small', 'medium', 'large'],
      },
    },
  };

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { DatePicker },
    template: '<date-picker @onClick="onClick" v-bind="$props" />',
  });

  export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
};