import { ref } from 'vue';

const alerts = ref([]);
export function useAlert() {
  // alert
  // const alerts = ref([]);
  const vAlert = (message, type = 'error') => {
    alerts.value.push({ message, type });
    setTimeout(() => {
      alerts.value.shift();
    }, 1800);
  };
  const vSuccess = message => vAlert(message, 'success');
  return {
    alerts,
    vAlert,
    vSuccess,
  };
}
