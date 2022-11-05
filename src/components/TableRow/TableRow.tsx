import * as React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid #c2c2c2;
  @media (max-width: 840px) {
    flex-direction: column;
  }
`
const Owner = styled.div`
  width: 200px;
`
const Title = styled.div`
  width: 400px;
`
const CountAnswer = styled.div<{ left?: boolean }>`
  width: 150px;
  padding: 0 20px;
  text-align: ${props => props.left ? 'left' : 'center'};
  @media (max-width: 840px) {
    text-align: left;
    padding: 0;
  }
`
const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  gap: 4px;
`
const Tag = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 3px 8px;
  border-radius: 10px;
  background: aliceblue;
`
const LinkDec = styled(Link)`
  margin: 0;
  text-decoration: none;
  color: #282c34;

  &:hover {
    color: #0099ff;
  }
`
const Text = styled.p<{ bold?: boolean }>`
  color: #202020;
  margin: 0;
  font-weight: ${props => props.bold ? 700 : 500};
  font-size: ${props => props.bold ? '20px' : '16px'};
`

type Props = {
  owner: string;
  title: string;
  countAnswer: string | number;
  tagsTitle?: string;
  tags?: string[];
  bold: boolean;
  id?: number;
};
export const TableRow = ({owner, title, countAnswer, tagsTitle, tags, bold, id}: Props) => {
  return (
    <Row>
      <Owner>
        <Text bold={bold}>{owner}</Text>
      </Owner>
      <Title>
        {bold ? <Text bold={bold}>{title}</Text> : <LinkDec to={`/question/${id}`}>{title}</LinkDec>}
      </Title>
      <CountAnswer left>
        <Text bold={bold}>{countAnswer}</Text>
      </CountAnswer>
      <Tags>
        {tags ?
          tags.map((tag) => {
            return (
              <Tag key={tag}>{tag}</Tag>
            )
          })
          :
          <Text bold={bold}>{tagsTitle}</Text>
        }
      </Tags>
    </Row>
  );
};