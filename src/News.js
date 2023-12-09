export default function News(props)
{
	return(
		<div className="news">
			<div className="news-img">
            {
                props.article.urlToImage !== null?
                <img src={props.article.urlToImage}/>:
                <img src="https://gambrinus.hu/packages/gambrinus/images/no_img.jpg"/>
            }	
			</div>

			<strong>{props.article.title}</strong>

			<p>{props.article.description?.substring(0,100).concat("...")}
            <a href={props.article.url} target="_blank">read more</a></p> 
            {/* ? is a null check operator. if null/ no data no error and if data then it applies substring */}

			<div className = "source">
				<p>Author: {props.article.author}</p>
				<p>{props.article.source.name}</p>
			</div>
		</div>
	)
}