import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <div className="pt-28  bg-blue-950 min-h-screen">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 text-center to-pink-500 text-transparent bg-clip-text">
  <span className="text-white">Achieve Your Dream Job</span> <br/> Professional <span className="text-white"> with a Resume</span>
</h1>
<div className="mt-20 text-center">

      <Link href={"/addresume"}><Button className="mr-6">Get Started</Button></Link>
      <Link href={"/"}><Button className="bg-white text-black border border-black hover:bg-gray-200">Watch Video</Button></Link>
</div>

    </div>
  );
}
