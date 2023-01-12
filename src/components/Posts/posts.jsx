import './styles.css'

export const Posts = ({title, id, body, cover}) =>{
    return(
        
        <div className='post'>
            <img src={cover} alt={title} />
            <div className="post-content">
              <h2>{title}</h2>
              <p>{body}</p>
              <div className="container-button">
               <button>Detalhes</button>
              </div>
            </div>
          </div>
    )
}