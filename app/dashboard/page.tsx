import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { getCourses } from "@/lib/data"
import Link from "next/link"
import { Award, BookOpen, Clock, Trophy, Users } from "lucide-react"
import { Chart } from "@/components/ui/chart"

export default function DashboardPage() {
  const courses = getCourses().slice(0, 3)

  return (
    <div className="container py-10">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-1">Dashboard</h1>
            <p className="text-muted-foreground">Track your progress and achievements</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <Avatar className="border-2 border-background h-8 w-8">
                  <AvatarFallback>U1</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-background h-8 w-8">
                  <AvatarFallback>U2</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-background h-8 w-8">
                  <AvatarFallback>U3</AvatarFallback>
                </Avatar>
              </div>
              <span className="text-sm text-muted-foreground">+42 online</span>
            </div>
            <Button>
              <Trophy className="h-4 w-4 mr-2" />
              Leaderboard
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total XP</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,250</div>
              <p className="text-xs text-muted-foreground">+120 from last week</p>
              <Progress className="mt-2" value={65} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Level</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Level 5</div>
              <p className="text-xs text-muted-foreground">750 XP to Level 6</p>
              <Progress className="mt-2" value={40} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Courses Completed</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3/12</div>
              <p className="text-xs text-muted-foreground">2 in progress</p>
              <Progress className="mt-2" value={25} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Learning Streak</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7 days</div>
              <p className="text-xs text-muted-foreground">Personal best: 14 days</p>
              <Progress className="mt-2" value={50} />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Learning Progress</CardTitle>
              <CardDescription>Your XP growth over time</CardDescription>
            </CardHeader>
            <CardContent>
              <Chart
                type="line"
                data={{
                  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                  datasets: [
                    {
                      label: "XP Earned",
                      data: [100, 250, 320, 550, 780, 1250],
                      borderColor: "hsl(var(--primary))",
                      backgroundColor: "hsl(var(--primary) / 0.1)",
                      tension: 0.4,
                      fill: true,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  scales: {
                    y: {
                      beginAtZero: true,
                    },
                  },
                }}
                className="aspect-[2/1]"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Achievements</CardTitle>
              <CardDescription>Badges you've earned</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Badge
                      variant="outline"
                      className="h-12 w-12 rounded-full flex items-center justify-center text-xl"
                    >
                      🔥
                    </Badge>
                  </div>
                  <span className="text-xs text-center">7-Day Streak</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Badge
                      variant="outline"
                      className="h-12 w-12 rounded-full flex items-center justify-center text-xl"
                    >
                      🧠
                    </Badge>
                  </div>
                  <span className="text-xs text-center">Quiz Master</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Badge
                      variant="outline"
                      className="h-12 w-12 rounded-full flex items-center justify-center text-xl"
                    >
                      🥗
                    </Badge>
                  </div>
                  <span className="text-xs text-center">Nutrition Pro</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Badge
                      variant="outline"
                      className="h-12 w-12 rounded-full flex items-center justify-center text-xl"
                    >
                      💪
                    </Badge>
                  </div>
                  <span className="text-xs text-center">Exercise Guru</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Badge
                      variant="outline"
                      className="h-12 w-12 rounded-full flex items-center justify-center text-xl"
                    >
                      🧘
                    </Badge>
                  </div>
                  <span className="text-xs text-center">Mindfulness</span>
                </div>
                <div className="flex flex-col items-center gap-2 opacity-40">
                  <div className="rounded-full bg-muted p-3">
                    <Badge
                      variant="outline"
                      className="h-12 w-12 rounded-full flex items-center justify-center text-xl"
                    >
                      ?
                    </Badge>
                  </div>
                  <span className="text-xs text-center">Locked</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Tabs defaultValue="in-progress">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Your Courses</h2>
              <TabsList>
                <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="in-progress" className="pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <Card key={course.id} className="overflow-hidden">
                    <div className="aspect-video w-full relative">
                      <img
                        src={
                          course.image ||
                          `/placeholder.svg?height=200&width=400&text=${encodeURIComponent(course.title)}`
                        }
                        alt={course.title}
                        className="object-cover w-full h-full"
                      />
                      <Badge className="absolute top-2 right-2">{course.category}</Badge>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle>{course.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{course.id === 1 ? "40%" : course.id === 2 ? "25%" : "10%"}</span>
                        </div>
                        <Progress value={course.id === 1 ? 40 : course.id === 2 ? 25 : 10} />
                      </div>
                    </CardContent>
                    <div className="px-6 pb-4">
                      <Link href={`/courses/${course.id}`}>
                        <Button className="w-full">Continue</Button>
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="completed" className="pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="overflow-hidden">
                  <div className="aspect-video w-full relative">
                    <img
                      src="/placeholder.svg?height=200&width=400&text=Introduction%20to%20Nutrition"
                      alt="Introduction to Nutrition"
                      className="object-cover w-full h-full"
                    />
                    <Badge className="absolute top-2 right-2">Nutrition</Badge>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle>Introduction to Nutrition</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Completed on</span>
                        <span>May 15, 2023</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>XP Earned</span>
                        <span>250 XP</span>
                      </div>
                    </div>
                  </CardContent>
                  <div className="px-6 pb-4">
                    <Link href="/courses/4">
                      <Button variant="outline" className="w-full">
                        Review
                      </Button>
                    </Link>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

