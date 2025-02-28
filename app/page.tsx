import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Award, Brain, Heart, Salad } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Learn Health Topics Through Gamification
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Earn points, unlock achievements, and track your progress as you learn about nutrition, exercise, and
                  mental health.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/courses">
                  <Button size="lg" className="gap-1">
                    Start Learning <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <img
              alt="Health Learning"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              src="/placeholder.svg?height=400&width=800"
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Health Categories</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our comprehensive health topics and start your learning journey today.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <Card>
              <CardHeader>
                <Salad className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Nutrition</CardTitle>
                <CardDescription>Learn about balanced diets, nutrients, and healthy eating habits.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>15 courses available</p>
              </CardContent>
              <CardFooter>
                <Link href="/courses?category=nutrition" className="w-full">
                  <Button className="w-full">Explore Nutrition</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Heart className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Exercise</CardTitle>
                <CardDescription>Discover effective workout routines and physical activity benefits.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>12 courses available</p>
              </CardContent>
              <CardFooter>
                <Link href="/courses?category=exercise" className="w-full">
                  <Button className="w-full">Explore Exercise</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Brain className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Mental Health</CardTitle>
                <CardDescription>Understand mental wellbeing, stress management, and mindfulness.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>10 courses available</p>
              </CardContent>
              <CardFooter>
                <Link href="/courses?category=mental-health" className="w-full">
                  <Button className="w-full">Explore Mental Health</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Gamification Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Gamified Learning</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Make learning fun and engaging with our gamification elements.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <Card>
              <CardHeader>
                <CardTitle>XP Points</CardTitle>
                <CardDescription>Earn experience points for completing lessons and quizzes.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">XP</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
                <CardDescription>Unlock badges and achievements as you progress through courses.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <Award className="h-24 w-24 text-primary" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Leaderboard</CardTitle>
                <CardDescription>Compete with other learners and climb the ranks.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <div className="space-y-2 w-full max-w-[200px]">
                    <div className="flex justify-between">
                      <span>1. User123</span>
                      <span>1250 XP</span>
                    </div>
                    <div className="flex justify-between">
                      <span>2. HealthFan</span>
                      <span>980 XP</span>
                    </div>
                    <div className="flex justify-between">
                      <span>3. Learner42</span>
                      <span>875 XP</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

