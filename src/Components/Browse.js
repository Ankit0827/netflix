import Header from '../Components/Header'

const Browse=()=>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWJhYzIwNDE0NWViNDMzMjZjY2MxMmZjMjNiYmJiOSIsInN1YiI6IjY1MzY5NTRlYWJkYWZjMDBhY2Y4YWVjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ahuZssKDjBSEbk9oauwijqU_lcX7ykv8l3SecqPPOEg'
        }
      };
      
      fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    return(
        <div className="">
            <Header/>
        </div>
    )
}

export default Browse