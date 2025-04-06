
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell } from "recharts";

const gamingData = [
  { day: "Mon", hours: 2.5 },
  { day: "Tue", hours: 3.2 },
  { day: "Wed", hours: 1.8 },
  { day: "Thu", hours: 4.0 },
  { day: "Fri", hours: 5.2 },
  { day: "Sat", hours: 6.5 },
  { day: "Sun", hours: 4.8 },
];

const codingData = [
  { day: "Mon", hours: 5.5 },
  { day: "Tue", hours: 4.2 },
  { day: "Wed", hours: 6.8 },
  { day: "Thu", hours: 3.5 },
  { day: "Fri", hours: 4.0 },
  { day: "Sat", hours: 2.5 },
  { day: "Sun", hours: 1.5 },
];

const projectStatusData = [
  { name: "In Progress", value: 4, color: "#9333ea" },
  { name: "Completed", value: 8, color: "#2dd4bf" },
  { name: "Planned", value: 5, color: "#6366f1" },
  { name: "On Hold", value: 3, color: "#f97316" },
];

const InsightsSection = () => {
  const [activeTab, setActiveTab] = useState("gaming");

  const stats = [
    { label: "Total Gaming Hours", value: "28.4", trend: "up", percent: "12%" },
    { label: "Coding Streak", value: "42", unit: "days", trend: "up", percent: "8%" },
    { label: "Projects Completed", value: "8", trend: "same" },
    { label: "Photos Processed", value: "3,421", trend: "up", percent: "24%" },
  ];

  return (
    <div className="py-20 px-4 container mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-gradient inline-block text-4xl font-bold mb-4">Insights</h2>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          Data-driven reflections on my work, hobbies, and productivity patterns.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="hover-card bg-card/50 backdrop-blur-sm border-primary/10 overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-foreground/70">{stat.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-foreground">{stat.value}</span>
                {stat.unit && <span className="ml-1 text-foreground/70">{stat.unit}</span>}
                
                {stat.trend && (
                  <div className={`ml-2 text-xs font-medium px-2 py-0.5 rounded-full ${
                    stat.trend === 'up' ? 'text-green-500 bg-green-500/10' : 
                    stat.trend === 'down' ? 'text-red-500 bg-red-500/10' : 
                    'text-yellow-500 bg-yellow-500/10'
                  }`}>
                    {stat.trend === 'up' ? '↑' : stat.trend === 'down' ? '↓' : '→'} 
                    {stat.percent && <span>{stat.percent}</span>}
                  </div>
                )}
              </div>
            </CardContent>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/40 to-accent/40"></div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <Card className="lg:col-span-2 hover-card backdrop-blur-sm border-primary/10">
          <CardHeader>
            <CardTitle>Weekly Activity</CardTitle>
            <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full max-w-xs grid-cols-2">
                <TabsTrigger value="gaming">Gaming</TabsTrigger>
                <TabsTrigger value="coding">Coding</TabsTrigger>
              </TabsList>
            
              <TabsContent value="gaming" className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={gamingData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="day" stroke="rgba(255,255,255,0.5)" />
                    <YAxis stroke="rgba(255,255,255,0.5)" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(23, 23, 23, 0.8)',
                        borderColor: 'rgba(147, 51, 234, 0.5)',
                        color: 'white',
                        borderRadius: '0.5rem'
                      }} 
                    />
                    <Line
                      type="monotone"
                      dataKey="hours"
                      name="Hours"
                      stroke="#9333ea"
                      strokeWidth={3}
                      activeDot={{ r: 8, fill: "#9333ea", stroke: "white" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </TabsContent>
              <TabsContent value="coding" className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={codingData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="day" stroke="rgba(255,255,255,0.5)" />
                    <YAxis stroke="rgba(255,255,255,0.5)" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(23, 23, 23, 0.8)',
                        borderColor: 'rgba(45, 212, 191, 0.5)',
                        color: 'white',
                        borderRadius: '0.5rem'
                      }} 
                    />
                    <Line
                      type="monotone"
                      dataKey="hours"
                      name="Hours"
                      stroke="#2dd4bf"
                      strokeWidth={3}
                      activeDot={{ r: 8, fill: "#2dd4bf", stroke: "white" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </TabsContent>
            </Tabs>
          </CardHeader>
        </Card>

        <Card className="hover-card backdrop-blur-sm border-primary/10">
          <CardHeader>
            <CardTitle>Project Status</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={projectStatusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {projectStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="rgba(255,255,255,0.1)" />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(23, 23, 23, 0.8)', 
                      borderColor: 'rgba(147, 51, 234, 0.5)',
                      color: 'white',
                      borderRadius: '0.5rem'
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Button 
          className="group glow-effect transition-all duration-500 hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] relative overflow-hidden"
        >
          <span className="relative z-10">View Detailed Analytics</span>
          <div className="absolute inset-0 bg-gradient-to-r from-accent/80 to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </Button>
      </div>
    </div>
  );
};

export default InsightsSection;
