import NextAuth from "next-auth";
import Facebook from "next-auth/providers/facebook";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [
    Facebook({
      clientId: process.env.FACEBOOK_ID ?? "",
      clientSecret: process.env.FACEBOOK_SECRET ?? "",
    }),
  ],
});
