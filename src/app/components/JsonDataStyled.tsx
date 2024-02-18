"use client";
import React, { FC } from "react";
import styled from "styled-components";


interface Pokemon {
  name: string;
  url: string;
}

const MainContainer = styled.div`
  position: fixed;
  height: 100dvh;
  background-color: black;
  color: white;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-tap-highlight-color: transparent;
  overflow-x: scroll;
`;

const InnerContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 90%;
  padding: 1rem;
  margin: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  border: 1px solid white;
  padding: 8px;
`;

const Td = styled.td`
  border: 1px solid white;
  padding: 8px;
`;

const SubmitButtonUX = styled.button`
  display: flex;
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 3rem;
  padding: 0.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: #ff804a;
  outline: none;
  border: 1px solid #ff7e56;
  border-radius: 4px;
  cursor: pointer;
  background: black;
  font-family: var(--font-Roboto);
  text-transform: uppercase;
  width: 15rem;
  text-align: center;
  justify-content: center;
  border-radius: 5px;
  font-size: 1.2rem;
  letter-spacing: 0.5rem;

  &:hover,
  &:active {
    background-color: #ff56d7;
    color: white;
  }
  &:disabled {
    background-color: grey;
  }
`;

const JsonDataStyled: FC<{ data: Pokemon[] }> = ({ data }) => (
  <MainContainer>
    <InnerContainer>
      <Table>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>URL</Th>
            <Th>Farm Compute Time</Th>
            <Th>Real Compute Time</Th>
          </tr>
        </thead>
        <tbody>
          {data.map((pokemon, index) => (
            <tr key={index}>
              <Td>{pokemon.name}</Td>
              <Td>{pokemon.url}</Td>
              <Td>{pokemon.url}</Td>
              <Td>{pokemon.url}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
      <SubmitButtonUX type="submit">Next</SubmitButtonUX>
    </InnerContainer>
  </MainContainer>
);

export default JsonDataStyled;