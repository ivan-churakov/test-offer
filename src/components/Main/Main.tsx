import * as React from 'react';
import {useDispatch} from "react-redux";
import {useState} from "react";
import styled from "styled-components";
import {fetchSearch} from "../../store/features/slices/apiSlice";
import {Table} from "../Table/Table";

export const Container = styled.div`
  width: 1200px;
  padding: 20px;
  display: block;
  margin: 0 auto;
  box-sizing: border-box;
  @media (max-width: 1200px) {
    width: 100%;
  }
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 30px;
  margin-top: 20px;
`
const Input = styled.input`
  width: 400px;
  font-size: 18px;
  padding: 5px 10px;
  border: 2px solid #0099ff;
  border-radius: 3px;
  background: #ffffff00;
  cursor: pointer;
  &:focus {
    border: 2px solid #0099ff;
    outline: 2px solid #0099ff;
  }
  @media (max-width: 640px) {
    width: 100%;
  }
`
const Button = styled.button`
  font-size: 24px;
  padding: 5px 25px;
  border: 2px solid #0099ff;
  border-radius: 3px;
  background: #ffffff00;
  cursor: pointer;
  &:hover {
    outline: 2px solid #0099ff;
  }
  @media (max-width: 640px) {
    font-size: 20px;
  }
`
const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #0099ff;
  margin-bottom: 40px;
`


export const Main = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const onSearch = (e: any) => {
    e.preventDefault();
    setSearch(e.target.value);
  }

  const onButton = () => {
    dispatch(fetchSearch(search))
  }
  return (
    <Container>
      <Title>/StackIvanFlow/</Title>
      <Row>
        <Input type="text" onChange={onSearch} value={search} placeholder="Enter your question"/>
        <Button onClick={onButton}>Find</Button>
      </Row>
      <Table/>
    </Container>
  );
};