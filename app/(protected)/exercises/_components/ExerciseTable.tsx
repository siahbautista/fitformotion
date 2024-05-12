"use client";
import { ButtonGroup } from "@nextui-org/button";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { User } from "@nextui-org/user";
import { Exercise } from "@prisma/client";
import clsx from "clsx";
import ExerciseAddToRoutineButton from "./ExerciseAddToRoutineButton";
import ExerciseAddToRoutineCreatorButton from "./ExerciseAddToRoutineCreatorButton";
import ExerciseFavButton from "./ExerciseFavButton";
import ExerciseInfoButton from "./ExerciseInfoButton";
import ExerciseRemoveRoutineCreatorButton from "./ExerciseRemoveRoutineCreatorButton";

interface UserRoutine {
  id: string;
  name: string;
  exerciseCount: number;
}

type ExerciseProps = {
  exercises: Exercise[];
  favouriteExercises: Set<string>;
  userRoutines?: UserRoutine[];
  mode: string;
  highlightedExercises?: any;
};

function formatDisplayName(name: string): string {
  return name
    .split("_")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function formatExerciseNameForImage(exerciseName: string): string {
  return exerciseName.replace(/[^\w]/g, "_");
}

export default function ExerciseTable({
  exercises,
  favouriteExercises,
  userRoutines,
  mode,
  highlightedExercises,
}: ExerciseProps) {
  return (
    <Table
      aria-label="Exercises Table"
      className="mb-3"
      classNames={{
        wrapper: "shadow-md",
      }}
      shadow="none"
      isCompact
    >
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn className="hidden lg:table-cell">MUSCLES</TableColumn>
        <TableColumn>
          <></>
        </TableColumn>
      </TableHeader>
      <TableBody emptyContent={"No results found."}>
        {exercises.map((exercise, index) => {
          const isHighlighted = highlightedExercises?.some(
            (highlightedExercise: Exercise) =>
              highlightedExercise.id === exercise.id,
          );
          return (
            <TableRow key={exercise.id}>
              <TableCell
                className={clsx("capitalize", {
                  "bg-zinc-300/20 dark:bg-zinc-700/20 text-black dark:text-primary":
                    isHighlighted,
                  "rounded-tl-lg": isHighlighted && index === 0,
                })}
              >
                <User
                  avatarProps={{
                    radius: "lg",
                    src: `/images/exercises/${formatExerciseNameForImage(exercise.name)}/images/0.jpg`,
                    className: "hidden md:block",
                  }}
                  description={
                    <span className="text-zinc-600 dark:text-zinc-400">
                      {formatDisplayName(exercise.category)}
                    </span>
                  }
                  name={exercise.name}
                />
              </TableCell>
              <TableCell
                className={clsx("capitalize hidden lg:table-cell", {
                  "bg-zinc-300/20 dark:bg-zinc-700/20 text-black dark:text-primary":
                    isHighlighted,
                })}
              >
                <div className="flex flex-col">
                  <p className="text-bold text-small">
                    {exercise.primary_muscles
                      .map((muscle) => formatDisplayName(muscle))
                      .join(", ")}
                  </p>
                  <p className="text-bold text-tiny text-zinc-600 dark:text-zinc-400">
                    {exercise.secondary_muscles
                      .map((muscle) => formatDisplayName(muscle))
                      .join(", ")}
                  </p>
                </div>
              </TableCell>
              <TableCell
                className={clsx(
                  "flex h-full justify-end items-center h-[61px]",
                  {
                    "bg-zinc-300/20 dark:bg-zinc-700/20": isHighlighted,
                    "rounded-tr-lg": isHighlighted && index === 0,
                  },
                )}
              >
                <ButtonGroup size="sm" variant="flat">
                  <ExerciseInfoButton exercise={exercise} />
                  <ExerciseFavButton
                    exerciseId={exercise.id}
                    isFavourite={favouriteExercises.has(exercise.id)}
                  />
                  {isHighlighted ? (
                    <ExerciseRemoveRoutineCreatorButton
                      exerciseId={exercise.id}
                    />
                  ) : mode === "exercisePage" ? (
                    <ExerciseAddToRoutineButton
                      exercise={exercise}
                      userRoutines={userRoutines}
                    />
                  ) : (
                    mode === "createRoutine" && (
                      <ExerciseAddToRoutineCreatorButton
                        exerciseId={exercise.id}
                      />
                    )
                  )}
                </ButtonGroup>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
