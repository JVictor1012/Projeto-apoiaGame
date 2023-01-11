export const Posts = ({title, id, body}) =>{
    return(
        
        <div className='post'>
            <div className="post-content">
              <h2>{title}</h2>
              <p>{body}</p>
              <button>Detalhes</button>

            </div>
          </div>
    )
}