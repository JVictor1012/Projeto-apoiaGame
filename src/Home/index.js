import './styles.css';
import { Component } from 'react';
import { Header } from '../components/Header';
import { Posts } from '../components/posts';
import { Banner } from '../components/banner';

class Home extends Component {
  state = { 
    posts: []
    
  };

  async componentDidMount(){
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const [posts] = await Promise.all([postsResponse]);

    const postsjson = await posts.json();

    this.setState({ posts: postsjson });

  }


  render() {

    const { posts } = this.state
    return(
      <div>
      <Header />

      <Banner />

      <section className='container'>
        
      <div className="posts">
        
        {posts.map(post => (
          <Posts
          key={post.id}  
          title={post.title}
          body={post.body}
          id={post.id}
          cover={post.cover}
          /> 
        )
        )}
      </div>
      </section>
      </div>
    );
  }

};

export default Home;
