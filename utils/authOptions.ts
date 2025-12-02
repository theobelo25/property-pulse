import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/config/database";
import User from "@/models/User";
import { Profile, Session } from "next-auth";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ profile }: { profile: Profile }) {
      await connectDB();

      const userExists = await User.findOne({ email: profile.email });
      console.log("ue", userExists);

      if (!userExists) {
        // Truncate user name if too long
        const username = profile.name?.slice(0, 20);
        console.log("new", username);
        await User.create({
          email: profile.email,
          username,
          image: profile?.image,
        });
      }

      return true;
    },
    async session({ session }: { session: Session }): Promise<Session> {
      const user = await User.findOne({ email: session.user?.email });
      console.log("session", user);

      if (session.user) {
        const newObject = { ...session.user, id: user._id };
        session.user = newObject;
      }
      console.log("session update", session.user);
      return session;
    },
  },
};
