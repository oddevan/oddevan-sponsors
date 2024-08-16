import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center p-24 space-y-10">
      <h1 className="text-center text-3xl font-semibold">oddEvan Sponsor Portal</h1>
      <p className="font-light text-center text-xl">Please use the link provided to access your dashboard.</p>
      <p className="font-light text-center text-xl">You can also <Link className="underline hover:no-underline text-accent-foreground" href="/dashboard">browse public dashboards</Link>.</p>
    </main>
  );
}
