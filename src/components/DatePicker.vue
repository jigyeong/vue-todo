<template>
  <section>
    <datepicker-container>
      <datepicker-input type="date"/>
      <div>
        <datepicker-header/>
        <datepicker-body/>
      </div>
    </datepicker-container>

  </section>
</template>

<script>
import styled from 'vue-styled-components';

const DatepickerInput = styled.input`
    display: inline-block;
    width: 200px;
    height: 30px;
    font-weight: 400;
    border: none;
    border-bottom: 1px solid #bbb;
    padding: 0.375rem 0.75rem;
    cursor: pointer;
`
export default {
  components : {
    DatepickerInput
  }
}
</script>

<style>

</style>