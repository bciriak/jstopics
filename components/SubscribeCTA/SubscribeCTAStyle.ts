import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 5rem;
  padding-bottom: 3rem;
`

export const Intro = styled.p`
  width: 55%;

  line-height: 2rem;
  font-weight: 200;
`

export const Form = styled.form`
  padding: 1rem 0;

  input {
    min-width: 250px;
    padding: 0.6rem 1rem;

    background: none;
    border: none;
    border-bottom: 2px solid white;
    color: white;
  }

  input::placeholder {
    color: grey;
    font-weight: 300;
  }

  input:focus {
    outline: none;
  }
`

export const SubmitButton = styled.button`
  padding: 0.6rem 1rem;
  margin-left: 2rem;

  color: black;
  background: white;
  font-weight: bold;
  border: none;
  border-radius: 10px;

  font :hover {
    cursor: pointer;
  }
`
