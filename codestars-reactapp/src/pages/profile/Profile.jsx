import Header from '/src/components/header/Header.jsx'
import Navigation from '/src/components/navigation/Navigation.jsx'
import "/src/pages/profile/Profile.css"


function Profile() {
  return (
    <>
      <Header/>
    <div className="Profile">

        <section className="Profile__content__imgBlock">
          <div className="Profile__backgroundImg">
            <div className="Profile__EditBtn EditBtn__backgroundImg">
                <i className="fa-solid fa-camera"></i>
            </div>
          </div>

          <div className="Profile__img">
              <div className="Profile__EditBtn EditBtn__profileImg">
                  <i className="fa-solid fa-camera"></i>
              </div>
          </div>
        </section>
                     
        <section className="Profile__content__btnBlock">
          <div className="Profile__BigBtn"><p>New Post</p><i className="fa-solid fa-circle-plus"></i></div>
          <div className="Profile__BigBtn"><p>Edit Profile</p><i className="fa-solid fa-pencil"></i></div>
        </section>

    </div>
      


      <Navigation/>
    
    </>
  )
}

export default Profile