import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { chartData } from "@/data/mockData";

const payouts = [
  { id: "PAY001", recipient: "Rajesh Sharma", amount: 32000, property: "Goa Beach Villa", date: "2024-05-25", status: "Completed" },
  { id: "PAY002", recipient: "Suresh Hegde", amount: 18000, property: "Sakleshpura Coffee Estate", date: "2024-05-20", status: "Completed" },
  { id: "PAY003", recipient: "Priya Nair", amount: 55000, property: "Bangalore Tech Park Suite", date: "2024-06-01", status: "Pending" },
];

export default function Financials() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-card border-border"><CardContent className="p-5"><p className="text-sm text-muted-foreground">Monthly Revenue</p><p className="text-2xl font-bold mt-1">₹58L</p></CardContent></Card>
        <Card className="bg-card border-border"><CardContent className="p-5"><p className="text-sm text-muted-foreground">Total Earnings</p><p className="text-2xl font-bold mt-1">₹2.66 Cr</p></CardContent></Card>
        <Card className="bg-card border-border"><CardContent className="p-5"><p className="text-sm text-muted-foreground">Pending Payouts</p><p className="text-2xl font-bold mt-1">₹55,000</p></CardContent></Card>
      </div>
      <Card className="bg-card border-border">
        <CardHeader><CardTitle className="text-base">Revenue Trend</CardTitle></CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={chartData.revenue}>
              <defs><linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="hsl(215,75%,50%)" stopOpacity={0.3} /><stop offset="95%" stopColor="hsl(215,75%,50%)" stopOpacity={0} /></linearGradient></defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214.3,31.8%,91.4%)" />
              <XAxis dataKey="month" stroke="hsl(215.4,16.3%,46.9%)" fontSize={12} />
              <YAxis stroke="hsl(215.4,16.3%,46.9%)" fontSize={12} tickFormatter={(v) => `₹${v / 100000}L`} />
              <Tooltip contentStyle={{ backgroundColor: "hsl(0,0%,100%)", border: "1px solid hsl(214.3,31.8%,91.4%)", borderRadius: "8px", color: "hsl(222.2,84%,4.9%)" }} />
              <Area type="monotone" dataKey="revenue" stroke="hsl(215,75%,50%)" fillOpacity={1} fill="url(#colorRev)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card className="bg-card border-border">
        <CardHeader><CardTitle className="text-base">Recent Payouts</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader><TableRow><TableHead>Recipient</TableHead><TableHead>Amount</TableHead><TableHead>Property</TableHead><TableHead>Date</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
            <TableBody>
              {payouts.map(p => (
                <TableRow key={p.id}>
                  <TableCell className="font-medium">{p.recipient}</TableCell>
                  <TableCell>₹{p.amount.toLocaleString('en-IN')}</TableCell>
                  <TableCell className="text-muted-foreground">{p.property}</TableCell>
                  <TableCell className="text-muted-foreground">{p.date}</TableCell>
                  <TableCell><span className={`text-xs font-medium ${p.status === "Completed" ? "text-success" : "text-warning"}`}>{p.status}</span></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
