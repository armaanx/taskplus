import { ListTodo } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const NavBar = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b sticky top-0 left-0 right-0 z-10 bg-background shadow-sm py-8">
      <Link className="flex items-center justify-center" href="/">
        <ListTodo className="h-6 w-6" />
        <span className="sr-only">TaskMaster</span>
      </Link>
      <nav className="ml-auto flex flex-row items-center justify-center gap-4 sm:gap-6">
        <ThemeToggle />
      </nav>
    </header>
  );
};
export default NavBar;
