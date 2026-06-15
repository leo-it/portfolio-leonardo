import { redirect } from "@/lib/i18n/routing";

export default function RootPage() {
  redirect({ href: "/", locale: "en" });
}
