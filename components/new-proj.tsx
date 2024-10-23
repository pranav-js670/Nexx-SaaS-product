import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";
import { createProject } from "@/actions/createProject";
import SubmitButton from "@/components/submit-proj-btn";

const NewProjBtn = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full ml-4">
          <Plus className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded-md">
        <DialogHeader>
          <DialogTitle>New Project</DialogTitle>
          <DialogDescription>
            Create a new project to get started!
          </DialogDescription>
        </DialogHeader>
        <form className="flex gap-4 flex-col" action={createProject}>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Name</Label>
              <Input name="name" id="name" placeholder="Project Name"></Input>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="url">URL</Label>
              <Input
                name="url"
                id="url"
                placeholder="https://example.com"
              ></Input>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              name="description"
              id="description"
              placeholder="Project Description (optional)"
            ></Textarea>
          </div>
          <SubmitButton />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewProjBtn;
