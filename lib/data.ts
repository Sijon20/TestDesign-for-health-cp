// Mock data for the application

// Courses
export function getCourses() {
  return [
    {
      id: 1,
      title: "Nutrition Fundamentals",
      description: "Learn the basics of nutrition and healthy eating habits.",
      longDescription:
        "This comprehensive course covers all the essential aspects of nutrition, providing you with practical knowledge about macronutrients, micronutrients, and how to build a balanced diet.",
      category: "Nutrition",
      difficulty: "Beginner",
      duration: 5,
      image: "/placeholder.svg?height=200&width=400&text=Nutrition%20Fundamentals",
    },
    {
      id: 2,
      title: "Strength Training Basics",
      description: "Discover effective strength training techniques for beginners.",
      category: "Exercise",
      difficulty: "Beginner",
      duration: 6,
      image: "/placeholder.svg?height=200&width=400&text=Strength%20Training",
    },
    {
      id: 3,
      title: "Mindfulness Meditation",
      description: "Learn mindfulness techniques to reduce stress and improve mental health.",
      category: "Mental Health",
      difficulty: "Beginner",
      duration: 4,
      image: "/placeholder.svg?height=200&width=400&text=Mindfulness",
    },
    {
      id: 4,
      title: "Advanced Nutrition",
      description: "Dive deeper into nutrition science and meal planning.",
      category: "Nutrition",
      difficulty: "Intermediate",
      duration: 8,
      image: "/placeholder.svg?height=200&width=400&text=Advanced%20Nutrition",
    },
    {
      id: 5,
      title: "Cardiovascular Fitness",
      description: "Improve your heart health with effective cardio workouts.",
      category: "Exercise",
      difficulty: "Intermediate",
      duration: 7,
      image: "/placeholder.svg?height=200&width=400&text=Cardio%20Fitness",
    },
    {
      id: 6,
      title: "Stress Management",
      description: "Learn techniques to manage stress in your daily life.",
      category: "Mental Health",
      difficulty: "Intermediate",
      duration: 5,
      image: "/placeholder.svg?height=200&width=400&text=Stress%20Management",
    },
  ]
}

// Get a single course by ID
export function getCourseById(id: number) {
  return getCourses().find((course) => course.id === id)
}

// Lessons
export function getLessonsByCourseId(courseId: number) {
  const lessons = [
    // Course 1 Lessons
    {
      id: 1,
      courseId: 1,
      title: "Introduction to Macronutrients",
      content: "Learn about proteins, carbohydrates, and fats - the building blocks of nutrition.",
      duration: 15,
    },
    {
      id: 2,
      courseId: 1,
      title: "Understanding Micronutrients",
      content: "Discover the importance of vitamins and minerals in your diet.",
      duration: 20,
    },
    {
      id: 3,
      courseId: 1,
      title: "Building a Balanced Plate",
      content: "Learn how to create balanced meals for optimal nutrition.",
      duration: 25,
    },
    {
      id: 4,
      courseId: 1,
      title: "Hydration and Health",
      content: "Understand the importance of proper hydration for overall health.",
      duration: 15,
    },
    {
      id: 5,
      courseId: 1,
      title: "Meal Planning Basics",
      content: "Learn how to plan nutritious meals for the week.",
      duration: 30,
    },

    // Course 2 Lessons
    {
      id: 6,
      courseId: 2,
      title: "Strength Training Principles",
      content: "Learn the fundamental principles of effective strength training.",
      duration: 20,
    },
    {
      id: 7,
      courseId: 2,
      title: "Proper Form and Technique",
      content: "Master the correct form for basic strength exercises.",
      duration: 25,
    },
    {
      id: 8,
      courseId: 2,
      title: "Creating a Workout Routine",
      content: "Design an effective strength training program for your goals.",
      duration: 30,
    },

    // Course 3 Lessons
    {
      id: 9,
      courseId: 3,
      title: "Introduction to Mindfulness",
      content: "Learn what mindfulness is and its benefits for mental health.",
      duration: 15,
    },
    {
      id: 10,
      courseId: 3,
      title: "Breathing Techniques",
      content: "Master breathing exercises for stress reduction and focus.",
      duration: 20,
    },
  ]

  return lessons.filter((lesson) => lesson.courseId === courseId)
}

// Get a single lesson by ID
export function getLessonById(id: number) {
  const allLessons = [1, 2, 3, 4, 5, 6].flatMap((courseId) => getLessonsByCourseId(courseId))
  return allLessons.find((lesson) => lesson.id === id)
}

