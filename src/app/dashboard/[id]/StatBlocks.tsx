import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getLinkInfo } from "@/lib/shlink";

export function StatBlocksSkeleton() {
	return (
		<>
			<Card className="col-span-full lg:col-span-1">
				<CardHeader>
					<CardTitle>Total Clicks</CardTitle>
				</CardHeader>
				<CardContent>
					<Skeleton className="w-16 h-7 rounded-md"/>
				</CardContent>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle>Referrers</CardTitle>
				</CardHeader>
				<CardContent className="space-y-3">
					<Skeleton className="w-full h-4 rounded-md"/>
					<Skeleton className="w-full h-4 rounded-md"/>
					<Skeleton className="w-full h-4 rounded-md"/>
				</CardContent>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle>Countries</CardTitle>
				</CardHeader>
				<CardContent className="space-y-3">
					<Skeleton className="w-full h-4 rounded-md"/>
					<Skeleton className="w-full h-4 rounded-md"/>
					<Skeleton className="w-full h-4 rounded-md"/>
				</CardContent>
			</Card>
		</>
	);
}

export default async function StatBlockReal({ shortUrl }: { shortUrl: string }) {
	const { hitsAllTime, referrers, countries, raw } = await getLinkInfo(shortUrl);

	return (
		<>
			<Card className="col-span-full lg:col-span-1">
				<CardHeader>
					<CardTitle>Total Clicks</CardTitle>
				</CardHeader>
				<CardContent>
					<span className="text-3xl font-bold">{hitsAllTime}</span>
				</CardContent>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle>Referrers</CardTitle>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Referer</TableHead>
								<TableHead className="text-right">Hits</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{referrers.map(({ key, count }) => (
								<TableRow key={key}>
									<TableCell>{key == "" ? (<span className="text-muted-foreground">Unknown/Direct</span>) : key}</TableCell>
									<TableCell className="text-right">{count}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle>Countries</CardTitle>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Country</TableHead>
								<TableHead className="text-right">Hits</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{countries.map(({ key, count }) => (
								<TableRow key={key}>
									<TableCell>{key}</TableCell>
									<TableCell className="text-right">{count}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</>
	);
}