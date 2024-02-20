import { getServerSession } from "next-auth";
import { ReactNode } from "react";

import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/options";

interface Props {
  children: ReactNode;
}
export default async function PrivateLayoutAuth({ children }: Props) {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");
  return <>{children}</>;
}
