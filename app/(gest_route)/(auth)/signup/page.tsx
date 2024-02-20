import SignUpUI from "@/components/from/signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign up",
};

export default function SignUp() {
  return (
    <div className=" py-14 ">
      <SignUpUI />
    </div>
  );
}
