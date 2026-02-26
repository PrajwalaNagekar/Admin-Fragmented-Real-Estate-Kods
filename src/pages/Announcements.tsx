import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Megaphone } from "lucide-react";
import { announcements } from "@/data/mockData";

export default function Announcements() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div />
        <Button size="sm"><Plus className="w-4 h-4 mr-1" />Create Announcement</Button>
      </div>
      {announcements.map(a => (
        <Card key={a.id} className="bg-card border-border">
          <CardHeader className="pb-2">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center"><Megaphone className="w-4 h-4 text-primary" /></div>
                <div>
                  <CardTitle className="text-base">{a.title}</CardTitle>
                  <p className="text-xs text-muted-foreground mt-0.5">{a.date} · {a.audience}</p>
                </div>
              </div>
              <Badge className={a.status === "Active" ? "bg-success/10 text-success border-success/20" : "bg-muted text-muted-foreground border-border"}>{a.status}</Badge>
            </div>
          </CardHeader>
          <CardContent><p className="text-sm text-muted-foreground">{a.message}</p></CardContent>
        </Card>
      ))}
    </div>
  );
}
