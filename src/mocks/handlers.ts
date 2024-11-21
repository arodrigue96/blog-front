import { http, HttpResponse } from "msw";
import { Post } from "../post/types";

const url = import.meta.env.VITE_API_URL;

if (!url) {
  throw new Error(".Env VITE_API_URL is not defined");
}

export const handlers = [
  http.get(`${url}/posts`, () => {
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

  http.post(`${url}/posts`, () => {
    return HttpResponse.json<Post>({
      id: 3,
      author: "Aniol",
      title: "undostres ya no me ves",
      content: "",
      imageUrl: "aniol.webp",
      altImageText: "trosco",
      date: new Date(),
    });
  }),
];
