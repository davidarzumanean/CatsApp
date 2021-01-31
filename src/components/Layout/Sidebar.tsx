import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux";
import { IRootStore } from "../../services/Store";
import { GetCategories } from "../../services/actions/CategoryActions";
import { GetCats } from "../../services/actions/CatsActions";

import HamburgerBtn from "../Utils/HamburgerBtn";
import ErrorMessage from "../Utils/ErrorMessage";

function Sidebar() {
  const dispatch = useDispatch();
  const categoryData = useSelector((state: IRootStore) => state.categories);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let { categoryId } = useParams<{categoryId: string}>();

  useEffect(() => {
    dispatch(GetCategories());
  }, []);

  useEffect(() => {
    dispatch(GetCats(undefined, undefined, categoryId));
  }, [categoryId]);

  const handleHamburgerClick = () => {
    setIsMenuOpen(prevState => !prevState);
  }

  interface ItemProps {
    readonly isActive: boolean;
  }
  const Sidebar = styled.aside`
    position: sticky;
    top: 0;
    background-color: #393351;
    @media screen and (max-width: 768px) {
      height: 55px;
      text-align: center;
    }
  `
  const SidebarHead = styled.div`
    padding: 15px 25px;
    background-color: #393351;
    position: relative;
    z-index: 10;
    button {
      display: none;
      position: absolute;
      left: 25px;
    }
    @media screen and (max-width: 768px) {
      padding: 15px 55px;
      button {
        display: block;
      }
    }
  `
  const Logo = styled.div`
    font-family: 'Nunito', sans-serif;
    font-size: 25px;
    line-height: 25px;
    font-weight: 800;
    a {
      color: #ffffff;
      text-decoration: none;
    }
  `
  const ItemsWrapper = styled.div`
    @media screen and (max-width: 768px) {
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,.6);
      position: fixed;
      left: -100%;
      top: 0;
      transition: left .3s ease 0s;
      ${isMenuOpen && `
          left: 0;
       `
      }
    }
  `
  const ItemsContainer = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
    line-height: 20px;
    text-align: left;
    text-transform: capitalize;
    min-width: 200px;
    background-color: #393351;
    @media screen and (max-width: 768px) {
      height: 100%;
      padding-top: 55px;
      max-width: 70%;
    }
  `
  const Item = styled.li<ItemProps>`
    transition: background-color .3s ease 0s;
    background-color: ${props => props.isActive ? '#524A7B' : 'transparent'};
    &:hover {
      background-color: #524A7B;
    }
    a {
      display: block;
      padding: 5px 25px;
      color: #ffffff;
      text-decoration: none;
    }
  `

  return (
    <Sidebar>
      <SidebarHead>
        <HamburgerBtn isActive={isMenuOpen} handleClick={handleHamburgerClick} />
        <Logo>
          <Link to="/">CatsApp</Link>
        </Logo>
      </SidebarHead>
      {
        categoryData?.error && <ErrorMessage message={categoryData.error} />
      }
      <ItemsWrapper onClick={handleHamburgerClick}>
        <ItemsContainer>
          {categoryData?.categories?.map(category => (
            <Item
              key={category.id}
              isActive={categoryId === category.id.toString()}
            >
              <Link to={`/${category.id}`}>{category.name}</Link>
            </Item>
          ))}
        </ItemsContainer>
      </ItemsWrapper>
    </Sidebar>
  )
}

export default Sidebar;
