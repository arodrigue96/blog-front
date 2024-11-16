import { http, HttpResponse } from "msw";

export const handlers = [
  http.get(`${import.meta.env.VITE_API_URL}/posts`, () => {
    return HttpResponse.json([
      {
        title: "Exploring the Future of AI",
        altImageText: "",
        author: "",
        date: new Date(),
        content: "",
        id: 1,
        imageUrl: "",
      },

      {
        title: "Innovation in Renewable Energy",
        altImageText: "",
        author: "",
        date: new Date(),
        content: "",
        id: 2,
        imageUrl: "",
      },
    ]);
  }),
];
