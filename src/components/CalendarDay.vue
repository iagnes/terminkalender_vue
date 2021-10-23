<template>
  <div class="card">
    <div class="card-header text-center" role="button">
      <strong>{{day.fullName}}</strong>
    </div>
    <div class="card-body">
      <CalendarEvent />
    </div>
  </div>
</template>

<script>
import CalendarEvent from "./CalendarEvent";
export default {
  name: "CalendarDay",
  components: {
    CalendarEvent,
  },
  props: ["day"],
};
</script>

<style scoped>
</style>