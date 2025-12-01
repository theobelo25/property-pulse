import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/config/database";
import User, { UserType } from "@/models/User";
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

      if (!userExists) {
        // Truncate user name if too long
        const username = profile.name?.slice(0, 20);

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

      if (session.user) (session.user as UserType).id = user._id.toString;

      return session;
    },
  },
};
