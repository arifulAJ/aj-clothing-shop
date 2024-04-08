// import { getServerSession } from "next-auth";
// import { ReactNode } from "react";

// import { redirect } from "next/navigation";
// import { authOptions } from "../api/auth/[...nextauth]/options";

// interface Props {
//   children: ReactNode;
// }
// export default async function PrivateLayout({ children }: Props) {
//   const session = await getServerSession(authOptions);
//   console.log(session, "admin");
//   const user = session?.user as { role: String };
//   const isAdmin = user?.role === "admin";
//   console.log(isAdmin);
//   if (!isAdmin) redirect("/cart");
//   return <>{children}</>;
// }

import { getServerSession } from "next-auth";
import { ReactNode, use } from "react";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/options";

interface Props {
  children: ReactNode;
}

export default async function PrivateLayout({ children }: Props) {
  const session = await getServerSession(authOptions);
  const user = session?.user as { role: string }; // Use lowercase 'string'
  const isAdmins = user?.role === "admin";

  if (!isAdmins) {
    redirect("/cart"); // Redirect if not an admin
  }

  return <>{children}</>;
}
