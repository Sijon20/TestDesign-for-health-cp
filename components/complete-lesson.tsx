"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"

export function CompleteLesson({
  courseId,
  lessonId,
}: {
  courseId: string
  lessonId: string
}) {
  const [isCompleting, setIsCompleting] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  const handleComplete = async () => {
    setIsCompleting(true)

    // Simulate API call to mark lesson as complete
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Lesson completed!",
      description: "You've earned 100 XP and unlocked a new badge.",
      action: (
        <div className="flex items-center gap-2">
          <span className="text-xl">🧠</span>
          <span>+100 XP</span>
        </div>
      ),
    })

    setIsCompleting(false)

    // Redirect to course page after completion
    router.push(`/courses/${courseId}`)
  }

  return (
    <Button onClick={handleComplete} disabled={isCompleting} variant="outline">
      <CheckCircle className="h-4 w-4 mr-2" />
      {isCompleting ? "Completing..." : "Mark as Complete"}
    </Button>
  )
}

