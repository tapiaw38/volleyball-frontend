export default {
    component: () =>
      import(/* webpackChunkName: "championLayout" */ "../layouts/ChampionLayout.vue"),
    children: [
      {
          path: "",
          name: "championships",
          component: () =>
              import(/* webpackChunkName: "championships" */ "../views/Championships.vue"),
      },
    ],
  };
  