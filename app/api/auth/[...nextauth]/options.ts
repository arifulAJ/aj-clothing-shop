import CredentialsProvider from "next-auth/providers/credentials";
import { AuthOptions } from "next-auth";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/lib/models/userModal";
import NextAuth from "next-auth/next";

export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
  },
  providers: [
    CredentialsProvider({
      name: "next auth",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "your email name",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "your password",
        },
      },
      async authorize(credentials, req) {
        dbConnect();
        const user = await UserModel.findOne({ email: credentials?.email });

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ user, trigger, session, token }: any) {
      if (user) {
        token.user = {
          role: user.role,
          _id: user._id,
          email: user.email,
          name: user.name,
          isAdmin: user.isAdmin,
        };
      }
      if (trigger === "update" && session) {
        token.user = {
          ...token.user,
          email: session.user.email,
          name: session.user.name,
        };
      }

      return token;
    },
    session: async ({ session, token }: any) => {
      if (token) {
        session.user = token.user;
      }

      return session;
    },
  },
};
// export const {
//   handlers: { GET, POST },
//   auth,
//   signIn,
//   signOut,
// } = NextAuth(authOptions);
