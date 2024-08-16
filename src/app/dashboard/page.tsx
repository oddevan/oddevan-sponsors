import Link from "next/link";

const demoDashboards = [
    { name: 'PillTimer', description: 'iOS app for as-needed medicine tracking', slug: '692db4b6-a4b8-430c-8ef6-a6b1fe67b6e8' },
    { name: 'Smolblog', description: 'Blogging at the speed of social', slug: '088e3499-ed96-4d6d-b910-63604583d67f' },
    { name: 'madcrasher', description: 'The illegitimate love-child of synthpop and hip-hop', slug: '44955e28-dae8-4261-8d99-1f9ac4ee3c22' },
]

export default function DashboardIndex() {
  return (
    <main className="flex min-h-screen flex-col p-24 space-y-10 items-center justify-center">
      <h1 className="text-center text-3xl font-semibold w-fit">Public Dashboards</h1>
      {demoDashboards.map(dash => (
        <Link key={dash.slug} className="flex flex-col justify-start rounded-md border space-y-2 p-4 w-96 my-auto hover:bg-muted text-foreground" href={`/dashboard/${dash.slug}`}>
          <h2 className="font-semibold text-lg">{dash.name}</h2>
          <p className="font-light text-sm">{dash.description}</p>
        </Link>
      ))}
    </main>
  );
}