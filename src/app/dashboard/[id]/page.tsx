import { getClientInfo, getIds } from "@/lib/clients";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getLinkInfo } from "@/lib/shlink";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import StatBlocks, { StatBlocksSkeleton } from "./StatBlocks";
import { Suspense } from "react";

export default async function ClientDashboard({ params }: { params: { id: string } }) {
	const client = await getClientInfo(params.id);
	if (!client) { return (<div>404</div>); }

	const { name, copy, cta, shortUrl } = client;

	return (
		<main className="p-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			<h1 className="text-3xl font-semibold col-span-full">Sponsor Dashboard for {name}</h1>
			<Suspense fallback={<StatBlocksSkeleton/>}>
				<StatBlocks shortUrl={shortUrl}/>
			</Suspense>
			<Card className="col-span-full">
				<CardHeader>
					<CardTitle>Current Message</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="rounded-md border p-4 bg-muted text-muted-foreground">
						<span className="font-bold">Sponsored by {name}:</span>{" "}
						{copy}{" "}
						<a href={`https://eph.me/${shortUrl}`} rel="nofollow" className="underline hover:no-underline text-foreground">
							{cta}
							<span aria-hidden="true"> &raquo;</span>
						</a>
					</div>
				</CardContent>
			</Card>
		</main>
	);
}

export const dynamicParams = false;

export async function generateStaticParams() {
	return (await getIds()).map(id => ({ id }));
}