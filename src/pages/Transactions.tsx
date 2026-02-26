import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { transactions } from "@/data/mockData";

export default function Transactions() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-card border-border"><CardContent className="p-5"><p className="text-sm text-muted-foreground">Total Transactions</p><p className="text-2xl font-bold mt-1">{transactions.length}</p></CardContent></Card>
        <Card className="bg-card border-border"><CardContent className="p-5"><p className="text-sm text-muted-foreground">Total Volume</p><p className="text-2xl font-bold mt-1">₹{(transactions.reduce((a, t) => a + t.amount, 0) / 100000).toFixed(1)}L</p></CardContent></Card>
        <Card className="bg-card border-border"><CardContent className="p-5"><p className="text-sm text-muted-foreground">Pending</p><p className="text-2xl font-bold mt-1">{transactions.filter(t => t.status === "Pending" || t.status === "Processing").length}</p></CardContent></Card>
      </div>
      <Card className="bg-card border-border">
        <CardHeader><CardTitle className="text-base">Transaction History</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader><TableRow><TableHead>ID</TableHead><TableHead>User</TableHead><TableHead>Type</TableHead><TableHead>Amount</TableHead><TableHead>Property</TableHead><TableHead>Date</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
            <TableBody>
              {transactions.map(t => (
                <TableRow key={t.id}>
                  <TableCell className="text-muted-foreground font-mono text-xs">{t.id}</TableCell>
                  <TableCell className="font-medium">{t.userName}</TableCell>
                  <TableCell><Badge variant="outline" className={t.type === "Buy" ? "border-success/30 text-success" : t.type === "Sell" ? "border-destructive/30 text-destructive" : "border-info/30 text-info"}>{t.type}</Badge></TableCell>
                  <TableCell>₹{t.amount.toLocaleString('en-IN')}</TableCell>
                  <TableCell className="text-muted-foreground">{t.propertyName}</TableCell>
                  <TableCell className="text-muted-foreground">{t.date}</TableCell>
                  <TableCell><Badge className={t.status === "Completed" ? "bg-success/10 text-success border-success/20" : t.status === "Pending" ? "bg-warning/10 text-warning border-warning/20" : "bg-info/10 text-info border-info/20"}>{t.status}</Badge></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
