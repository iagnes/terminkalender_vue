<template>
  <div id="calendar-event">
    <div class="alert text-center" :class="alertColor">
      <div>
        <strong>{{ priorityDisplayName }}</strong>
      </div>

      <div>{{ event.title }}</div>

      <div>
        <i class="fas fa-edit me-2" role="button"></i>
        <i class="far fa-trash-alt" role="button"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalendarEvent",
  props: {
    event: Object,
  },
  computed: {
    priorityDisplayName() {
      switch (this.event.priority) {
        case 1:
          return "Tief";
        case 0:
          return "Mittel";
        case -1:
          return "Hoch";
      }
      return "Unbekannte Priorität";
    },
    alertColor() {
      return "alert-" + this.event.color;
    },
  },
};
</script>

<style scoped>
</style>