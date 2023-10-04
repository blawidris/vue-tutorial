import { ref, onMounted, onUnMounted } from "vue";

export function useMouse() {
  const x = ref(0);
  const y = ref(0);

  function update(event) {
    x.value = event.pageX;
    y.value = event.pageY;
  }

  onMounted(() => window.addEventListener("mousemove", update));
  onUnMounted(() => window.removeEventListener("mousemove", update));

  return { x, y };
}
