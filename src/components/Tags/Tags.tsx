import * as React from 'react';
import styled from "styled-components";

const TagsBlock =styled.div`
  display: flex;
  flex-direction: column;
`
const TagsText = styled.div`
  padding: 10px 0;
  font-size: 24px;
`
const TagsRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
`
const Tag = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 3px 8px;
  border-radius: 10px;
  background: aliceblue;
`

type Props = {
  tags: string[];
};
export const Tags = ({tags}: Props) => {
  return (
    <TagsBlock>
      <TagsText>Tags</TagsText>
      <TagsRow>
        {tags.map((tag) => {
          return (
            <Tag key={tag}>
              {tag}
            </Tag>
          )
        })}
      </TagsRow>
    </TagsBlock>
  );
};