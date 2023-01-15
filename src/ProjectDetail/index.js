import './styles.css';
import { Component } from 'react';
import { Header } from '../components/Header';
import { Posts } from '../components/Posts/posts';
import ButtonDownload from '../components/options-button';
import ButtonCode from '../components/linkCode-button';
import ProgressBar from '../components/ProgressBar/ProgressBar';


class ProjectDetail extends Component {
  state = { 
    posts: [],
    allposts: [],
    page :0 ,
    postsPerPage: 9
    
  };

  async componentDidMount(){
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    const postsjson = await posts.json();
    const photosjson = await photos.json();

    const { postsPerPage, page } = this.state

    const postsAndPhotos = postsjson.map((post, index) => {
      return { ...post, cover: photosjson[index].url }
    })

    this.setState({ posts: postsAndPhotos.slice(page,postsPerPage),
    allposts: postsAndPhotos });

  }



  render() {

    return(
        <div>
        <Header/>
        <div className='container-page'>

            <div className='image-container '>
                <img className='image' src='./god-of-war.jpg' align="right" ></img>
                <p id='disclaimer'>Este projeto precisa de colaboradores!</p>

                <div className='action-button'>
                  <button id='Favorito'>☆ Favoritar</button>
                  <button>Se Candidatar</button>
                  <button>Financiar Projeto</button>
                  

                </div>

                <h3 align="right" className='text-meta' >Meta do Projeto:</h3>

                <ProgressBar/>

                <ButtonDownload/>
                <ButtonCode/>

                
              

               

            </div>
            <div className='texto'>
               <h1>God of War</h1>
               <p>
                Do estúdio Santa Monica, vem a sequência do aclamado God of War de 2018. Os invernos de ‘Fimbulwinter’ estão a caminho. Kratos e Atreus devem viajar para cada um dos Nove Reinos em busca de respostas enquanto forças asgardianas se preparam para uma batalha profetizada que resultará no fim do mundo. Ao longo do caminho, eles vão explorar paisagens míticas e enfrentar inimigos na forma de deuses e monstros nórdicos. A ameaça do Ragnarök se aproxima cada vez mais. Kratos e Atreus devem escolher entre sua própria segurança e a segurança dos reinos.</p>
            </div>
            

            <div className='about'>
                <h2>Informações sobre o Estudio</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex orci, 
                  molestie facilisis dolor et, convallis pellentesque sapien. 
                  Praesent ipsum erat, efficitur dapibus ex in, luctus imperdiet leo. 
                  Proin justo enim, placerat vitae tempor a, lobortis sit amet massa. Duis magna metus,
                   tincidunt fringilla porta ac, dignissim eget felis. </p>

            </div>
        
            <div className='rewards'>
                <h2>Metas e recompensas</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ex orci, 
                  molestie facilisis dolor et, convallis pellentesque sapien. 
                  Praesent ipsum erat, efficitur dapibus ex in, luctus imperdiet leo. 
                  Proin justo enim, placerat vitae tempor a, lobortis sit amet massa. Duis magna metus,
                   tincidunt fringilla porta ac, dignissim eget felis. </p>

            </div>
            
            
           
        </div>
        </div>
    );
      
  }

};

export default ProjectDetail;
