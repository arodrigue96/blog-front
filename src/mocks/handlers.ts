import { http, HttpResponse } from "msw";
import { Post } from "../post/client/types";

if (!import.meta.env.VITE_API_URL) {
  throw new Error(".Env VITE_API_URL is not defined");
}

export const handlers = [
  http.get(`${import.meta.env.VITE_API_URL}/posts`, () => {
    return HttpResponse.json<{ posts: Post[] }>({
      posts: [
        {
          id: 1,
          title: "Patatas Bravas",
          altImageText: "que en son de bones",
          author: "",
          date: new Date(),
          content: "",
          imageUrl: "",
        },

        {
          id: 2,
          title: "The Reactor Project",
          altImageText: "el millor curs de fullstack",
          author: "",
          date: new Date(),
          content: "",
          imageUrl: "",
        },
      ],
    });
  }),
];
