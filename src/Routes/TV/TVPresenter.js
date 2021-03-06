import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";
import NowPlaying from "Components/NowPlaying";


const Container = styled.div`
  padding: 0 10px;
  padding-top: 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) => (
  <>
    <Helmet>
      <title>TV Shows | Nomflix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
      {airingToday && airingToday.length > 0 && (
          <NowPlaying data={airingToday} isMovie={false} />
        )}

        {popular && popular.length > 0 && (
          <Section title='Popular Shows' hover={true}>
            {popular.map((show, index) => (
              <Poster
                index={index}
                key={show.id}
                id={show.id}
                year={show.first_air_date && show.first_air_date.split('-')[0]}
                title={show.original_name}
                rating={show.vote_average}
                imageUrl={show.poster_path}
              />
            ))}
          </Section>
        )}

        {topRated && topRated.length > 0 && (
          <Section title='Top Rated Shows'>
            {topRated.map((show, index) => (
              <Poster
                index={index}
                key={show.id}
                id={show.id}
                year={show.first_air_date && show.first_air_date.split('-')[0]}
                title={show.original_name}
                rating={show.vote_average}
                imageUrl={show.poster_path}
              />
            ))}
          </Section>
        )}

        {error && <Message text={error} color='#e74c3c' />}
      </Container>
    )}
  </>
);

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default TVPresenter;