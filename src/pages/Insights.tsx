import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend
} from "recharts";

const Insights = () => {
  const [activeTab, setActiveTab] = useState("gaming");
  const [activeSection, setActiveSection] = useState("insights");
  
  // Scroll function for navbar compatibility
  const scrollToSection = (section: string) => {
    console.log(`Would scroll to ${section} if this was the main page`);
    setActiveSection(section);
  };
  
  // Gaming insights data
  const gamingData = {
    monthlyHours: [
      { month: "Jan", hours: 42 },
      { month: "Feb", hours: 56 },
      { month: "Mar", hours: 38 },
      { month: "Apr", hours: 62 },
      { month: "May", hours: 48 },
      { month: "Jun", hours: 35 },
      { month: "Jul", hours: 52 },
      { month: "Aug", hours: 44 },
      { month: "Sep", hours: 50 },
      { month: "Oct", hours: 58 },
      { month: "Nov", hours: 47 },
      { month: "Dec", hours: 63 }
    ],
    genreDistribution: [
      { name: "RPG", value: 35 },
      { name: "Strategy", value: 25 },
      { name: "FPS", value: 15 },
      { name: "Adventure", value: 18 },
      { name: "Simulation", value: 7 }
    ],
    weeklyActivity: [
      { day: "Mon", hours: 1.5 },
      { day: "Tue", hours: 2.3 },
      { day: "Wed", hours: 1.8 },
      { day: "Thu", hours: 3.2 },
      { day: "Fri", hours: 4.5 },
      { day: "Sat", hours: 6.2 },
      { day: "Sun", hours: 5.8 }
    ],
    currentGame: "Baldur's Gate 3",
    totalMonthlyHours: 47,
    longestSession: "6.5 hours",
    achievements: 12,
  };

  // Photography insights data
  const photoData = {
    photosByMonth: [
      { month: "Jan", count: 54 },
      { month: "Feb", count: 78 },
      { month: "Mar", count: 42 },
      { month: "Apr", count: 85 },
      { month: "May", count: 120 },
      { month: "Jun", count: 95 },
      { month: "Jul", count: 135 },
      { month: "Aug", count: 89 },
      { month: "Sep", count: 76 },
      { month: "Oct", count: 104 },
      { month: "Nov", count: 68 },
      { month: "Dec", count: 72 }
    ],
    subjectDistribution: [
      { name: "Landscape", value: 38 },
      { name: "Street", value: 22 },
      { name: "Portrait", value: 18 },
      { name: "Architecture", value: 15 },
      { name: "Macro", value: 7 }
    ],
    editTimePerMonth: [
      { month: "Jan", hours: 12 },
      { month: "Feb", hours: 15 },
      { month: "Mar", hours: 10 },
      { month: "Apr", hours: 18 },
      { month: "May", hours: 22 },
      { month: "Jun", hours: 17 },
      { month: "Jul", hours: 25 },
      { month: "Aug", hours: 20 },
      { month: "Sep", hours: 16 },
      { month: "Oct", hours: 19 },
      { month: "Nov", hours: 14 },
      { month: "Dec", hours: 13 }
    ],
    totalPhotos: 1024,
    favoriteCamera: "Sony A7IV",
    favoriteLens: "24-70mm f/2.8",
    averageEditTime: "22 minutes"
  };

  // Japanese learning insights
  const japaneseData = {
    wordsLearned: [
      { month: "Jan", count: 34 },
      { month: "Feb", count: 42 },
      { month: "Mar", count: 28 },
      { month: "Apr", count: 52 },
      { month: "May", count: 45 },
      { month: "Jun", count: 38 },
      { month: "Jul", count: 60 },
      { month: "Aug", count: 48 },
      { month: "Sep", count: 35 },
      { month: "Oct", count: 43 },
      { month: "Nov", count: 39 },
      { month: "Dec", count: 41 }
    ],
    categoryDistribution: [
      { name: "Nouns", value: 45 },
      { name: "Verbs", value: 30 },
      { name: "Adjectives", value: 15 },
      { name: "Adverbs", value: 5 },
      { name: "Expressions", value: 5 }
    ],
    studyTimePerDay: [
      { day: "Mon", minutes: 25 },
      { day: "Tue", minutes: 30 },
      { day: "Wed", minutes: 15 },
      { day: "Thu", minutes: 35 },
      { day: "Fri", minutes: 20 },
      { day: "Sat", minutes: 45 },
      { day: "Sun", minutes: 40 }
    ],
    totalWords: 465,
    currentLevel: "JLPT N4",
    studyStreak: "42 days",
    wordOfTheDay: {
      word: "旅行",
      reading: "りょこう",
      meaning: "Travel/Journey"
    }
  };

  // Colors for charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];
  
  useEffect(() => {
    console.log("Insights page loaded");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeSection={activeSection} onNavClick={scrollToSection} />
      <div className="container mx-auto px-4 py-12 pt-28">
        <h1 className="text-4xl font-bold mb-8">Insights</h1>
        
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
          Automated insights and analytics from my various hobbies and projects.
          Data is collected automatically and updated regularly.
        </p>
        
        <Tabs 
          defaultValue="gaming" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="gaming">Gaming</TabsTrigger>
            <TabsTrigger value="photography">Photography</TabsTrigger>
            <TabsTrigger value="japanese">Japanese</TabsTrigger>
          </TabsList>
          
          {/* Gaming Insights */}
          <TabsContent value="gaming" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Current Game</CardTitle>
                  <CardDescription>Most played game this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{gamingData.currentGame}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Gaming</CardTitle>
                  <CardDescription>Total hours this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{gamingData.totalMonthlyHours} hours</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Longest Session</CardTitle>
                  <CardDescription>Without any significant breaks</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{gamingData.longestSession}</div>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="h-[400px]">
                <CardHeader>
                  <CardTitle>Monthly Gaming Hours</CardTitle>
                  <CardDescription>Hours spent gaming each month</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={gamingData.monthlyHours}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="hours" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              
              <Card className="h-[400px]">
                <CardHeader>
                  <CardTitle>Genre Distribution</CardTitle>
                  <CardDescription>Favorite game genres</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={gamingData.genreDistribution}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {gamingData.genreDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              
              <Card className="h-[400px] lg:col-span-2">
                <CardHeader>
                  <CardTitle>Weekly Activity</CardTitle>
                  <CardDescription>Average gaming hours by day of week</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={gamingData.weeklyActivity}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="hours" 
                        stroke="#8884d8" 
                        strokeWidth={2} 
                        dot={{ r: 4 }} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Photography Insights */}
          <TabsContent value="photography" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Photo Collection</CardTitle>
                  <CardDescription>Total photos taken</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{photoData.totalPhotos}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Favorite Equipment</CardTitle>
                  <CardDescription>Most used camera and lens</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-xl font-medium">{photoData.favoriteCamera}</div>
                  <div className="text-lg text-muted-foreground">{photoData.favoriteLens}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Average Edit Time</CardTitle>
                  <CardDescription>Per photo</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{photoData.averageEditTime}</div>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="h-[400px]">
                <CardHeader>
                  <CardTitle>Photos per Month</CardTitle>
                  <CardDescription>Number of photos taken each month</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={photoData.photosByMonth}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="count" fill="#00C49F" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              
              <Card className="h-[400px]">
                <CardHeader>
                  <CardTitle>Subject Distribution</CardTitle>
                  <CardDescription>Types of photos taken</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={photoData.subjectDistribution}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {photoData.subjectDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              
              <Card className="h-[400px] lg:col-span-2">
                <CardHeader>
                  <CardTitle>Editing Time</CardTitle>
                  <CardDescription>Hours spent editing photos each month</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={photoData.editTimePerMonth}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="hours" 
                        stroke="#00C49F" 
                        strokeWidth={2} 
                        dot={{ r: 4 }} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Japanese Learning Insights */}
          <TabsContent value="japanese" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Vocabulary</CardTitle>
                  <CardDescription>Total words learned</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{japaneseData.totalWords}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Current Level</CardTitle>
                  <CardDescription>Japanese proficiency</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{japaneseData.currentLevel}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Study Streak</CardTitle>
                  <CardDescription>Consecutive days studied</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{japaneseData.studyStreak}</div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Word of the Day</CardTitle>
                <CardDescription>Today's Japanese word to learn</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl font-bold mb-2">{japaneseData.wordOfTheDay.word}</div>
                  <div className="text-xl mb-2">{japaneseData.wordOfTheDay.reading}</div>
                  <div className="text-lg text-muted-foreground">{japaneseData.wordOfTheDay.meaning}</div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="h-[400px]">
                <CardHeader>
                  <CardTitle>Words Learned</CardTitle>
                  <CardDescription>New vocabulary each month</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={japaneseData.wordsLearned}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="count" fill="#FF8042" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              
              <Card className="h-[400px]">
                <CardHeader>
                  <CardTitle>Vocabulary Types</CardTitle>
                  <CardDescription>Distribution by word category</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={japaneseData.categoryDistribution}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {japaneseData.categoryDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              
              <Card className="h-[400px] lg:col-span-2">
                <CardHeader>
                  <CardTitle>Daily Study Time</CardTitle>
                  <CardDescription>Minutes spent studying by day of week</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={japaneseData.studyTimePerDay}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="minutes" 
                        stroke="#FF8042" 
                        strokeWidth={2} 
                        dot={{ r: 4 }} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Insights;
