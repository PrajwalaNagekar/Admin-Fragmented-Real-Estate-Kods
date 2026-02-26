import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { FileBarChart, Users, Building2, Download } from "lucide-react";
import { chartData } from "@/data/mockData";

const tooltipStyle = { backgroundColor: "hsl(0,0%,100%)", border: "1px solid hsl(214.3,31.8%,91.4%)", borderRadius: "8px", color: "hsl(222.2,84%,4.9%)" };

const reportTypes = [
  { title: "Financial Report", description: "Revenue, expenses, and profit analysis across all properties", icon: FileBarChart, color: "text-primary" },
  { title: "Property Performance", description: "Occupancy rates, valuation changes, and investment returns", icon: Building2, color: "text-success" },
  { title: "User Activity", description: "User engagement, registration trends, and KYC completion rates", icon: Users, color: "text-info" },
];

export default function Analytics() {
  return (
    <Tabs defaultValue="analytics" className="space-y-6">
      <TabsList className="bg-muted">
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>

      <TabsContent value="analytics">
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card className="bg-card border-border">
              <CardHeader><CardTitle className="text-base">User Engagement</CardTitle></CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={280}>
                  <AreaChart data={chartData.userEngagement}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(214.3,31.8%,91.4%)" />
                    <XAxis dataKey="month" stroke="hsl(215.4,16.3%,46.9%)" fontSize={12} />
                    <YAxis stroke="hsl(215.4,16.3%,46.9%)" fontSize={12} />
                    <Tooltip contentStyle={tooltipStyle} />
                    <Area type="monotone" dataKey="activeUsers" stroke="hsl(215,75%,50%)" fill="hsl(215,75%,50%)" fillOpacity={0.15} strokeWidth={2} name="Active Users" />
                    <Area type="monotone" dataKey="newUsers" stroke="hsl(199,89%,48%)" fill="hsl(199,89%,48%)" fillOpacity={0.15} strokeWidth={2} name="New Users" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader><CardTitle className="text-base">Property Views</CardTitle></CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={chartData.propertyViews}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(214.3,31.8%,91.4%)" />
                    <XAxis dataKey="property" stroke="hsl(215.4,16.3%,46.9%)" fontSize={11} />
                    <YAxis stroke="hsl(215.4,16.3%,46.9%)" fontSize={12} />
                    <Tooltip contentStyle={tooltipStyle} />
                    <Bar dataKey="views" fill="hsl(215,75%,50%)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="reports">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reportTypes.map(r => (
            <Card key={r.title} className="bg-card border-border">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center"><r.icon className={`w-5 h-5 ${r.color}`} /></div>
                  <CardTitle className="text-base">{r.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{r.description}</p>
                <Button variant="outline" size="sm" className="w-full"><Download className="w-4 h-4 mr-1" />Generate Report</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
