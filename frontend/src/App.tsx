import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from './pages/Explore';
import Home from './pages/Home';
import Create from './pages/Create';

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearchbar = () => {
    setIsSearchOpen((prev) => !prev); // Toggle the search bar visibility
  };
  return (
    <>
      {/* Example of a Drawer Component (uncomment to use) */}
      {/* <div className="drawer">
        <Drawer>
          <DrawerTrigger>Open</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>This action cannot be undone.</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div> */}

      {/* Example of a Sheet Component (uncomment to use) */}
      {/* <div className="sheet">
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div> */}

      <Router>
      <Header toggleSearchbar={toggleSearchbar} isSearchOpen={isSearchOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/create" element={<Create/>}/>
          {/* <Route path="*" element={<NotFound />} /> 404 Not Found route */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
