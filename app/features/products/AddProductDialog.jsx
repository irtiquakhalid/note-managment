// features/products/AddProductDialog.jsx
"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function AddProductDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 text-white px-4 py-2 rounded">
          + Add New
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create New Cart</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div>
            <label className="text-sm font-semibold text-blue-600">
              Cart Style
            </label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Text Placeholder" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Text Placeholder</SelectItem>
                <SelectItem value="option2">Text Placeholder</SelectItem>
                <SelectItem value="option3">Text Placeholder</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm font-semibold text-blue-600">
              Cart Title
            </label>
            <Input placeholder="Enter cart title" />
          </div>
          <div>
            <label className="text-sm font-semibold text-blue-600">
              Cart Description
            </label>
            <Textarea placeholder="Enter description..." />
          </div>
        </div>
        <DialogFooter>
          <Button className="w-full mt-4 bg-gray-400 text-white">
            🛒 Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
