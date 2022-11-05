import * as React from 'react';
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {Items} from "../../types";
import * as selectors from '../../store/features/selectors';
import styled from "styled-components";
import {Container} from "../Main/Main";
import {Loader} from "../Loader/Loader";
import {Header} from "../Header/Header";
import {Tags} from "../Tags/Tags";

const Body = styled.pre`
  max-width: 100%;
  margin-top: 20px;
  background: #ffffff;
  box-shadow: 1px 11px 31px -20px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 20px;
  white-space: pre-wrap;
  overflow: auto;

  .bodyText > p, .bodyText > code {
    white-space: pre-wrap;
  }
`
const BodyCode = styled.code`
  font-size: 18px;
  color: #000000;
  white-space: pre-wrap;
`
const RowLinks = styled.div`
  display: flex;
  flex-direction: row;
`
const LinkDec = styled(Link)`
  font-size: 20px;
  margin: 0;
  text-decoration: none;
  color: #282c34;

  &:hover {
    color: #0099ff;
  }
`
export const Question = () => {
  const data = useSelector(selectors.data);
  const {id} = useParams();
  const currentQuestion: Items = data.items.find((item: Items) => item.question_id === Number(id));

  let createDate = new Date(currentQuestion.creation_date * 1000);
  let modifiedDate = new Date(currentQuestion.last_edit_date * 1000);

  function createMarkup() {
    return {__html: currentQuestion.body.replace(/&nbsp;/gm, " ")};
  }

  return (
    <Container>
      {currentQuestion ?
        <>
          <RowLinks>
            <LinkDec to={'/'}>Main/</LinkDec>
            <LinkDec to={''}>Question-{currentQuestion.question_id}</LinkDec>
          </RowLinks>
          <Header
            title={currentQuestion.title}
            createDate={createDate.toLocaleString('en-US')}
            modifiedDate={modifiedDate.toLocaleString('en-US')}
            viewCount={currentQuestion.view_count}
            ownerName={currentQuestion.owner.display_name}
            ownerReputation={currentQuestion.owner.reputation}
          />
          <Tags tags={currentQuestion.tags}/>
          <Body>
            <BodyCode className="bodyText" dangerouslySetInnerHTML={createMarkup()}></BodyCode>
          </Body>
        </>
        :
        <Loader/>
      }
    </Container>
  );
};