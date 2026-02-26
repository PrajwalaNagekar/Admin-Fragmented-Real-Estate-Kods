import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { maintenanceRequests } from "@/data/mockData";

const priorityColor = (p: string) => p === "High" ? "bg-destructive/10 text-destructive border-destructive/20" : p === "Medium" ? "bg-warning/10 text-warning border-warning/20" : "bg-info/10 text-info border-info/20";
const statusColor = (s: string) => s === "Completed" ? "bg-success/10 text-success border-success/20" : s === "In Progress" ? "bg-info/10 text-info border-info/20" : s === "Scheduled" ? "bg-warning/10 text-warning border-warning/20" : "bg-muted text-muted-foreground border-border";

export default function Maintenance() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-card border-border"><CardContent className="p-5"><p className="text-sm text-muted-foreground">Total Requests</p><p className="text-2xl font-bold mt-1">{maintenanceRequests.length}</p></CardContent></Card>
        <Card className="bg-card border-border"><CardContent className="p-5"><p className="text-sm text-muted-foreground">Open</p><p className="text-2xl font-bold mt-1">{maintenanceRequests.filter(m => m.status === "Open").length}</p></CardContent></Card>
        <Card className="bg-card border-border"><CardContent className="p-5"><p className="text-sm text-muted-foreground">In Progress</p><p className="text-2xl font-bold mt-1">{maintenanceRequests.filter(m => m.status === "In Progress").length}</p></CardContent></Card>
        <Card className="bg-card border-border"><CardContent className="p-5"><p className="text-sm text-muted-foreground">Completed</p><p className="text-2xl font-bold mt-1">{maintenanceRequests.filter(m => m.status === "Completed").length}</p></CardContent></Card>
      </div>
      <Card className="bg-card border-border">
        <CardHeader><CardTitle className="text-base">Maintenance Requests</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader><TableRow><TableHead>Property</TableHead><TableHead>Issue</TableHead><TableHead>Priority</TableHead><TableHead>Status</TableHead><TableHead>Date</TableHead><TableHead>Assigned To</TableHead></TableRow></TableHeader>
            <TableBody>
              {maintenanceRequests.map(m => (
                <TableRow key={m.id}>
                  <TableCell><div><p className="font-medium">{m.property}</p><p className="text-xs text-muted-foreground">{m.unit}</p></div></TableCell>
                  <TableCell className="text-muted-foreground">{m.issue}</TableCell>
                  <TableCell><Badge className={priorityColor(m.priority)}>{m.priority}</Badge></TableCell>
                  <TableCell><Badge className={statusColor(m.status)}>{m.status}</Badge></TableCell>
                  <TableCell className="text-muted-foreground">{m.date}</TableCell>
                  <TableCell className="text-muted-foreground">{m.assignedTo || "—"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
