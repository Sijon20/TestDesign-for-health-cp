import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getCourseById, getLessonsByCourseId } from "@/lib/data"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Clock, LockIcon } from "lucide-react"

export default function CoursePage({ params }: { params: { courseId: string } }) {
  const course = getCourseById(Number.parseInt(params.courseId))
  const lessons = getLessonsByCourseId(Number.parseInt(params.courseId))

  if (!course) {
    return <div className="container py-10">Course not found</div>
  }

  return (
    <div className="container py-10">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <Link href="/courses">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Courses
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <div className="aspect-video w-full relative">
                <img
                  src={course.image || `/placeholder.svg?height=300&width=600&text=${encodeURIComponent(course.title)}`}
                  alt={course.title}
                  className="object-cover w-full h-full"
                />
                <Badge className="absolute top-2 right-2">{course.category}</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="overview">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="lessons">Lessons</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="space-y-4 pt-4">
                    <div>
                      <h3 className="font-medium mb-2">About this course</h3>
                      <p className="text-muted-foreground">
                        {course.longDescription ||
                          "This comprehensive course covers all the essential aspects of this health topic, providing you with practical knowledge and skills."}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">What you'll learn</h3>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li>Understand key concepts and principles</li>
                        <li>Apply knowledge to real-world situations</li>
                        <li>Develop healthy habits and routines</li>
                        <li>Track and measure your progress</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Requirements</h3>
                      <p className="text-muted-foreground">
                        No prior knowledge required. Just bring your enthusiasm and willingness to learn!
                      </p>
                    </div>
                  </TabsContent>
                  <TabsContent value="lessons" className="pt-4">
                    <div className="space-y-4">
                      {lessons.map((lesson, index) => (
                        <div key={lesson.id} className="flex items-center justify-between border-b pb-4">
                          <div className="flex items-center gap-3">
                            {index < 2 ? (
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            ) : index === 2 ? (
                              <div className="h-5 w-5 rounded-full border-2 border-muted-foreground" />
                            ) : (
                              <LockIcon className="h-5 w-5 text-muted-foreground" />
                            )}
                            <div>
                              <p className="font-medium">{lesson.title}</p>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Clock className="h-3 w-3" />
                                <span>{lesson.duration} min</span>
                              </div>
                            </div>
                          </div>
                          <Link href={`/courses/${course.id}/lessons/${lesson.id}`}>
                            <Button size="sm" variant={index <= 2 ? "default" : "outline"} disabled={index > 2}>
                              {index < 2 ? "Review" : index === 2 ? "Continue" : "Locked"}
                            </Button>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Your Progress</CardTitle>
                <CardDescription>Track your course completion</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>40%</span>
                  </div>
                  <Progress value={40} />
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Course Stats</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="border rounded-lg p-3">
                      <p className="text-sm text-muted-foreground">Lessons</p>
                      <p className="text-xl font-bold">2/5</p>
                    </div>
                    <div className="border rounded-lg p-3">
                      <p className="text-sm text-muted-foreground">XP Earned</p>
                      <p className="text-xl font-bold">200</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Achievements</h3>
                  <div className="flex gap-2">
                    <div className="border rounded-full p-2">
                      <Badge variant="outline" className="h-10 w-10 rounded-full flex items-center justify-center">
                        🔥
                      </Badge>
                    </div>
                    <div className="border rounded-full p-2">
                      <Badge variant="outline" className="h-10 w-10 rounded-full flex items-center justify-center">
                        🧠
                      </Badge>
                    </div>
                    <div className="border rounded-full p-2 opacity-40">
                      <Badge variant="outline" className="h-10 w-10 rounded-full flex items-center justify-center">
                        ?
                      </Badge>
                    </div>
                  </div>
                </div>

                <Button className="w-full">Continue Learning</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

