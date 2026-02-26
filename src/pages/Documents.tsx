import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { documents } from "@/data/mockData";

export default function Documents() {
  return (
    <div className="space-y-6">
      <Card className="bg-card border-border">
        <CardHeader><div className="flex items-center justify-between"><CardTitle className="text-base">All Documents</CardTitle><Button size="sm">Upload Document</Button></div></CardHeader>
        <CardContent>
          <Table>
            <TableHeader><TableRow><TableHead>Name</TableHead><TableHead>Type</TableHead><TableHead>Property</TableHead><TableHead>Upload Date</TableHead><TableHead>Size</TableHead><TableHead>Status</TableHead><TableHead className="w-10"></TableHead></TableRow></TableHeader>
            <TableBody>
              {documents.map(d => (
                <TableRow key={d.id}>
                  <TableCell><div className="flex items-center gap-2"><FileText className="w-4 h-4 text-muted-foreground" /><span className="font-medium">{d.name}</span></div></TableCell>
                  <TableCell><Badge variant="outline">{d.type}</Badge></TableCell>
                  <TableCell className="text-muted-foreground">{d.property}</TableCell>
                  <TableCell className="text-muted-foreground">{d.uploadDate}</TableCell>
                  <TableCell className="text-muted-foreground">{d.size}</TableCell>
                  <TableCell><Badge className={d.status === "Active" ? "bg-success/10 text-success border-success/20" : d.status === "Draft" ? "bg-warning/10 text-warning border-warning/20" : "bg-muted text-muted-foreground border-border"}>{d.status}</Badge></TableCell>
                  <TableCell><Button variant="ghost" size="icon"><Download className="w-4 h-4" /></Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
