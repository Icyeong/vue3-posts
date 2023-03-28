import { useAlertStore } from '@/stores/alert';
import { storeToRefs } from 'pinia';

export function useAlert() {
  // alert
  const { alerts } = storeToRefs(useAlertStore());
  const { vAlert, vSuccess } = useAlertStore();
  return {
    alerts,
    vAlert,
    vSuccess,
  };
}
