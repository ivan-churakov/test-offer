import * as React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {Items} from "../../types";
import {TableRow} from "../TableRow/TableRow";
import * as selectors from "../../store/features/selectors";

const TableBlock = styled.div`
  @media (max-width: 840px) {
    overflow-x: scroll;
  }
`
const TableCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const Table = () => {
  const data = useSelector(selectors.data);
  return (
    <TableBlock>
      <TableCol>
        <TableRow owner="Owner" title="Title" countAnswer="Answer count" tagsTitle="Tags" bold={true}/>
        {data.items.map((item: Items) => {
          return (
            <TableRow key={item.question_id} owner={item.owner.display_name} title={item.title} countAnswer={item.answer_count} tags={item.tags} bold={false} id={item.question_id}></TableRow>
          )
        })}
      </TableCol>
    </TableBlock>
  );
};