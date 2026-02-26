import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { supportTickets } from "@/data/mockData";

const priorityColor = (p: string) => p === "High" ? "bg-destructive/10 text-destructive border-destructive/20" : p === "Medium" ? "bg-warning/10 text-warning border-warning/20" : "bg-info/10 text-info border-info/20";
const statusColor = (s: string) => s === "Open" ? "bg-warning/10 text-warning border-warning/20" : s === "In Progress" ? "bg-info/10 text-info border-info/20" : "bg-success/10 text-success border-success/20";

export default function Support() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-card border-border"><CardContent className="p-5"><p className="text-sm text-muted-foreground">Open Tickets</p><p className="text-2xl font-bold mt-1">{supportTickets.filter(t => t.status === "Open").length}</p></CardContent></Card>
        <Card className="bg-card border-border"><CardContent className="p-5"><p className="text-sm text-muted-foreground">In Progress</p><p className="text-2xl font-bold mt-1">{supportTickets.filter(t => t.status === "In Progress").length}</p></CardContent></Card>
        <Card className="bg-card border-border"><CardContent className="p-5"><p className="text-sm text-muted-foreground">Resolved</p><p className="text-2xl font-bold mt-1">{supportTickets.filter(t => t.status === "Resolved").length}</p></CardContent></Card>
      </div>
      <Card className="bg-card border-border">
        <CardHeader><CardTitle className="text-base">Support Tickets</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader><TableRow><TableHead>ID</TableHead><TableHead>User</TableHead><TableHead>Subject</TableHead><TableHead>Category</TableHead><TableHead>Priority</TableHead><TableHead>Status</TableHead><TableHead>Date</TableHead></TableRow></TableHeader>
            <TableBody>
              {supportTickets.map(t => (
                <TableRow key={t.id}>
                  <TableCell className="text-muted-foreground font-mono text-xs">{t.id}</TableCell>
                  <TableCell className="font-medium">{t.userName}</TableCell>
                  <TableCell className="text-muted-foreground">{t.subject}</TableCell>
                  <TableCell><Badge variant="outline">{t.category}</Badge></TableCell>
                  <TableCell><Badge className={priorityColor(t.priority)}>{t.priority}</Badge></TableCell>
                  <TableCell><Badge className={statusColor(t.status)}>{t.status}</Badge></TableCell>
                  <TableCell className="text-muted-foreground">{t.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
