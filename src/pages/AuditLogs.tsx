import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { auditLogs } from "@/data/mockData";

const severityClass = (s: string) =>
  s === "Critical" ? "bg-destructive/10 text-destructive border-destructive/20" :
  s === "High" ? "bg-warning/10 text-warning border-warning/20" :
  s === "Medium" ? "bg-info/10 text-info border-info/20" :
  "bg-muted text-muted-foreground border-border";

export default function AuditLogs() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-card border-border"><CardContent className="p-5"><p className="text-sm text-muted-foreground">Total Logs</p><p className="text-2xl font-bold mt-1">{auditLogs.length}</p></CardContent></Card>
        <Card className="bg-card border-border"><CardContent className="p-5"><p className="text-sm text-muted-foreground">Critical</p><p className="text-2xl font-bold mt-1 text-destructive">{auditLogs.filter(l => l.severity === "Critical").length}</p></CardContent></Card>
        <Card className="bg-card border-border"><CardContent className="p-5"><p className="text-sm text-muted-foreground">High Severity</p><p className="text-2xl font-bold mt-1 text-warning">{auditLogs.filter(l => l.severity === "High").length}</p></CardContent></Card>
        <Card className="bg-card border-border"><CardContent className="p-5"><p className="text-sm text-muted-foreground">System Events</p><p className="text-2xl font-bold mt-1">{auditLogs.filter(l => l.user === "System").length}</p></CardContent></Card>
      </div>
      <Card className="bg-card border-border">
        <CardHeader><CardTitle className="text-base">Activity Log</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Timestamp</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Module</TableHead>
                <TableHead>Details</TableHead>
                <TableHead>Severity</TableHead>
                <TableHead>IP Address</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {auditLogs.map(l => (
                <TableRow key={l.id}>
                  <TableCell className="text-muted-foreground font-mono text-xs whitespace-nowrap">{l.timestamp}</TableCell>
                  <TableCell className="font-medium">{l.user}</TableCell>
                  <TableCell>{l.action}</TableCell>
                  <TableCell><Badge variant="outline" className="text-xs">{l.module}</Badge></TableCell>
                  <TableCell className="text-muted-foreground text-xs max-w-xs truncate">{l.details}</TableCell>
                  <TableCell><Badge className={severityClass(l.severity)}>{l.severity}</Badge></TableCell>
                  <TableCell className="text-muted-foreground font-mono text-xs">{l.ip}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
