"use client";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import DynamicIcon from "@/components/ui/dynamic-icon";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { useState } from "react";

export interface IconFinderProps {
  icons: string[];
}

export function IconFinder({ icons }: IconFinderProps) {
  const [open, setOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState("badge");

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
    >
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          size="icon"
        >
          <DynamicIcon
            name={selectedIcon as keyof typeof dynamicIconImports}
            className="w-4 h-4"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search Icons..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>

            {icons.map((iconName) => (
              <CommandItem
                key={iconName}
                value={iconName}
                onSelect={(currentValue) => {
                  setSelectedIcon(
                    currentValue === selectedIcon ? "" : currentValue
                  );
                  setOpen(false);
                }}
              >
                <DynamicIcon
                  name={iconName as keyof typeof dynamicIconImports}
                  className="h-4 w-4"
                />
                <span className="ml-2 capitalize">
                  {iconName.replace(/-/g, " ")}
                </span>
                <Check
                  className={cn(
                    "ml-2 h-4 w-4",
                    selectedIcon === iconName ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
