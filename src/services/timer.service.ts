import mitt from "mitt";

export const emitter = mitt();

let tickCounter = 0;

export function initTimer(): void {
  setInterval(() => {
    emitter.emit("tick", tickCounter++);
  }, 1000);
}
