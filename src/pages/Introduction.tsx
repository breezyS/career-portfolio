import { Button } from "@/components/ui/button";
import { Drawer } from "@/components/ui/drawer";
import { DrawerContent } from "@/components/ui/drawer";
import { DrawerDescription } from "@/components/ui/drawer";
import { DrawerFooter } from "@/components/ui/drawer";
import { DrawerHeader } from "@/components/ui/drawer";
import { DrawerTitle } from "@/components/ui/drawer";
import { DrawerTrigger } from "@/components/ui/drawer";
import { DrawerClose } from "@/components/ui/drawer";
import React from "react";

const Introduction = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button onMouseEnter={() => setOpen(true)}>Open</Button>
      <Drawer direction="top" open={open}>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Introduction;
