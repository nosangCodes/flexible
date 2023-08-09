import { getServerSession } from "next-auth/next";
import { User, NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import jsonWebToken from "jsonwebtoken";
import { JWT } from "next-auth/jwt";
import {AdapterUser} from "next-auth/adapters";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
//   jwt: {
//     encode: ({ secret, token }) => [],
//     decode: ({ secret, token }) => [],
//   },
  theme: {
    colorScheme: "light",
    logo: "/logo.svg",
  },
  callbacks: {
    async session({ session }) {
        return session;
    },
    async signIn({ user }: {user: AdapterUser | User}) {},
  },
};
