interface WorkoutPlanExerciseBase {
  exerciseId: string;
  sets: number;
  order: number;
  trackingType: "reps" | "duration";
}

interface WorkoutPlanExerciseReps extends WorkoutPlanExerciseBase {
  reps: number;
  duration?: never;
}

interface WorkoutPlanExerciseDuration extends WorkoutPlanExerciseBase {
  reps?: never;
  duration: number;
}

type WorkoutPlanExercise =
  | WorkoutPlanExerciseReps
  | WorkoutPlanExerciseDuration;

interface WorkoutPlanInput {
  name: string;
  notes: string;
  systemRoutineCategory: string;
  WorkoutPlanExercises: WorkoutPlanExercise[];
}

export const predefinedWorkouts: WorkoutPlanInput[] = [
  // Strength
  {
    name: "Full-Body Strength Builder",
    systemRoutineCategory: "Strength",
    notes:
      "This workout is designed to target all major muscle groups, providing a solid foundation of strength. Perfect for those looking to improve overall strength and endurance.",
    WorkoutPlanExercises: [
      {
        exerciseId: "4ba75032-bdee-4369-a007-3346dd26f4fa", // Barbell Squat
        sets: 3,
        reps: 8,
        order: 1,
        trackingType: "reps",
      },
      {
        exerciseId: "6792b0e8-d064-4da6-953e-b7593f30ce80", // Barbell Bench Press - Medium Grip
        sets: 3,
        reps: 8,
        order: 2,
        trackingType: "reps",
      },
      {
        exerciseId: "02c17c80-8a7f-4213-a8a7-500b1f4c4e9f", // Barbell Deadlift
        sets: 3,
        reps: 8,
        order: 3,
        trackingType: "reps",
      },
      {
        exerciseId: "8fdd5051-eb06-4ff9-b477-54254a34d43a", // Wide-Grip Lat Pulldown
        sets: 3,
        reps: 8,
        order: 4,
        trackingType: "reps",
      },
      {
        exerciseId: "449e4f68-95c8-40a5-acde-cc76c36d8604", // Machine Shoulder (Military) Press
        sets: 3,
        reps: 8,
        order: 5,
        trackingType: "reps",
      },
      {
        exerciseId: "0fef6129-ee7f-4395-ab16-bd42e3b059f1", // Plank
        sets: 3,
        duration: 30,
        order: 6,
        trackingType: "duration",
      },
    ],
  },
  {
    name: "Upper Body Power",
    systemRoutineCategory: "Strength",
    notes:
      "Focus on building strength in the chest, back, shoulders, and arms. Ideal for those wanting to increase upper body power and muscular definition.",
    WorkoutPlanExercises: [
      {
        exerciseId: "6792b0e8-d064-4da6-953e-b7593f30ce80", // Barbell Bench Press - Medium Grip
        sets: 4,
        reps: 6,
        order: 1,
        trackingType: "reps",
      },
      {
        exerciseId: "6fb8da54-38fb-408d-951d-4b4a696b5a98", // Bent Over Barbell Row
        sets: 4,
        reps: 6,
        order: 2,
        trackingType: "reps",
      },
      {
        exerciseId: "d7aba9b7-1466-4aec-95f9-bd96707d1c63", // Dumbbell Shoulder Press
        sets: 3,
        reps: 8,
        order: 3,
        trackingType: "reps",
      },
      {
        exerciseId: "6988bd28-62fa-4d77-9df4-3eebcb960c20", // Pullups
        sets: 3,
        reps: 10,
        order: 4,
        trackingType: "reps",
      },
      {
        exerciseId: "d8075b69-ab08-41c9-9a30-1d7ef58e5059", // Dumbbell Bicep Curl
        sets: 3,
        reps: 10,
        order: 5,
        trackingType: "reps",
      },
      {
        exerciseId: "b72ab6ab-fed4-4a3a-808c-1616be7f9f37", // Dips - Triceps Version
        sets: 3,
        reps: 10,
        order: 6,
        trackingType: "reps",
      },
    ],
  },
  {
    name: "Lower Body Blast",
    systemRoutineCategory: "Strength",
    notes:
      "A comprehensive lower body workout aimed at strengthening and toning the legs and glutes. Great for building power and endurance.",
    WorkoutPlanExercises: [
      {
        exerciseId: "d168c08d-6287-4b1a-8a83-51b5ae9f47b8", // Barbell Squat
        sets: 4,
        reps: 8,
        order: 1,
        trackingType: "reps",
      },
      {
        exerciseId: "c66b9610-1816-43e7-b592-5d219a39e1e4", // Barbell Deadlift
        sets: 4,
        reps: 8,
        order: 2,
        trackingType: "reps",
      },
      {
        exerciseId: "6bf299fa-806f-4cbd-a528-525003fe5c33", // Dumbbell Lunges
        sets: 3,
        reps: 10,
        order: 3,
        trackingType: "reps",
      },
      {
        exerciseId: "75b08d47-6079-467b-958c-800b4b788073", // Leg Press
        sets: 3,
        reps: 10,
        order: 4,
        trackingType: "reps",
      },
      {
        exerciseId: "09bfe29a-0299-4151-b9e0-a8436a071e97", // Standing Dumbbell Calf Raise
        sets: 3,
        reps: 15,
        order: 5,
        trackingType: "reps",
      },
    ],
  },
  {
    name: "Core Stability and Strength",
    systemRoutineCategory: "Strength",
    notes:
      "This routine is centered around building core muscle strength and stability, which is essential for overall fitness and injury prevention.",
    WorkoutPlanExercises: [
      {
        exerciseId: "abad9399-c648-420f-9a6b-09e90cceea9e", // Plank
        sets: 3,
        duration: 30,
        order: 1,
        trackingType: "duration",
      },
      {
        exerciseId: "09bfe29a-0299-4151-b9e0-a8436a071e97", // Standing Cable Wood Chop
        sets: 3,
        reps: 12,
        order: 2,
        trackingType: "reps",
      },
      {
        exerciseId: "597b53c9-9b84-4b48-8ef3-98c2726b8edd", // Russian Twist
        sets: 3,
        reps: 15,
        order: 3,
        trackingType: "reps",
      },
      {
        exerciseId: "467dcfed-c298-445e-96d7-e7ef79ea6df9", // Cross-Body Crunch
        sets: 3,
        reps: 20,
        order: 4,
        trackingType: "reps",
      },
      {
        exerciseId: "8599fa4a-1283-4260-a726-40e55c38d636", // Hanging Leg Raise
        sets: 3,
        reps: 10,
        order: 5,
        trackingType: "reps",
      },
    ],
  },

  // Weight Loss

  // Beginner
];
