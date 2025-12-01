import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/authOptions";
import { UserType } from "@/models/User";

export const getSessionUser = async () => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) return null;

  return {
    user: session.user,
    userId: (session.user as UserType).id,
  };
};
