import * as React from 'react';
import styled from "styled-components";

const HeaderBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 30px 0;
`
const RowStatistics = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 10px;
  }
`
const StatisticsText = styled.p`
  font-size: 18px;
  margin: 0;
`
const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin: 0;
  @media (max-width: 640px) {
    font-size: 28px;
  }
`
const Owner = styled.div`
  width: fit-content;
  padding: 20px 30px;
  border-radius: 5px;
  box-shadow: 1px 11px 31px -20px rgba(0, 0, 0, 0.5);
  @media (max-width: 640px) {
    padding: 15px 20px;
  }
`
const OwnerText = styled.h2`
  font-size: 24px;
  font-weight: 500;
  margin: 0;
  @media (max-width: 640px) {
    font-size: 20px;
  }
`
const Reputation = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  color: #696969;
  @media (max-width: 640px) {
    font-size: 18px;
  }
`

type Props = {
  title: string;
  createDate: string;
  modifiedDate: string;
  viewCount: number;
  ownerName: string;
  ownerReputation: number;
};
export const Header = ({title, createDate, modifiedDate, ownerReputation, ownerName, viewCount}: Props) => {
  return (
    <HeaderBlock>
      <Title>{title}</Title>
      <RowStatistics>
        <StatisticsText>Asked: {createDate}</StatisticsText>
        <StatisticsText>Modified: {modifiedDate}</StatisticsText>
        <StatisticsText>Viewed: {viewCount}</StatisticsText>
      </RowStatistics>
      <Owner>
        <OwnerText>Owner: {ownerName}</OwnerText>
        <Reputation>Reputation: {ownerReputation}</Reputation>
      </Owner>
    </HeaderBlock>
  );
};