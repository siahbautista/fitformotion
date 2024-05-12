"use client";
import { handleCreateUserGoal } from "@/server-actions/UserServerActions";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";
import { IconTargetArrow } from "@tabler/icons-react";
import { useState } from "react";
import { toast } from "sonner";
import useSWR from "swr";

interface Exercise {
  id: string;
  name: string;
}

export default function CreateDashboardGoal() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data: exercises, error } = useSWR<Exercise[]>(
    "/api/exercises",
    fetcher,
  );

  const [exerciseId, setExerciseId] = useState("");
  const [goalValue, setGoalValue] = useState(25);
  const [isOpen, setIsOpen] = useState(false);

  if (error) return <div>Failed to load exercises</div>;
  if (!exercises)
    return (
      <Button variant="flat" className="absolute bottom-5 left-3" isDisabled>
        <IconTargetArrow className="text-primary" /> Set Goal
      </Button>
    );

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await handleCreateUserGoal({ exerciseId, goalValue });
    if (response.success) {
      toast.success(response.message);
      setIsOpen(false);
    } else {
      toast.error(response.message);
    }
  };

  return (
    <Popover
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      placement="bottom"
      showArrow
      offset={10}
    >
      <PopoverTrigger>
        <Button size="sm" className="absolute bottom-5 left-3 button_bg_primary_800">
          <IconTargetArrow size={20} className="text-black dark:text-primary" /> Set Goal
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        {(titleProps) => (
          <form className="px-1 py-2 w-full" onSubmit={handleSubmit}>
            <p className="text-small font-bold text-foreground" {...titleProps}>
              Set New Goal
            </p>
            <div className="mt-2 flex flex-col gap-2 w-full">
              <Autocomplete
                label="Exercise"
                placeholder="Search Exercises"
                size="sm"
                defaultItems={exercises}
                onSelectionChange={(id) => setExerciseId(String(id))}
              >
                {(exercise) => (
                  <AutocompleteItem key={exercise.id}>
                    {exercise.name}
                  </AutocompleteItem>
                )}
              </Autocomplete>
              <Input
                onChange={(e) => setGoalValue(Number(e.target.value))}
                label="Target"
                size="sm"
                endContent={
                  <div className="pointer-events-none flex items-center">
                    <span className="text-zinc-400 text-small">kg</span>
                  </div>
                }
              />
              <Button type="submit" color="primary">
                Save
              </Button>
            </div>
          </form>
        )}
      </PopoverContent>
    </Popover>
  );
}
