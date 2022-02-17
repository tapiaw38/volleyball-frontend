export default {
  component: () =>
    import(/* webpackChunkName: "newLayout" */ "../layouts/NewLayout.vue"),
  children: [
    {
        path: "",
        name: "news",
        component: () =>
            import(/* webpackChunkName: "news" */ "../views/News.vue"),
    },
    {
      path: ":id/detail",
      name: "newDetail",
      component: () =>
        import(/* webpackChunkName: "newDetail" */ "../views/NewDetail.vue"),
    },
  ],
};
