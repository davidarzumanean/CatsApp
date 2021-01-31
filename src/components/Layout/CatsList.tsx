import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { IRootStore } from "../../services/Store";
import { GetCats, LoadMoreCats } from "../../services/actions/CatsActions";

import Btn from "../Utils/Btn";
import Loader from "../Utils/Loader/Loader";
import ErrorMessage from "../Utils/ErrorMessage";
import CatImage from "../Utils/CatImage";

function CatsList() {
  const dispatch = useDispatch();
  const catsData = useSelector((state: IRootStore) => state.cats);
  const initialPage = 2;
  const [page, setPage] = useState(initialPage);
  let { categoryId } = useParams<{categoryId: string}>();

  useEffect(() => {
    dispatch(GetCats(undefined, undefined, categoryId));
  }, []);

  useEffect(() => {
    setPage(initialPage);
  }, [categoryId]);

  const loadMore = async () => {
    await dispatch(LoadMoreCats(page, categoryId));
    setPage(prevState => prevState + 1);
  }

  const CatsList = styled.div`
    flex-grow: 1;
    min-height: 100vh;
    padding: 5px 5px 25px;
    background-color: #2F2B44;
  `
  const ListWrapper = styled.div`
    column-gap: 0;
    column-width: 275px;
  `

  return (
    <CatsList>
      {
        catsData.error && <ErrorMessage message={catsData.error} />
      }
      {
        catsData?.loading
          ?
          <Loader />
          :
          <ListWrapper>
            {
              catsData?.cats?.map((cat, i) => (
                <CatImage key={cat.id + i} url={cat.url} />
              ))
            }
          </ListWrapper>
      }

      <Btn text={'Load more'} handleClick={loadMore} />
    </CatsList>
  )
}

export default CatsList;
