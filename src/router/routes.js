const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/SobrePage.vue") },
      {
        path: "/pautas",
        name: "pautas",
        component: () => import("pages/PautasPage.vue"),
      },
      {
        path: "/agendamentos",
        name: "agendamentos",
        component: () => import("pages/AgendamentosPage.vue"),
      },
      {
        path: "/localizacao",
        name: "localizacao",
        component: () => import("pages/LocalizacaoPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
