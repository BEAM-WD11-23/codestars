import Postcard from '../components/postcard/Postcard';
import Navigation from '../components/navigation/Navigation';
import './Feed.css';
import Header from '../components/header/Header';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'boxicons/css/boxicons.min.css';

const Feed = () => {
    return (
        <section className="Feed">
            <Header />
            <main>
                <Postcard />
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
