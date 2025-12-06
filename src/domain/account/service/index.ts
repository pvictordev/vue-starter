import { http } from "@/providers/HTTPProvider";

const accountLoginService = async () => {
  return http
    .get("/4fecaa48-1a2d-4746-8a76-6d910405f06f")
    .then((response) => response.data);
};

export { accountLoginService };
