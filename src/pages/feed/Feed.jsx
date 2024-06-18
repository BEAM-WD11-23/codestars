import { useContext, useEffect } from 'react';
import Header from '../../components/header/Header';
import PostError from '../../components/postError/PostError';
import Postcard from '../../components/postcard/Postcard';
import Spinner from '../../components/spinner/Spinner';
import { usePosts } from '../../services/post.service';
import './Feed.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'boxicons/css/boxicons.min.css';

const Feed = () => {
    const { isPending, posts, errors, refresh } = usePosts()
    
    useEffect(()=>{console.log(posts)},[posts])
    return (
        <section className="Feed">
            <Header />
            <main>
            {
                isPending ? <Spinner size='2.5em' color='gray' /> :
                posts ? posts.map((post, index) => <Postcard post={post} key={index} />) :
                errors && <PostError errors={errors} />
            }
            </main>
        </section>
    );
};

export default Feed;

// This is the js 

// { <script src="../../js/header.js" defer></script>
// <script src="../../components/Nav.js" defer></script>
// <script src="../../components/postCard/postCard.js" defer></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js" defer></script> }
