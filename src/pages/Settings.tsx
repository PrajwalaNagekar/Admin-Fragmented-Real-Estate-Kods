import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Mail, MessageSquare, BarChart3, FileSignature } from "lucide-react";
import { integrations } from "@/data/mockData";

const iconMap: Record<string, React.ElementType> = { CreditCard, Mail, MessageSquare, BarChart3, FileSignature };

export default function SettingsPage() {
  return (
    <Tabs defaultValue="general" className="space-y-6">
      <TabsList className="bg-muted">
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
        <TabsTrigger value="platform">Platform</TabsTrigger>
        <TabsTrigger value="integrations">Integrations</TabsTrigger>
      </TabsList>

      <TabsContent value="general">
        <Card className="bg-card border-border">
          <CardHeader><CardTitle className="text-base">General Settings</CardTitle></CardHeader>
          <CardContent className="space-y-4 max-w-lg">
            <div className="space-y-2"><Label>Platform Name</Label><Input defaultValue="One Property" className="bg-muted" /></div>
            <div className="space-y-2"><Label>Contact Email</Label><Input defaultValue="admin@oneproperty.in" className="bg-muted" /></div>
            <div className="space-y-2"><Label>Support Phone</Label><Input defaultValue="+91 80 4567 8901" className="bg-muted" /></div>
            <Button>Save Changes</Button>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="security">
        <Card className="bg-card border-border">
          <CardHeader><CardTitle className="text-base">Security Settings</CardTitle></CardHeader>
          <CardContent className="space-y-4 max-w-lg">
            <div className="flex items-center justify-between"><div><p className="text-sm font-medium">Two-Factor Authentication</p><p className="text-xs text-muted-foreground">Add extra security to your account</p></div><Switch /></div>
            <div className="flex items-center justify-between"><div><p className="text-sm font-medium">Session Timeout</p><p className="text-xs text-muted-foreground">Auto logout after inactivity</p></div><Switch defaultChecked /></div>
            <Button variant="outline">Change Password</Button>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="notifications">
        <Card className="bg-card border-border">
          <CardHeader><CardTitle className="text-base">Notification Preferences</CardTitle></CardHeader>
          <CardContent className="space-y-4 max-w-lg">
            {["Email Notifications", "SMS Alerts", "Push Notifications", "KYC Updates", "Transaction Alerts"].map(n => (
              <div key={n} className="flex items-center justify-between"><p className="text-sm">{n}</p><Switch defaultChecked /></div>
            ))}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="platform">
        <Card className="bg-card border-border">
          <CardHeader><CardTitle className="text-base">Platform Configuration</CardTitle></CardHeader>
          <CardContent className="space-y-4 max-w-lg">
            <div className="flex items-center justify-between"><div><p className="text-sm font-medium">Maintenance Mode</p><p className="text-xs text-muted-foreground">Temporarily disable the platform</p></div><Switch /></div>
            <div className="flex items-center justify-between"><div><p className="text-sm font-medium">User Registration</p><p className="text-xs text-muted-foreground">Allow new user sign-ups</p></div><Switch defaultChecked /></div>
            <div className="space-y-2"><Label>Max Properties per User</Label><Input type="number" defaultValue="10" className="bg-muted" /></div>
            <Button>Save Configuration</Button>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="integrations">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {integrations.map(i => {
            const Icon = iconMap[i.icon] || BarChart3;
            return (
              <Card key={i.id} className="bg-card border-border">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center"><Icon className="w-5 h-5 text-primary" /></div>
                      <div>
                        <CardTitle className="text-sm">{i.name}</CardTitle>
                        <Badge className={i.status === "Connected" ? "bg-success/10 text-success border-success/20 mt-1" : "bg-muted text-muted-foreground border-border mt-1"}>{i.status}</Badge>
                      </div>
                    </div>
                    <Switch checked={i.status === "Connected"} />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">{i.description}</p>
                  <p className="text-xs text-muted-foreground mt-2">Last sync: {i.lastSync}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </TabsContent>
    </Tabs>
  );
}
