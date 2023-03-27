export default {
  install(app, options) {
    const person = {
      name: 'yeong',
      say() {
        alert(this.name);
      },
      ...options,
    };
    app.config.globalProperties.$person = person;
    app.provide('person', person);
  },
};
