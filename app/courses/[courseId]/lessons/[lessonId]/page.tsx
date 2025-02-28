import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getCourseById, getLessonById } from "@/lib/data"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"
import { CompleteLesson } from "@/components/complete-lesson"

export default function LessonPage({
  params,
}: {
  params: { courseId: string; lessonId: string }
}) {
  const course = getCourseById(Number.parseInt(params.courseId))
  const lesson = getLessonById(Number.parseInt(params.lessonId))

  if (!course || !lesson) {
    return <div className="container py-10">Lesson not found</div>
  }

  return (
    <div className="container py-10">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <Link href={`/courses/${params.courseId}`}>
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Course
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{lesson.title}</CardTitle>
                <CardDescription>
                  Lesson {lesson.id} of {course.title}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="content">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="content">Lesson Content</TabsTrigger>
                    <TabsTrigger value="quiz">Quiz</TabsTrigger>
                  </TabsList>
                  <TabsContent value="content" className="space-y-4 pt-4">
                    <div className="aspect-video w-full bg-muted flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-muted-foreground">Video Lesson</p>
                        <p className="text-sm text-muted-foreground">(Video player would be embedded here)</p>
                      </div>
                    </div>

                    <div className="prose max-w-none">
                      <h3>Introduction</h3>
                      <p>
                        {lesson.content ||
                          `This lesson covers important aspects of ${course.title}. 
                        You'll learn key concepts and practical applications that will help you improve your health.`}
                      </p>

                      <h3>Key Concepts</h3>
                      <ul>
                        <li>Understanding the fundamentals</li>
                        <li>Applying knowledge to daily routines</li>
                        <li>Measuring progress and outcomes</li>
                        <li>Building sustainable habits</li>
                      </ul>

                      <h3>Practical Applications</h3>
                      <p>
                        Now that we've covered the theory, let's look at how you can apply this knowledge in your daily
                        life. The following examples demonstrate practical ways to implement what you've learned.
                      </p>

                      <h3>Summary</h3>
                      <p>
                        In this lesson, we've explored the key concepts of {lesson.title}. Remember to practice these
                        principles regularly to see improvements in your health.
                      </p>
                    </div>
                  </TabsContent>
                  <TabsContent value="quiz" className="pt-4">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="font-medium">Question 1</h3>
                        <p>What is the most important aspect of maintaining good health?</p>
                        <div className="space-y-2 mt-3">
                          <div className="flex items-center space-x-2">
                            <input type="radio" id="q1a" name="q1" className="h-4 w-4" />
                            <label htmlFor="q1a">Occasional exercise</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="radio" id="q1b" name="q1" className="h-4 w-4" />
                            <label htmlFor="q1b">Balanced nutrition and regular physical activity</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="radio" id="q1c" name="q1" className="h-4 w-4" />
                            <label htmlFor="q1c">Taking supplements</label>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-medium">Question 2</h3>
                        <p>How often should you engage in moderate physical activity?</p>
                        <div className="space-y-2 mt-3">
                          <div className="flex items-center space-x-2">
                            <input type="radio" id="q2a" name="q2" className="h-4 w-4" />
                            <label htmlFor="q2a">Once a month</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="radio" id="q2b" name="q2" className="h-4 w-4" />
                            <label htmlFor="q2b">At least 150 minutes per week</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="radio" id="q2c" name="q2" className="h-4 w-4" />
                            <label htmlFor="q2c">Only when feeling energetic</label>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-medium">Question 3</h3>
                        <p>Which of the following is a good stress management technique?</p>
                        <div className="space-y-2 mt-3">
                          <div className="flex items-center space-x-2">
                            <input type="radio" id="q3a" name="q3" className="h-4 w-4" />
                            <label htmlFor="q3a">Ignoring the problem</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="radio" id="q3b" name="q3" className="h-4 w-4" />
                            <label htmlFor="q3b">Regular mindfulness meditation</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="radio" id="q3c" name="q3" className="h-4 w-4" />
                            <label htmlFor="q3c">Increasing caffeine intake</label>
                          </div>
                        </div>
                      </div>

                      <Button className="w-full">Submit Quiz</Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous Lesson
                </Button>
                <CompleteLesson courseId={params.courseId} lessonId={params.lessonId} />
                <Button>
                  Next Lesson
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Lesson Progress</CardTitle>
                <CardDescription>Track your learning journey</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Completion</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} />
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Lesson Checklist</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Watch video</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Read content</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full border-2 border-muted-foreground" />
                      <span className="text-sm">Complete quiz</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Rewards</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="border rounded-lg p-3">
                      <p className="text-sm text-muted-foreground">XP Available</p>
                      <p className="text-xl font-bold">100</p>
                    </div>
                    <div className="border rounded-lg p-3">
                      <p className="text-sm text-muted-foreground">Badge</p>
                      <p className="text-xl font-bold">🧠</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

