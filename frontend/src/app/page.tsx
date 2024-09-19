import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col max-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 ">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none pb-4">
                  Manage Tasks Your Way
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  TaskPlus: The ultimate task management app with flexible List
                  and Kanban views. Boost your productivity today!
                </p>
              </div>
              <div className="space-x-4">
                <Link href={"/signup"} className={buttonVariants()}>
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
