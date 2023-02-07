import { PropTypes } from 'prop-types';
export const MovieInformation = ({
  movie: { title, poster_path, overview, release_date, vote_average, genres },
}) => {
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
      <h2>
        {title} {`${new Date(release_date).getFullYear()}`}
      </h2>
      <p>User score {Number.parseInt(vote_average * 10)}%</p>
      <h3>Overview</h3>
      <p>{overview} </p>
      <h3> Genres</h3>
      <p>
        {genres?.length > 0
          ? genres.map(genre => genre.name).join(', ')
          : 'No genres'}
      </p>
    </div>
  );
};
MovieInformation.propTypes = {
  title: PropTypes.string,
  poster_path: PropTypes.string,
  overview: PropTypes.string,
  vote_average: PropTypes.number,
  release_date: PropTypes.string,
};
