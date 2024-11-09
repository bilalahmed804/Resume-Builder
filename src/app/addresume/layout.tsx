import ResumeForm from "@/components/App"

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
        <section className="w-full h-screen flex flex-col md:flex-row bg-gray-800">
        <div className="w-full md:w-1/2">
          <ResumeForm/>
        </div>
        <div className="w-full md:w-1/2">
          {children}
        </div>
      </section>
      
    )
  }