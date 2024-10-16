import React from 'react'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '../components/ui/sheet'; 

interface HelpProps{
  isOpen: boolean; 
  onClose: () => void;
}

const Help: React.FC<HelpProps> = ({ isOpen, onClose }) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}> 
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Help</SheetTitle>
          <SheetDescription>
            This is a help page
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Help;