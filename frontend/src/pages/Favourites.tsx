import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '../components/ui/sheet'; 
interface FavouritesProps {
  isOpen: boolean;  // New prop to control visibility
  onClose: () => void;
}

const Favourites: React.FC<FavouritesProps> = ({ isOpen, onClose }) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}> 
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Favourites</SheetTitle>
          <SheetDescription>
            Manage your favourite items here.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Favourites;