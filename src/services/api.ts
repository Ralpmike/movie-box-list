import type { MovieResponse, Movie } from "../model/model";

const BASE_URL = "https://api.themoviedb.org/3";
// const API_KEY = "b732d78d97b9bf097d6657c4978b9f95";

const headers = {
  Accept: "application/json",
  Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzMyZDc4ZDk3YjliZjA5N2Q2NjU3YzQ5NzhiOWY5NSIsIm5iZiI6MTc3MjM4NjgzOS4wNTMsInN1YiI6IjY5YTQ3YTE3NzAyZmE1NDk0N2UyYjk2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6pdJ5TA91pAncydoI-kZbzKFY3TNj3gxJQZAOvv9ay0`,
};

export const getPopularMovies = async (): Promise<Movie[] | undefined> => {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular`, {
      method: "GET",
      headers,
    });
    if (response.ok) {
      const data: MovieResponse = await response.json();
      return data.results;
    }

    return undefined;
  } catch (error) {
    console.error(error);
  }
};

export const getSearchMovie = async (query: string): Promise<unknown> => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`,
      {
        method: "GET",
        headers,
      }
    );
    if (response.ok) {
      const data: unknown = await response.json();
      return data;
    }
  } catch (error) {
    console.error(error);
  }
};
