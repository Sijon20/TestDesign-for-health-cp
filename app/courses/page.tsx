import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Clock, Star } from "lucide-react"
import { getCourses } from "@/lib/data"

export default function CoursesPage() {
  const courses = getCourses()

  return (
    <div className="container py-10">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Health Courses</h1>
          <p className="text-muted-foreground">Browse our collection of health-related courses</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden">
              <div className="aspect-video w-full relative">
                <img
                  src={course.image || `/placeholder.svg?height=200&width=400&text=${encodeURIComponent(course.title)}`}
                  alt={course.title}
                  className="object-cover w-full h-full"
                />
                <Badge className="absolute top-2 right-2">{course.category}</Badge>
              </div>
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration} lessons</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>{course.difficulty}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/courses/${course.id}`} className="w-full">
                  <Button className="w-full">Start Course</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

