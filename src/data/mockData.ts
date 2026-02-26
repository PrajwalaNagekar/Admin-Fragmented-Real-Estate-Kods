// ===== SHARED MOCK DATA (Indian Context) =====

export const users = [
  { id: "USR001", name: "Rajesh Sharma", email: "rajesh@oneproperty.in", role: "Investor", status: "Active", joinDate: "2024-01-15", avatar: "RS", phone: "+91 98765 43210" },
  { id: "USR002", name: "Priya Nair", email: "priya@oneproperty.in", role: "Property Owner", status: "Active", joinDate: "2024-02-20", avatar: "PN", phone: "+91 87654 32109" },
  { id: "USR003", name: "Vikram Patil", email: "vikram@investor.in", role: "Investor", status: "Pending", joinDate: "2024-03-10", avatar: "VP", phone: "+91 76543 21098" },
  { id: "USR004", name: "Ananya Desai", email: "ananya@oneproperty.in", role: "Admin", status: "Active", joinDate: "2023-11-05", avatar: "AD", phone: "+91 65432 10987" },
  { id: "USR005", name: "Suresh Hegde", email: "suresh@investor.in", role: "Investor", status: "Active", joinDate: "2024-04-01", avatar: "SH", phone: "+91 54321 09876" },
  { id: "USR006", name: "Kavitha Rao", email: "kavitha@owner.in", role: "Property Owner", status: "Suspended", joinDate: "2024-01-22", avatar: "KR", phone: "+91 43210 98765" },
  { id: "USR007", name: "Arjun Shetty", email: "arjun@investor.in", role: "Investor", status: "Active", joinDate: "2024-05-15", avatar: "AS", phone: "+91 32109 87654" },
  { id: "USR008", name: "Meera Kulkarni", email: "meera@oneproperty.in", role: "Agent", status: "Active", joinDate: "2024-02-10", avatar: "MK", phone: "+91 21098 76543" },
];

export const properties = [
  { id: "PROP001", name: "Goa Beach Villa", location: "Goa", value: 45000000, ownershipSold: 72, occupancy: 95, status: "Active", image: "/placeholder.svg", fractions: 100, pricePerFraction: 450000, type: "Residential" },
  { id: "PROP002", name: "Sakleshpura Coffee Estate", location: "Sakleshpura", value: 32000000, ownershipSold: 85, occupancy: 88, status: "Active", image: "/placeholder.svg", fractions: 80, pricePerFraction: 400000, type: "Residential" },
  { id: "PROP003", name: "Mangalore Harbour View", location: "Mangalore", value: 28000000, ownershipSold: 60, occupancy: 78, status: "Active", image: "/placeholder.svg", fractions: 70, pricePerFraction: 400000, type: "Commercial" },
  { id: "PROP004", name: "Mumbai Skyline Penthouse", location: "Mumbai", value: 85000000, ownershipSold: 45, occupancy: 100, status: "Coming Soon", image: "/placeholder.svg", fractions: 200, pricePerFraction: 425000, type: "Residential" },
  { id: "PROP005", name: "Bangalore Tech Park Suite", location: "Bangalore", value: 52000000, ownershipSold: 90, occupancy: 92, status: "Active", image: "/placeholder.svg", fractions: 120, pricePerFraction: 433333, type: "Commercial" },
  { id: "PROP006", name: "Udupi Lakeside Retreat", location: "Udupi", value: 18000000, ownershipSold: 55, occupancy: 82, status: "Active", image: "/placeholder.svg", fractions: 150, pricePerFraction: 120000, type: "Residential" },
];

export const kycSubmissions = [
  { id: "KYC001", userId: "USR003", userName: "Vikram Patil", documentType: "Aadhaar Card", submittedDate: "2024-06-01", status: "Pending", notes: "" },
  { id: "KYC002", userId: "USR005", userName: "Suresh Hegde", documentType: "PAN Card", submittedDate: "2024-05-28", status: "In Review", notes: "Verifying address" },
  { id: "KYC003", userId: "USR001", userName: "Rajesh Sharma", documentType: "Passport", submittedDate: "2024-05-15", status: "Approved", notes: "" },
  { id: "KYC004", userId: "USR006", userName: "Kavitha Rao", documentType: "Voter ID", submittedDate: "2024-06-02", status: "Rejected", notes: "Document expired" },
  { id: "KYC005", userId: "USR007", userName: "Arjun Shetty", documentType: "Aadhaar Card", submittedDate: "2024-06-03", status: "Pending", notes: "" },
];

export const transactions = [
  { id: "TXN001", userId: "USR001", userName: "Rajesh Sharma", type: "Buy", amount: 1350000, propertyName: "Goa Beach Villa", date: "2024-06-01", status: "Completed" },
  { id: "TXN002", userId: "USR005", userName: "Suresh Hegde", type: "Buy", amount: 800000, propertyName: "Sakleshpura Coffee Estate", date: "2024-05-30", status: "Completed" },
  { id: "TXN003", userId: "USR007", userName: "Arjun Shetty", type: "Sell", amount: 450000, propertyName: "Mangalore Harbour View", date: "2024-05-28", status: "Processing" },
  { id: "TXN004", userId: "USR001", userName: "Rajesh Sharma", type: "Dividend", amount: 32000, propertyName: "Goa Beach Villa", date: "2024-05-25", status: "Completed" },
  { id: "TXN005", userId: "USR002", userName: "Priya Nair", type: "Buy", amount: 2000000, propertyName: "Mumbai Skyline Penthouse", date: "2024-06-02", status: "Pending" },
  { id: "TXN006", userId: "USR005", userName: "Suresh Hegde", type: "Dividend", amount: 18000, propertyName: "Sakleshpura Coffee Estate", date: "2024-05-20", status: "Completed" },
];

export const leads = [
  { id: "LEAD001", name: "Deepak Bhandary", email: "deepak@email.com", interest: "Goa Beach Villa", source: "Website", status: "New", date: "2024-06-03" },
  { id: "LEAD002", name: "Sneha Kamath", email: "sneha@email.com", interest: "Mumbai Skyline Penthouse", source: "Referral", status: "Contacted", date: "2024-06-02" },
  { id: "LEAD003", name: "Ravi Kumar", email: "ravi@email.com", interest: "Sakleshpura Coffee Estate", source: "Social Media", status: "Qualified", date: "2024-06-01" },
  { id: "LEAD004", name: "Lakshmi Menon", email: "lakshmi@email.com", interest: "Bangalore Tech Park Suite", source: "Website", status: "Negotiating", date: "2024-05-30" },
  { id: "LEAD005", name: "Ganesh Prabhu", email: "ganesh@email.com", interest: "Udupi Lakeside Retreat", source: "Event", status: "New", date: "2024-06-03" },
];

export const agents = [
  { id: "AGT001", name: "Meera Kulkarni", photo: "MK", propertiesManaged: 8, rating: 4.8, commission: 1250000, email: "meera@oneproperty.in", phone: "+91 21098 76543", status: "Active" },
  { id: "AGT002", name: "Harish Pai", photo: "HP", propertiesManaged: 12, rating: 4.6, commission: 1980000, email: "harish@oneproperty.in", phone: "+91 90123 45678", status: "Active" },
  { id: "AGT003", name: "Nandini Gowda", photo: "NG", propertiesManaged: 6, rating: 4.9, commission: 890000, email: "nandini@oneproperty.in", phone: "+91 80123 45679", status: "Active" },
  { id: "AGT004", name: "Arun Mallya", photo: "AM", propertiesManaged: 10, rating: 4.5, commission: 1560000, email: "arun@oneproperty.in", phone: "+91 70123 45680", status: "On Leave" },
];

export const maintenanceRequests = [
  { id: "MNT001", property: "Goa Beach Villa", unit: "Villa 12", issue: "AC not working", priority: "High", status: "Open", date: "2024-06-03", assignedTo: "CoolTech Services" },
  { id: "MNT002", property: "Sakleshpura Coffee Estate", unit: "Cottage 8", issue: "Water leak in bathroom", priority: "High", status: "In Progress", date: "2024-06-02", assignedTo: "PlumbFix India" },
  { id: "MNT003", property: "Mangalore Harbour View", unit: "Suite 501", issue: "Elevator maintenance", priority: "Medium", status: "Scheduled", date: "2024-06-01", assignedTo: "LiftPro India" },
  { id: "MNT004", property: "Udupi Lakeside Retreat", unit: "Cabin 3", issue: "Paint touch-up needed", priority: "Low", status: "Open", date: "2024-05-30", assignedTo: "" },
  { id: "MNT005", property: "Goa Beach Villa", unit: "Villa 6", issue: "Broken window latch", priority: "Medium", status: "Completed", date: "2024-05-28", assignedTo: "GlassFix Goa" },
];

export const documents = [
  { id: "DOC001", name: "Goa Beach Villa - Sale Agreement", type: "Contract", property: "Goa Beach Villa", uploadDate: "2024-05-15", status: "Active", size: "2.4 MB" },
  { id: "DOC002", name: "Sakleshpura Coffee Estate - Title Deed", type: "Deed", property: "Sakleshpura Coffee Estate", uploadDate: "2024-04-20", status: "Active", size: "1.8 MB" },
  { id: "DOC003", name: "Q1 2024 Financial Report", type: "Report", property: "All Properties", uploadDate: "2024-04-01", status: "Active", size: "5.2 MB" },
  { id: "DOC004", name: "Mumbai Skyline Penthouse - Inspection Report", type: "Report", property: "Mumbai Skyline Penthouse", uploadDate: "2024-06-01", status: "Draft", size: "3.1 MB" },
  { id: "DOC005", name: "Mangalore Harbour View - Lease Agreement", type: "Contract", property: "Mangalore Harbour View", uploadDate: "2024-03-10", status: "Expired", size: "2.0 MB" },
];

export const announcements = [
  { id: "ANN001", title: "Platform Maintenance Scheduled", message: "The platform will undergo maintenance on June 10th from 2 AM to 6 AM IST.", date: "2024-06-03", audience: "All Users", status: "Active" },
  { id: "ANN002", title: "New Property Listed: Mumbai Skyline Penthouse", message: "Exciting new investment opportunity! Mumbai Skyline Penthouse is now available for fractional ownership.", date: "2024-06-01", audience: "Investors", status: "Active" },
  { id: "ANN003", title: "Dividend Payout Complete", message: "Q1 2024 dividend payouts have been processed for all eligible investors.", date: "2024-05-25", audience: "Investors", status: "Archived" },
];

export const supportTickets = [
  { id: "TKT001", userId: "USR001", userName: "Rajesh Sharma", subject: "Cannot access investment dashboard", priority: "High", status: "Open", date: "2024-06-03", category: "Technical" },
  { id: "TKT002", userId: "USR003", userName: "Vikram Patil", subject: "KYC verification taking too long", priority: "Medium", status: "In Progress", date: "2024-06-02", category: "KYC" },
  { id: "TKT003", userId: "USR005", userName: "Suresh Hegde", subject: "Dividend payment not received", priority: "High", status: "Open", date: "2024-06-01", category: "Financial" },
  { id: "TKT004", userId: "USR007", userName: "Arjun Shetty", subject: "How to sell my fractions?", priority: "Low", status: "Resolved", date: "2024-05-28", category: "General" },
];

export const auditLogs = [
  { id: "LOG001", timestamp: "2024-06-03 14:30:22", user: "Ananya Desai", action: "User Role Updated", details: "Changed role of USR003 from Pending to Investor", ip: "192.168.1.45", module: "User Management", severity: "Medium" },
  { id: "LOG002", timestamp: "2024-06-03 13:15:08", user: "System", action: "KYC Auto-Check", details: "Initiated automated KYC verification for KYC005 — Arjun Shetty", ip: "10.0.0.1", module: "KYC", severity: "Low" },
  { id: "LOG003", timestamp: "2024-06-03 11:42:33", user: "Ananya Desai", action: "Property Published", details: "Published Mumbai Skyline Penthouse listing with ₹8.5Cr valuation", ip: "192.168.1.45", module: "Properties", severity: "High" },
  { id: "LOG004", timestamp: "2024-06-02 16:20:11", user: "Meera Kulkarni", action: "Document Uploaded", details: "Uploaded inspection report for Mumbai Skyline Penthouse", ip: "192.168.2.30", module: "Documents", severity: "Low" },
  { id: "LOG005", timestamp: "2024-06-02 10:05:44", user: "System", action: "Dividend Processed", details: "Processed Q1 dividends for Goa Beach Villa investors — ₹3.2L distributed", ip: "10.0.0.1", module: "Financials", severity: "High" },
  { id: "LOG006", timestamp: "2024-06-01 09:30:00", user: "Ananya Desai", action: "Settings Updated", details: "Updated platform notification settings — enabled SMS alerts", ip: "192.168.1.45", module: "Settings", severity: "Low" },
  { id: "LOG007", timestamp: "2024-06-01 08:15:30", user: "Harish Pai", action: "Lead Assigned", details: "Assigned lead LEAD003 (Ravi Kumar) to agent Nandini Gowda", ip: "192.168.3.12", module: "Sales & Leads", severity: "Medium" },
  { id: "LOG008", timestamp: "2024-05-31 17:45:10", user: "System", action: "Backup Completed", details: "Daily database backup completed successfully — 2.4 GB archived", ip: "10.0.0.1", module: "System", severity: "Low" },
  { id: "LOG009", timestamp: "2024-05-31 14:22:05", user: "Rajesh Sharma", action: "Transaction Initiated", details: "Buy order for 3 fractions of Goa Beach Villa — ₹13.5L", ip: "103.45.67.89", module: "Transactions", severity: "High" },
  { id: "LOG010", timestamp: "2024-05-31 11:10:33", user: "System", action: "Security Alert", details: "Multiple failed login attempts detected for user USR006 — account temporarily locked", ip: "182.73.45.12", module: "Security", severity: "Critical" },
  { id: "LOG011", timestamp: "2024-05-30 16:00:00", user: "Ananya Desai", action: "User Suspended", details: "Suspended user USR006 (Kavitha Rao) — policy violation", ip: "192.168.1.45", module: "User Management", severity: "High" },
  { id: "LOG012", timestamp: "2024-05-30 10:30:15", user: "Nandini Gowda", action: "Maintenance Created", details: "Created maintenance request MNT004 for Udupi Lakeside Retreat — paint touch-up", ip: "192.168.4.22", module: "Maintenance", severity: "Low" },
  { id: "LOG013", timestamp: "2024-05-29 09:05:00", user: "System", action: "API Rate Limit", details: "Rate limit threshold reached for payment gateway API — 500 requests/min", ip: "10.0.0.1", module: "System", severity: "Medium" },
  { id: "LOG014", timestamp: "2024-05-28 15:40:22", user: "Priya Nair", action: "Property Updated", details: "Updated occupancy details for Sakleshpura Coffee Estate — 88% occupied", ip: "103.22.33.44", module: "Properties", severity: "Low" },
  { id: "LOG015", timestamp: "2024-05-28 08:20:00", user: "System", action: "Scheduled Report", details: "Weekly analytics report generated and emailed to admin team", ip: "10.0.0.1", module: "Reports", severity: "Low" },
];

export const integrations = [
  { id: "INT001", name: "Razorpay Payments", description: "Payment processing for property transactions", status: "Connected", icon: "CreditCard", lastSync: "2024-06-03" },
  { id: "INT002", name: "SendGrid Email", description: "Email notifications and marketing campaigns", status: "Connected", icon: "Mail", lastSync: "2024-06-03" },
  { id: "INT003", name: "MSG91 SMS", description: "SMS notifications and OTP verification", status: "Connected", icon: "MessageSquare", lastSync: "2024-06-02" },
  { id: "INT004", name: "Google Analytics", description: "Website traffic and user behavior tracking", status: "Disconnected", icon: "BarChart3", lastSync: "2024-05-15" },
  { id: "INT005", name: "DigiLocker", description: "Digital document verification for KYC", status: "Connected", icon: "FileSignature", lastSync: "2024-06-01" },
];

export const chartData = {
  portfolioValue: [
    { month: "Jan", value: 82000000 },
    { month: "Feb", value: 91000000 },
    { month: "Mar", value: 98000000 },
    { month: "Apr", value: 105000000 },
    { month: "May", value: 112000000 },
    { month: "Jun", value: 125000000 },
  ],
  occupancyRate: [
    { name: "Occupied", value: 85 },
    { name: "Vacant", value: 15 },
  ],
  revenue: [
    { month: "Jan", revenue: 3200000 },
    { month: "Feb", revenue: 3800000 },
    { month: "Mar", revenue: 4100000 },
    { month: "Apr", revenue: 4500000 },
    { month: "May", revenue: 5200000 },
    { month: "Jun", revenue: 5800000 },
  ],
  userEngagement: [
    { month: "Jan", activeUsers: 800, newUsers: 120 },
    { month: "Feb", activeUsers: 920, newUsers: 150 },
    { month: "Mar", activeUsers: 980, newUsers: 130 },
    { month: "Apr", activeUsers: 1050, newUsers: 160 },
    { month: "May", activeUsers: 1150, newUsers: 180 },
    { month: "Jun", activeUsers: 1240, newUsers: 200 },
  ],
  propertyViews: [
    { property: "Goa Villa", views: 12500 },
    { property: "Sakleshpura", views: 10200 },
    { property: "Mumbai", views: 18500 },
    { property: "Mangalore", views: 7800 },
    { property: "Bangalore", views: 15200 },
    { property: "Udupi", views: 9100 },
  ],
};
