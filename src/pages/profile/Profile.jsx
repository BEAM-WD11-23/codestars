import Header from '/src/components/header/Header.jsx'
import Postcard from '../../components/postcard/Postcard.jsx'
import "/src/pages/profile/Profile.css"
import { usePosts } from '../../services/post.service.js'
import Spinner from '../../components/spinner/Spinner.jsx'
import PostError from '../../components/postError/PostError.jsx'


function Profile() {
  const { isPending, posts, errors, refresh } = usePosts()

  return (
    <>
      <Header/>

      <div className="Profile">

        <section className="Profile__content__imgBlock">
          <div className="Profile__backgroundImg">
            <p>Add your background image</p>
            <div className="Profile__EditBtn EditBtn__backgroundImg">
                <i className="fa-solid fa-camera"></i>
            </div>
          </div>

          <div className="Profile__img">
              <p>Add your profile image</p>
              <div className="Profile__EditBtn EditBtn__profileImg">
                  <i className="fa-solid fa-camera"></i>
              </div>
          </div>
        </section>
        
        <section className='Profile__username'>
          <p>Username</p>
        </section>

        <section className="Profile__content__btnBlock">
          <button className="Profile__BigBtn">New Post<i className="fa-solid fa-circle-plus"></i></button>
          <button className="Profile__BigBtn">Edit Profile<i className="fa-solid fa-pencil"></i></button>
        </section>

      </div>
      
        {
          isPending ? <Spinner size='2.5em' color='gray' /> :
          posts ? posts.map((post, index) => <Postcard post={post} key={index} />) :
          errors && <PostError errors={errors} />
        }
    
    </>
  )
}

export default Profile