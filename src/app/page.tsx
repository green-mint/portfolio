import { Inter } from "next/font/google";
import GradCircle from "@/components/GradCircle";
import dynamic from "next/dynamic";
// import Moon from "@/components/Moon";
const Moon = dynamic(() => import("@/components/Moon"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen overflow-x-clip relative flex-col items-center justify-center">
      <GradCircle className="absolute" width={650} height={650} />
      <div className="relative flex">
        <div className="w-64 opacity-95 aspect-square rounded-full bg-white" />
        <div className="absolute -left-96 -top-16">
          <small>Hi, I am</small>
          <h2 className="font-bold text-8xl relative -left-3">Saad.</h2>

          <div className="flex space-x-4  items-center">
            <div className="h-2 rounded-[1px] w-10 bg-white" />
            <div>a software engineer</div>
          </div>
        </div>
      </div>

      <div className="absolute right-0 translate-x-1/2">
        <Moon />
      </div>
    </main>
  );
}
