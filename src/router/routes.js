export default [
  {
    path: "/",
    name: "restaurants",
    component: () => import("../views/Restaurants"),
    meta: {
      title: "restaurants",
    },
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/Profile"),
    props: (route) => ({
      country: route.params.country,
      countryCode: route.params.countryCode,
    }),
    meta: {
      title: "Profile",
    },
  },
  {
    path: "/restaurants",
    name: "restaurants",
    component: () => import("../views/Restaurants"),
    props: (route) => ({
      country: route.params.country,
      countryCode: route.params.countryCode,
    }),
    meta: {
      title: "Restaurantes",
    },
  },
  {
    path: "/restaurant",
    name: "restaurantDetails",
    component: () => import("../views/RestaurantDetails"),
    props: (route) => ({
      country: route.params.country,
      countryCode: route.params.countryCode,
    }),
    meta: {
      title: "Restaurantes",
    },
  },
];
