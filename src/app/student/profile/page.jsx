import StudentNavbar from '@/components/NavBar/StudentNavbar'
import ProfilePage from '@/components/Student/ProfilePage'

const profile = () => {
  return (
    <>
   <StudentNavbar />
        <ProfilePage />
      {/* <main className="flex min-h-screen flex-col items-center justify-between py-24 px-5">
      </main> */}
    </>
  )
}

export default profile