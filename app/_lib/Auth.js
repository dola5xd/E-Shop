import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createUser, getUser } from "./OurApis";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  providers: [
    Google({
      clientId: process.env.NEXT_PUBLIC_AUTH_GOOGLE_ID,
      clientSecret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    authorized({ auth }) {
      return !!auth?.user;
    },
    async signIn({ user }) {
      try {
        const existUser = await getUser(user.email);
        if (!existUser)
          await createUser({ email: user.email, fullname: user.name });
        return true;
      } catch {
        return false;
      }
    },

    async session({ session }) {
      const guest = await getUser(session.user.email);
      session.userId = guest.id;
      return session;
    },
  },
  pages: {
    signIn: "./login",
    signOut: "./signout",
  },
});
