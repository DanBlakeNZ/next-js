import React from 'react'
import { useState, useEffect } from 'react';
// USE STATE
// https://reactjs.org/docs/hooks-reference.html#usestate
// https://reactjs.org/docs/hooks-overview.html
// useState hook allows the use of state within a functional (dumb) component - this is a react hook.

// USE EFFECT
// https://reactjs.org/docs/hooks-effect.html
// useEffect hook tells React that your component needs to do something after render

import {getMovies, getCategories} from "../actions/index";


import SideMenu from '../components/SideMenu';
import Carousel from '../components/Carousel';
import MovieList from '../components/MovieList';

const Home = (props) => {

  const { movies, images, categories } = props

  return(
    <div>
      <div className="home-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <SideMenu categories={ categories || []}/>
            </div>
            <div className="col-lg-9">
              <Carousel images={ images }/>
              <div className="row">
                <MovieList movies={ movies || [] }/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.getInitialProps= async () => {
  const movies = await getMovies();
  const categories = await getCategories();
  const images = movies.map((movie) =>{
    return {
      id: `image-${movie.id}`,
      url: movie.cover,
      name: movie.name
    }
  })
  return { movies, images, categories }; //gets sent to props
}





// class Home extends React.Component {

//   static async getInitialProps () { // Page wont render until has the initial data - good for SEO etc - server side rendered.
//     const movies = await getMovies()

//     return { movies }
//   }

  // Is only called on client browser - so data wont appear on initial load - bad for SEO etc.
  // componentDidMount(){
  //   getMovies().then((movies) => {
  //     this.setState({movies})
  //   })
  //   .catch((error)=>{
  //     this.setState({errorMessage: error})
  //   })
  // }

//   render(){
//     const { movies, errorMessage } = this.props
//     return(
//       <div>
//         <Head>
//           <title>Home</title>
//           <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
//           <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
//           <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
//           <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
//         </Head>

//         <style jsx >{`
//         .home-page {
//           padding-top: 80px;
//         }
//       `}</style>

//         <Navbar />
//         <div className="home-page">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-3">
//                 <SideMenu />
//               </div>
//               <div className="col-lg-9">
//                 <Carousel />
//                 <div className="row">
//                   <MovieList movies={movies}/>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     ) 
//   }
// }

export default Home
