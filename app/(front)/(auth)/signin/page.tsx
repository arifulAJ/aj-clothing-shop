import SignInUi from "@/components/from/signin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in",
};

export default function SignIn() {
  return (
    <div>
      <SignInUi />
    </div>
  );
}
