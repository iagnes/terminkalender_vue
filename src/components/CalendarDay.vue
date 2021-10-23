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
  props: {
    day: {
      type: Object,
      required: true,
      // Bei primitiven Datentypen: default: 100
      // Bei nicht-primitiven Datentypen: 
      default: function() {
        return {
          id: -1,
          fullName: "Fehlender Wochentag",
          events: [],
        };
      },
      validator: function(value) {
        if (Object.keys(value).includes("id")) {
          return true;
        }
      },
    },
  },
};
</script>

<style scoped>
</style>