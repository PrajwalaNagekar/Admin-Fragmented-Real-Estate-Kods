import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";
import { kycSubmissions } from "@/data/mockData";

const statusColor = (s: string) =>
  s === "Approved" ? "bg-success/10 text-success border-success/20" :
  s === "Rejected" ? "bg-destructive/10 text-destructive border-destructive/20" :
  s === "In Review" ? "bg-info/10 text-info border-info/20" :
  "bg-warning/10 text-warning border-warning/20";

export default function KYCVerification() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {["Pending", "In Review", "Approved", "Rejected"].map(s => (
          <Card key={s} className="bg-card border-border"><CardContent className="p-5"><p className="text-sm text-muted-foreground">{s}</p><p className="text-2xl font-bold mt-1">{kycSubmissions.filter(k => k.status === s).length}</p></CardContent></Card>
        ))}
      </div>
      <Card className="bg-card border-border">
        <CardHeader><CardTitle className="text-base">KYC Submissions</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader><TableRow><TableHead>User</TableHead><TableHead>Document</TableHead><TableHead>Submitted</TableHead><TableHead>Status</TableHead><TableHead>Actions</TableHead></TableRow></TableHeader>
            <TableBody>
              {kycSubmissions.map(k => (
                <TableRow key={k.id}>
                  <TableCell className="font-medium">{k.userName}</TableCell>
                  <TableCell className="text-muted-foreground">{k.documentType}</TableCell>
                  <TableCell className="text-muted-foreground">{k.submittedDate}</TableCell>
                  <TableCell><Badge className={statusColor(k.status)}>{k.status}</Badge></TableCell>
                  <TableCell>
                    {(k.status === "Pending" || k.status === "In Review") && (
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" className="text-success hover:text-success"><CheckCircle className="w-4 h-4" /></Button>
                        <Button size="sm" variant="ghost" className="text-destructive hover:text-destructive"><XCircle className="w-4 h-4" /></Button>
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
