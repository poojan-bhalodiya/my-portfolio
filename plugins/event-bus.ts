import mitt from "mitt";

export default defineNuxtPlugin(() => {
  const emitter = mitt();

  return {
    provide: {
      event: emitter.emit,
      listen: emitter.on,
    },
  };
});


// const { $event } = useNuxtApp()
// $event('user:registered', user)
// $listen('user:registered', (user) => {

