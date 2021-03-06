import Head from "next/head";
import server from '../../config'
import { Fragment } from "react";
import MovieList from "../../components/movies/MovieList";

function AllMovies(props) {
  console.log(server)
  return (
    <Fragment>
      <Head>
        <title>All Movies</title>
      </Head>
      <div>
        <h2>All Movies</h2>
        <MovieList movies={props.movies} />
      </div>
    </Fragment>
  );
}

export async function getStaticProps() {
  const response = await fetch(`${server}/api/all-movies`);
  const data = await response.json();
  return {
    props: {
      movies: data.movies,
    },
    revalidate: 1,
  };
}

export default AllMovies;
