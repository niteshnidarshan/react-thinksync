import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import { format } from 'date-fns';
import News from './News';

function App() {
  const site = "https://newsapi.org/";
  const key = "de8f33f23551428cbbaebb372d1c5c38";
  let [articles, setArticles] = useState([]);
	let [category, setCategory] = useState("India");
  const [selectedDate, setSelectedDate] = useState([]);

    const handleDateChange = (e) => {
      // Handle date change logic here
      setSelectedDate(e.target.value);
    }
	useEffect(()=>{
		fetch(`${site}v2/everything?q=${category}&from=${selectedDate}&sortBy=popularity&apiKey=${key}`,
      {
        method:"GET",
        mode:"cors"
      }
    )
		.then((response)=>response.json())
		.then((news)=>{
			setArticles(news.articles);
		})
		.catch((err)=> {
			console.log(err)
		})
	},[category, selectedDate])
  // if the category changes, whole api calls again and load according to search text

  return (
    <div className="App">

		<header className = "header">
			<h1>ThinkSync</h1>
      <section className='search-box'>
      <label>news by date: </label>
      <input
        type="date"
        id="dateInput"
        name="dateInput"
        value={selectedDate}
        onChange={handleDateChange}
      />
      {/* {selectedDate && (
        <p>Selected Date: {format(new Date(selectedDate), 'dd/MM/yyyy')}</p>
      )} */}
      <label> | </label>
			<input type="text" onChange={(event)=> {
				if(event.target.value!==""){
					setCategory(event.target.value)
				} else{
					setCategory("India")
				}
			}} placeholder="search news"/>	
      </section>
		</header>

		<section className="news-articles">
			{
				//js code
				articles.length!==0?
				articles.map((article)=>{
					return(
						<News article={article}/>
					)
				}) : <h3>No news for your search text</h3>
			}
			
		</section>
	</div>
  );
}

export default App;
