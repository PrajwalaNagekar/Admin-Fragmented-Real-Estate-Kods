import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { leads } from "@/data/mockData";

const pipelineCounts = {
  New: leads.filter(l => l.status === "New").length,
  Contacted: leads.filter(l => l.status === "Contacted").length,
  Qualified: leads.filter(l => l.status === "Qualified").length,
  Negotiating: leads.filter(l => l.status === "Negotiating").length,
};

const statusColor = (s: string) =>
  s === "New" ? "bg-info/10 text-info border-info/20" :
  s === "Contacted" ? "bg-warning/10 text-warning border-warning/20" :
  s === "Qualified" ? "bg-primary/10 text-primary border-primary/20" :
  "bg-success/10 text-success border-success/20";

export default function SalesLeads() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(pipelineCounts).map(([stage, count]) => (
          <Card key={stage} className="bg-card border-border"><CardContent className="p-5"><p className="text-sm text-muted-foreground">{stage}</p><p className="text-2xl font-bold mt-1">{count}</p></CardContent></Card>
        ))}
      </div>
      <Card className="bg-card border-border">
        <CardHeader><CardTitle className="text-base">All Leads</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader><TableRow><TableHead>Name</TableHead><TableHead>Email</TableHead><TableHead>Interest</TableHead><TableHead>Source</TableHead><TableHead>Status</TableHead><TableHead>Date</TableHead></TableRow></TableHeader>
            <TableBody>
              {leads.map(l => (
                <TableRow key={l.id}>
                  <TableCell className="font-medium">{l.name}</TableCell>
                  <TableCell className="text-muted-foreground">{l.email}</TableCell>
                  <TableCell className="text-muted-foreground">{l.interest}</TableCell>
                  <TableCell className="text-muted-foreground">{l.source}</TableCell>
                  <TableCell><Badge className={statusColor(l.status)}>{l.status}</Badge></TableCell>
                  <TableCell className="text-muted-foreground">{l.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
