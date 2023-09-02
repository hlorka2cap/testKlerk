<template>
  <div class="max-w-[64rem] w-full m-auto py-[3rem] text-center">
    <workspace-component></workspace-component>
  </div>
</template>

<script>
import workspaceComponent from './components/workspaceComponent.vue';

export default {
  name: 'App',
  components: {
    workspaceComponent
  }
}
</script>

<style></style>
