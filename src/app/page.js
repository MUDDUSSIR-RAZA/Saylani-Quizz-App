import Navbar from "@/components/Navbar";
import CourseList from "@/components/admin/CourseList";

export default function Home() {
  
  return (<>
  <Navbar/>
   <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <CourseList  />
    </main>
  </>
   
  );
}
