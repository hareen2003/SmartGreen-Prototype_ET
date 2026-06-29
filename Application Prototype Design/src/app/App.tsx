import { useState, useRef } from "react";
import {
  LayoutDashboard,
  AlertTriangle,
  Map,
  Radio,
  ShieldCheck,
  Smartphone,
  Leaf,
  ChevronRight,
  Plus,
  Upload,
  TrendingUp,
  Thermometer,
  Droplets,
  Wind,
  Trash2,
  Bell,
  CheckCircle,
  Clock,
  Activity,
  Users,
  BarChart3,
  Moon,
  Download,
  FileText,
  ArrowLeft,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type Screen = "dashboard" | "report" | "map" | "sensors" | "admin" | "mobile" | "summary";

const NAV_ITEMS: { id: Screen; label: string; icon: React.FC<{ className?: string }> }[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "report", label: "Report Issue", icon: AlertTriangle },
  { id: "map", label: "Map Tracker", icon: Map },
  { id: "sensors", label: "Sensor Monitor", icon: Radio },
  { id: "admin", label: "Admin Panel", icon: ShieldCheck },
  { id: "mobile", label: "Mobile UI", icon: Smartphone },
];

function Badge({ children, variant = "default" }: { children: React.ReactNode; variant?: "default" | "urgent" | "progress" | "new" | "resolved" }) {
  const cls = {
    default: "bg-muted text-muted-foreground",
    urgent: "bg-red-100 text-red-700 border border-red-200",
    progress: "bg-amber-100 text-amber-700 border border-amber-200",
    new: "bg-blue-100 text-blue-700 border border-blue-200",
    resolved: "bg-green-100 text-green-700 border border-green-200",
  }[variant];
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${cls}`}>
      {children}
    </span>
  );
}

function StatCard({ label, value, sub, icon: Icon, accent }: { label: string; value: string; sub: string; icon: React.FC<{ className?: string }>; accent?: string }) {
  return (
    <div className="bg-card rounded-2xl p-5 shadow-sm border border-border flex flex-col gap-2 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <p className="text-sm text-muted-foreground font-medium">{label}</p>
        <div className={`p-2 rounded-xl ${accent ?? "bg-accent"}`}>
          <Icon className="w-4 h-4 text-primary" />
        </div>
      </div>
      <p className="text-3xl font-bold text-foreground">{value}</p>
      <p className="text-xs text-muted-foreground">{sub}</p>
    </div>
  );
}

function SectionHeader({ title, subtitle, action }: { title: string; subtitle: string; action?: React.ReactNode }) {
  return (
    <div className="flex items-start justify-between mb-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-card rounded-2xl shadow-sm border border-border ${className}`}>
      {children}
    </div>
  );
}

// ── Dashboard ──────────────────────────────────────────────────────────────

function DashboardScreen({ onNavigate }: { onNavigate: (screen: Screen) => void }) {
  const reports = [
    { title: "Illegal dumping near canal", loc: "Maharagama sector 3", status: "new" as const },
    { title: "Smoke from small factory area", loc: "Kolonnawa industrial lane", status: "progress" as const },
    { title: "Overflowing smart bin alert", loc: "School road junction", status: "urgent" as const },
  ];
  return (
    <div className="space-y-6">
      <SectionHeader
        title="Citizen Dashboard"
        subtitle="Overview of environmental reports, alerts, and quick actions."
        action={
          <div className="flex gap-2">
            <button
              onClick={() => onNavigate("report")}
              className="flex items-center gap-1.5 text-sm text-primary font-medium hover:underline"
            >
              <Plus className="w-4 h-4" /> New Report
            </button>
            <button
              onClick={() => onNavigate("summary")}
              className="px-3 py-1.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-lg hover:bg-accent transition-colors border border-border flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" /> Export Summary
            </button>
          </div>
        }
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard label="Total reports this week" value="126" sub="18% increase from last week" icon={BarChart3} />
        <StatCard label="Urgent unresolved cases" value="14" sub="Needs authority attention" icon={AlertTriangle} accent="bg-red-100" />
        <StatCard label="Average response time" value="3.2h" sub="From report to case review" icon={Clock} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-5">
          <h3 className="font-semibold text-foreground mb-4">Recent community reports</h3>
          <ul className="space-y-3">
            {reports.map((r, i) => (
              <li key={i} className="flex items-start justify-between gap-3 py-2 border-b border-border last:border-0">
                <div>
                  <p className="text-sm font-semibold text-foreground">{r.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{r.loc}</p>
                </div>
                <Badge variant={r.status}>{r.status === "new" ? "New" : r.status === "progress" ? "In progress" : "Urgent"}</Badge>
              </li>
            ))}
          </ul>
        </Card>
        <Card className="p-5">
          <h3 className="font-semibold text-foreground mb-2">Issue type trends</h3>
          <p className="text-xs text-muted-foreground mb-4">Waste, smoke, drainage, noise, water pollution</p>
          <div className="space-y-2">
            {[
              { label: "Waste / Dumping", pct: 42, color: "bg-red-400" },
              { label: "Smoke / Air", pct: 28, color: "bg-amber-400" },
              { label: "Drainage", pct: 18, color: "bg-blue-400" },
              { label: "Noise", pct: 8, color: "bg-purple-400" },
              { label: "Water pollution", pct: 4, color: "bg-teal-400" },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                  <span>{item.label}</span>
                  <span>{item.pct}%</span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

// ── Report Issue ───────────────────────────────────────────────────────────

function ReportScreen(_: { onNavigate: (screen: Screen) => void }) {
  const [category, setCategory] = useState("Illegal waste dumping");
  const [location, setLocation] = useState("Maharagama - Lake Road");
  const [description, setDescription] = useState("Large waste pile near the canal causing bad smell and blocked roadside access.");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="space-y-6">
      <SectionHeader
        title="Report an Issue"
        subtitle="Form screen mockup for citizens to submit environmental incidents."
        action={
          <button className="px-3 py-1.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-lg border border-border hover:bg-accent transition-colors">
            AI Preview
          </button>
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-5 space-y-4">
          <h3 className="font-semibold text-foreground">Submit Report</h3>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Issue category</label>
            <select
              className="w-full rounded-xl border border-border bg-muted px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Illegal waste dumping</option>
              <option>Smoke / Air pollution</option>
              <option>Drainage blockage</option>
              <option>Noise pollution</option>
              <option>Water contamination</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Location</label>
            <input
              className="w-full rounded-xl border border-border bg-muted px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Description</label>
            <textarea
              rows={4}
              className="w-full rounded-xl border border-border bg-muted px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Upload image</label>
            <label className="flex items-center gap-2 cursor-pointer px-4 py-2 rounded-xl border-2 border-dashed border-border hover:border-primary/50 transition-colors text-sm text-muted-foreground">
              <Upload className="w-4 h-4" />
              <span>Choose file or drag &amp; drop</span>
              <input type="file" className="hidden" />
            </label>
          </div>
          <button
            onClick={() => setSubmitted(true)}
            className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
          >
            {submitted ? <><CheckCircle className="w-4 h-4" /> Submitted!</> : "Submit Report"}
          </button>
        </Card>

        <Card className="p-5 space-y-4">
          <h3 className="font-semibold text-foreground">AI Classification Result</h3>
          <p className="text-xs text-muted-foreground">The uploaded image is automatically categorized by the AI module.</p>
          <div className="space-y-3">
            {[
              { label: "Predicted type", value: "Garbage overflow / illegal dumping", sub: "92% confidence", badge: null },
              { label: "Severity", value: "High priority", sub: "Due to public-health risk", badge: "urgent" as const },
              { label: "Suggested action", value: "Notify local authority and sanitation team", sub: "Auto-routed", badge: "resolved" as const },
            ].map((item) => (
              <div key={item.label} className="p-3 rounded-xl bg-muted/60 border border-border">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <p className="text-xs font-semibold text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{item.value}</p>
                    <p className="text-xs text-muted-foreground">{item.sub}</p>
                  </div>
                  {item.badge && <Badge variant={item.badge}>{item.badge === "urgent" ? "Urgent" : "Auto-routed"}</Badge>}
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 rounded-xl bg-primary/5 border border-primary/20">
            <p className="text-xs text-primary font-medium">AI model: SmartGreen-v2.1</p>
            <p className="text-xs text-muted-foreground">Last updated 2 minutes ago</p>
          </div>
        </Card>
      </div>
    </div>
  );
}

// ── Map Tracker ────────────────────────────────────────────────────────────

function MapScreen(_: { onNavigate: (screen: Screen) => void }) {
  const pins = [
    { x: 30, y: 25, color: "bg-red-500", label: "Illegal dumping" },
    { x: 55, y: 45, color: "bg-red-500", label: "Overflow bin" },
    { x: 70, y: 30, color: "bg-amber-500", label: "Smoke complaint" },
    { x: 20, y: 60, color: "bg-red-500", label: "Drainage block" },
    { x: 45, y: 70, color: "bg-blue-400", label: "Air sensor AQ-03" },
    { x: 80, y: 65, color: "bg-blue-400", label: "Sensor zone" },
  ];
  return (
    <div className="space-y-6">
      <SectionHeader
        title="Map-based Tracker"
        subtitle="Visual screen for issue locations and severity hotspots."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <Card className="overflow-hidden">
            <div className="relative bg-gradient-to-br from-green-100 via-teal-50 to-blue-100 h-80">
              {/* Grid lines */}
              <svg className="absolute inset-0 w-full h-full opacity-20">
                {Array.from({ length: 8 }).map((_, i) => (
                  <line key={`h${i}`} x1="0" y1={`${(i / 8) * 100}%`} x2="100%" y2={`${(i / 8) * 100}%`} stroke="#6b7280" strokeWidth="1" />
                ))}
                {Array.from({ length: 10 }).map((_, i) => (
                  <line key={`v${i}`} x1={`${(i / 10) * 100}%`} y1="0" x2={`${(i / 10) * 100}%`} y2="100%" stroke="#6b7280" strokeWidth="1" />
                ))}
              </svg>
              {/* Heat zones */}
              <div className="absolute rounded-full bg-red-400/20 w-32 h-24 top-[20%] left-[25%] blur-xl" />
              <div className="absolute rounded-full bg-amber-400/20 w-24 h-20 top-[35%] left-[50%] blur-lg" />
              <div className="absolute rounded-full bg-blue-400/20 w-28 h-28 top-[50%] left-[60%] blur-xl" />
              {/* Pins */}
              {pins.map((pin, i) => (
                <div
                  key={i}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                  style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                >
                  <div className={`w-3.5 h-3.5 rounded-full ${pin.color} shadow-lg border-2 border-white ring-2 ring-white/50 animate-pulse`} />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block whitespace-nowrap bg-foreground text-background text-xs px-2 py-1 rounded-lg">
                    {pin.label}
                  </div>
                </div>
              ))}
              <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-xl p-2 text-xs text-muted-foreground">
                Maharagama District · Sri Lanka
              </div>
            </div>
          </Card>
        </div>
        <div className="space-y-3">
          <Card className="p-4">
            <h3 className="font-semibold text-foreground text-sm mb-3">Map Legend</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <span className="mt-1 w-3 h-3 rounded-full bg-red-500 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Red pins</p>
                  <p className="text-xs text-muted-foreground">Urgent cases</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 w-3 h-3 rounded-full bg-blue-400 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Blue zone</p>
                  <p className="text-xs text-muted-foreground">Sensor-supported areas</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 w-3 h-3 rounded-full bg-amber-400 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Heat regions</p>
                  <p className="text-xs text-muted-foreground">Frequent complaint hotspots</p>
                </div>
              </li>
            </ul>
          </Card>
          <Card className="p-4">
            <h3 className="font-semibold text-foreground text-sm mb-3">Active Incidents</h3>
            <div className="space-y-2">
              {[
                { n: "6", label: "Total active pins" },
                { n: "3", label: "Urgent (red)" },
                { n: "2", label: "Sensor zones (blue)" },
                { n: "1", label: "In-progress (amber)" },
              ].map((s) => (
                <div key={s.label} className="flex justify-between text-xs">
                  <span className="text-muted-foreground">{s.label}</span>
                  <span className="font-bold text-foreground">{s.n}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

// ── Sensor Monitor ─────────────────────────────────────────────────────────

function SensorScreen(_: { onNavigate: (screen: Screen) => void }) {
  const activity = [
    { id: "Station AQ-03", desc: "PM level increased in the last 30 minutes", status: "Monitor" },
    { id: "Bin SN-09", desc: "Reached 87% fill level at school road", status: "Action" },
    { id: "Drain sensor DR-04", desc: "Water blockage indicator triggered", status: "New" },
  ];
  return (
    <div className="space-y-6">
      <SectionHeader
        title="Sensor Monitoring UI"
        subtitle="IoT dashboard screen for air quality and smart-bin status."
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard label="Air Quality Index" value="68" sub="Moderate near industrial area" icon={Wind} accent="bg-amber-100" />
        <StatCard label="Smart Bin Fill Level" value="87%" sub="Collection recommended soon" icon={Trash2} accent="bg-red-100" />
        <StatCard label="Temperature Alert" value="31°C" sub="Normal range for outdoor zone" icon={Thermometer} accent="bg-blue-100" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-5">
          <h3 className="font-semibold text-foreground mb-4">Recent Sensor Activity</h3>
          <ul className="space-y-3">
            {activity.map((a, i) => (
              <li key={i} className="flex items-start justify-between gap-3 py-2 border-b border-border last:border-0">
                <div>
                  <p className="text-sm font-semibold text-foreground">{a.id}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{a.desc}</p>
                </div>
                <Badge variant={a.status === "Action" ? "urgent" : a.status === "New" ? "new" : "default"}>
                  {a.status}
                </Badge>
              </li>
            ))}
          </ul>
        </Card>
        <Card className="p-5">
          <h3 className="font-semibold text-foreground mb-4">Sensor Health</h3>
          <div className="space-y-3">
            {[
              { name: "AQ Station Network", val: 94, color: "bg-green-500" },
              { name: "Smart Bin Sensors", val: 78, color: "bg-amber-400" },
              { name: "Drain Monitors", val: 60, color: "bg-red-400" },
              { name: "Temperature Nodes", val: 100, color: "bg-green-500" },
            ].map((s) => (
              <div key={s.name}>
                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                  <span>{s.name}</span>
                  <span className="font-semibold">{s.val}% online</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className={`h-full ${s.color} rounded-full`} style={{ width: `${s.val}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
            <Activity className="w-3.5 h-3.5 text-primary" />
            Last sync: 2 minutes ago
          </div>
        </Card>
      </div>
    </div>
  );
}

// ── Admin Panel ────────────────────────────────────────────────────────────

function AdminScreen(_: { onNavigate: (screen: Screen) => void }) {
  const [cases, setCases] = useState([
    { id: "SG-1042", desc: "Illegal dumping - high severity", action: "Assign", status: "new" as const },
    { id: "SG-1038", desc: "Smoke complaint - medium severity", action: "Review", status: "progress" as const },
    { id: "SG-1029", desc: "Drain blockage - urgent", action: "Resolve", status: "urgent" as const },
  ]);

  return (
    <div className="space-y-6">
      <SectionHeader
        title="Admin Management Panel"
        subtitle="Authority interface for reviewing, assigning, and resolving cases."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-5">
          <h3 className="font-semibold text-foreground mb-4">Case Queue</h3>
          <ul className="space-y-3">
            {cases.map((c, i) => (
              <li key={c.id} className="flex items-center justify-between gap-3 py-2 border-b border-border last:border-0">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-foreground">Case #{c.id}</p>
                    <Badge variant={c.status}>{c.status === "new" ? "New" : c.status === "progress" ? "In progress" : "Urgent"}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{c.desc}</p>
                </div>
                <button
                  onClick={() => setCases((prev) => prev.filter((_, j) => j !== i))}
                  className="px-3 py-1.5 text-xs font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
                >
                  {c.action}
                </button>
              </li>
            ))}
            {cases.length === 0 && (
              <li className="text-sm text-muted-foreground py-4 text-center">All cases handled!</li>
            )}
          </ul>
        </Card>
        <Card className="p-5">
          <h3 className="font-semibold text-foreground mb-4">Performance Analytics</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Resolved cases", value: "82", sub: "This month", icon: CheckCircle, color: "text-green-600" },
              { label: "Avg resolution time", value: "7.4h", sub: "Per case", icon: Clock, color: "text-amber-600" },
              { label: "Top hotspot", value: "Canal", sub: "Canal-side ward", icon: Map, color: "text-red-600" },
              { label: "Citizen satisfaction", value: "89%", sub: "Feedback score", icon: Users, color: "text-blue-600" },
            ].map((s) => (
              <div key={s.label} className="p-3 rounded-xl bg-muted/50 border border-border">
                <s.icon className={`w-4 h-4 ${s.color} mb-1.5`} />
                <p className="text-lg font-bold text-foreground">{s.value}</p>
                <p className="text-xs font-medium text-foreground">{s.label}</p>
                <p className="text-xs text-muted-foreground">{s.sub}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

// ── Mobile UI ──────────────────────────────────────────────────────────────

function MobileScreen(_: { onNavigate: (screen: Screen) => void }) {
  return (
    <div className="space-y-6">
      <SectionHeader
        title="Mobile UI Mockup"
        subtitle="Phone-style screen to show your UI/UX design direction."
      />
      <div className="flex justify-center">
        <div className="relative w-72">
          {/* Phone frame */}
          <div className="relative bg-foreground rounded-[2.5rem] p-2.5 shadow-2xl">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-foreground rounded-full z-10" />
            <div className="bg-background rounded-[2rem] overflow-hidden">
              {/* Status bar */}
              <div className="bg-primary px-5 pt-8 pb-5">
                <div className="flex items-center gap-2 mb-1">
                  <Leaf className="w-4 h-4 text-primary-foreground/80" />
                  <span className="text-primary-foreground/80 text-xs font-medium">SmartGreen</span>
                </div>
                <h2 className="text-primary-foreground text-xl font-bold leading-tight">Report. Detect.<br />Improve.</h2>
                <p className="text-primary-foreground/70 text-xs mt-1">A simple environmental reporting experience for citizens.</p>
              </div>
              {/* Quick action */}
              <div className="px-4 py-3 bg-secondary">
                <p className="text-xs font-semibold text-secondary-foreground mb-2">Quick action</p>
                <button className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium">
                  <Plus className="w-4 h-4" /> Report New Issue
                </button>
              </div>
              {/* Cards */}
              <div className="p-4 space-y-3">
                {[
                  { title: "Nearby alerts", sub: "2 urgent reports within 2 km", icon: Bell, color: "text-red-600" },
                  { title: "My recent case", sub: "Waste dump report is under review", icon: Clock, color: "text-amber-600" },
                  { title: "Community score", sub: "Area cleanliness improved this week", icon: TrendingUp, color: "text-green-600" },
                ].map((card) => (
                  <div key={card.title} className="bg-card rounded-xl p-3 shadow-sm border border-border flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-muted">
                      <card.icon className={`w-4 h-4 ${card.color}`} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{card.title}</p>
                      <p className="text-xs text-muted-foreground">{card.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Bottom nav */}
              <div className="flex justify-around items-center py-3 border-t border-border bg-card px-4">
                {[LayoutDashboard, Map, AlertTriangle, Activity].map((Icon, i) => (
                  <button key={i} className={`p-2 rounded-xl ${i === 0 ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                    <Icon className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Summary / Export ──────────────────────────────────────────────────────

const SUMMARY_DATE = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

function SummaryScreen({ onNavigate }: { onNavigate: (screen: Screen) => void }) {
  const printRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = () => {
    const style = document.createElement("style");
    style.id = "print-override";
    style.innerHTML = `
      @media print {
        body > *:not(#sg-print-root) { display: none !important; }
        #sg-print-root { display: block !important; position: static !important; }
        .no-print { display: none !important; }
        @page { margin: 20mm; size: A4; }
      }
    `;
    document.head.appendChild(style);

    const root = document.getElementById("sg-print-root");
    if (root) root.style.display = "block";

    window.print();

    setTimeout(() => {
      document.head.removeChild(style);
    }, 500);
  };

  return (
    <div className="space-y-6">
      {/* Back + actions bar — hidden when printing */}
      <div className="no-print flex items-center justify-between">
        <button
          onClick={() => onNavigate("dashboard")}
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </button>
        <button
          onClick={handleDownloadPDF}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-xl hover:bg-primary/90 transition-colors shadow-sm"
        >
          <Download className="w-4 h-4" /> Download PDF
        </button>
      </div>

      {/* Printable content */}
      <div ref={printRef} id="sg-print-root">
        {/* Header */}
        <div className="bg-primary rounded-2xl p-6 text-primary-foreground mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold">SmartGreen City Platform</h1>
              <p className="text-primary-foreground/70 text-xs">Environmental Management Summary Report</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-primary-foreground/80 border-t border-white/20 pt-3 mt-3">
            <span>Generated: {SUMMARY_DATE}</span>
            <span>Period: June 2026 (Monthly)</span>
            <span>District: Maharagama, Sri Lanka</span>
          </div>
        </div>

        {/* KPI row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {[
            { label: "Total Reports", value: "126", change: "+18%", icon: BarChart3, pos: true },
            { label: "Resolved Cases", value: "82", change: "65%", icon: CheckCircle, pos: true },
            { label: "Urgent Open", value: "14", change: "-3", icon: AlertTriangle, pos: false },
            { label: "Avg Response", value: "3.2h", change: "-0.4h", icon: Clock, pos: true },
          ].map((k) => (
            <div key={k.label} className="bg-card border border-border rounded-2xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs text-muted-foreground">{k.label}</p>
                <k.icon className="w-4 h-4 text-muted-foreground" />
              </div>
              <p className="text-2xl font-bold text-foreground">{k.value}</p>
              <p className={`text-xs mt-1 font-medium ${k.pos ? "text-green-600" : "text-red-500"}`}>{k.change} vs last month</p>
            </div>
          ))}
        </div>

        {/* Issue breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Card className="p-5">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-primary" /> Issue Type Breakdown
            </h3>
            <div className="space-y-3">
              {[
                { label: "Waste / Illegal dumping", count: 53, pct: 42, color: "bg-red-400" },
                { label: "Smoke / Air pollution", count: 35, pct: 28, color: "bg-amber-400" },
                { label: "Drainage blockage", count: 23, pct: 18, color: "bg-blue-400" },
                { label: "Noise pollution", count: 10, pct: 8, color: "bg-purple-400" },
                { label: "Water contamination", count: 5, pct: 4, color: "bg-teal-400" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-semibold text-foreground">{item.count} ({item.pct}%)</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-5">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Activity className="w-4 h-4 text-primary" /> Resolution Performance
            </h3>
            <div className="space-y-3">
              {[
                { label: "Resolved", value: 82, total: 126, color: "bg-green-500" },
                { label: "In Progress", value: 30, total: 126, color: "bg-amber-400" },
                { label: "Urgent / Pending", value: 14, total: 126, color: "bg-red-400" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">{s.label}</span>
                    <span className="font-semibold text-foreground">{s.value} cases</span>
                  </div>
                  <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                    <div className={`h-full ${s.color} rounded-full`} style={{ width: `${(s.value / s.total) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-border space-y-1.5">
              {[
                { label: "Avg resolution time", value: "7.4 hours" },
                { label: "Citizen satisfaction", value: "89%" },
                { label: "Top hotspot area", value: "Canal-side ward" },
              ].map((r) => (
                <div key={r.label} className="flex justify-between text-xs">
                  <span className="text-muted-foreground">{r.label}</span>
                  <span className="font-semibold text-foreground">{r.value}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Sensor snapshot */}
        <Card className="p-5 mb-6">
          <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <Radio className="w-4 h-4 text-primary" /> Sensor Network Snapshot
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Air Quality Index", value: "68", note: "Moderate", icon: Wind, color: "text-amber-600" },
              { label: "Smart Bin Fill", value: "87%", note: "Needs collection", icon: Trash2, color: "text-red-600" },
              { label: "Temperature", value: "31°C", note: "Normal outdoor", icon: Thermometer, color: "text-blue-600" },
              { label: "Active Sensors", value: "24/27", note: "89% uptime", icon: Activity, color: "text-green-600" },
            ].map((s) => (
              <div key={s.label} className="bg-muted/50 border border-border rounded-xl p-3 text-center">
                <s.icon className={`w-5 h-5 ${s.color} mx-auto mb-1.5`} />
                <p className="text-lg font-bold text-foreground">{s.value}</p>
                <p className="text-xs font-medium text-foreground">{s.label}</p>
                <p className="text-xs text-muted-foreground">{s.note}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent cases table */}
        <Card className="p-5 mb-6">
          <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <FileText className="w-4 h-4 text-primary" /> Recent Case Log
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  {["Case ID", "Description", "Location", "Severity", "Status"].map((h) => (
                    <th key={h} className="text-left text-xs font-semibold text-muted-foreground pb-2 pr-4">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { id: "#SG-1042", desc: "Illegal dumping near canal", loc: "Maharagama sector 3", sev: "High", status: "urgent" as const },
                  { id: "#SG-1038", desc: "Smoke from factory area", loc: "Kolonnawa industrial lane", sev: "Medium", status: "progress" as const },
                  { id: "#SG-1035", desc: "Overflowing smart bin", loc: "School road junction", sev: "High", status: "urgent" as const },
                  { id: "#SG-1029", desc: "Drain blockage reported", loc: "Canal-side ward", sev: "Urgent", status: "resolved" as const },
                  { id: "#SG-1021", desc: "Water contamination alert", loc: "Boralesgamuwa", sev: "Medium", status: "resolved" as const },
                ].map((row) => (
                  <tr key={row.id}>
                    <td className="py-2 pr-4 font-mono text-xs text-foreground">{row.id}</td>
                    <td className="py-2 pr-4 text-xs text-foreground">{row.desc}</td>
                    <td className="py-2 pr-4 text-xs text-muted-foreground">{row.loc}</td>
                    <td className="py-2 pr-4 text-xs text-muted-foreground">{row.sev}</td>
                    <td className="py-2">
                      <Badge variant={row.status}>{row.status === "urgent" ? "Urgent" : row.status === "progress" ? "In Progress" : "Resolved"}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Footer note */}
        <p className="text-xs text-center text-muted-foreground">
          SmartGreen City Platform · Auto-generated report · {SUMMARY_DATE} · Confidential
        </p>
      </div>
    </div>
  );
}

// ── Root App ───────────────────────────────────────────────────────────────

export default function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>("dashboard");
  const [dark, setDark] = useState(false);

  const screenComponents: Record<Screen, React.FC<{ onNavigate: (screen: Screen) => void }>> = {
    dashboard: DashboardScreen,
    report: ReportScreen,
    map: MapScreen,
    sensors: SensorScreen,
    admin: AdminScreen,
    mobile: MobileScreen,
    summary: SummaryScreen,
  };

  const ActiveComponent = screenComponents[activeScreen];

  return (
    <div className={dark ? "dark" : ""} style={{ minHeight: "100vh", background: "var(--background)" }}>
      <div className="flex min-h-screen font-['Inter',sans-serif]">
        {/* Sidebar */}
        <aside className="w-56 shrink-0 flex flex-col bg-card border-r border-border px-3 py-6 sticky top-0 h-screen overflow-y-auto">
          {/* Logo */}
          <div className="flex items-center gap-2.5 px-3 mb-8">
            <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center shadow-sm">
              <Leaf className="w-4 h-4 text-primary-foreground" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground leading-none">SmartGreen</p>
              <p className="text-xs text-muted-foreground mt-0.5">City Platform</p>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex-1 space-y-1">
            {NAV_ITEMS.map((item) => {
              const active = activeScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveScreen(item.id)}
                  className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    active
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <item.icon className="w-4 h-4 shrink-0" />
                  <span>{item.label}</span>
                  {active && <ChevronRight className="w-3.5 h-3.5 ml-auto" />}
                </button>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="pt-4 border-t border-border">
            <button
              onClick={() => setDark(!dark)}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              <Moon className="w-4 h-4" />
              {dark ? "Light mode" : "Dark mode"}
            </button>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0 p-6 md:p-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeScreen}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
              >
                <ActiveComponent onNavigate={setActiveScreen} />
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}
