import AuthForm from "@/components/auth-form";

export default async function Home({ searchParams: { mode } }) {
  return <AuthForm mode={mode || "login"} />;
}
