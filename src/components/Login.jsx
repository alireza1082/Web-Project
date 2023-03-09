import React from "react";
import styled from "styled-components";
import logo from '../images/Spotify_Logo_farsi.png';


export default function Login() {
  const handleClick = async () => {
    const client_id = "d3b9fce189664021ad2399d956b63b78";
    const redirect_uri = "http://localhost:3000/";
    const api_uri = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-private",
      "user-read-email",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-top-read",
    ];
    window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };
  return (
    <Container>
      <img
        src={logo}
        alt="spotify"
      />
      <button onClick={handleClick}>اتصال به اسپاتیفای</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  background-color: #5680b8;
  img {
    height: 30vh;
  }
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    background-color: black;
    color: #5680b8;
    border: none;
    font-family: vazir;
    font-size: 1.6rem;
    cursor: pointer;
  }
`;
