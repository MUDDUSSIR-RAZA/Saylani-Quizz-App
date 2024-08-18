import StudentNavbar from '@/components/NavBar/StudentNavbar'
import ProfilePage from '@/components/Student/ProfilePage'

const profile = () => {
  return (
    <>
   <StudentNavbar />
      <main className="pt-20">
        <ProfilePage />
      </main>
    </>
  )
}

export default profile