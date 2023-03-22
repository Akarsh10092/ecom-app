import {
  GitHub,
  Instagram,
  LinkedIn,
  MailOutline,
  Phone,
  Room,
} from "@mui/icons-material";
import BroadcastOnPersonalIcon from "@mui/icons-material/BroadcastOnPersonal";
import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";
import { mobile } from "../responsive";
const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Description = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  text-decoration: none;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;
const Footer = () => {
  const item = {
    giturl: "https://github.com/Akarsh10092",
    insturl: "https://www.instagram.com/agarwal.aakarsh_",
    linkurl: "https://www.linkedin.com/in/akarsh-agarwal-16964788/",
    self: "https://myapp-lilac-seven.vercel.app/",
  };
  return (
    <Container>
      <Left>
        <Logo>Aakarsh.</Logo>
        <Description>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Description>
        <SocialContainer>
          <a href={item.insturl} target="_blank" rel="noopener noreferrer">
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
          </a>
          <a href={item.giturl} target="_blank" rel="noopener noreferrer">
            <SocialIcon color="5B5B5B">
              <GitHub />
            </SocialIcon>
          </a>
          <a href={item.linkurl} target="_blank" rel="noopener noreferrer">
            <SocialIcon color="000075">
              <LinkedIn />
            </SocialIcon>
          </a>
          <a href={item.self} target="_blank" rel="noopener noreferrer">
            <SocialIcon color="444444">
              <BroadcastOnPersonalIcon />
            </SocialIcon>
          </a>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>
            <NavLink
              to="/"
              style={(isActive) => ({
                color: isActive ? "black" : "grey",
                textDecoration: "none",
              })}
            >
              Home
            </NavLink>
          </ListItem>

          <ListItem>
            <NavLink
              to="/cart"
              style={(isActive) => ({
                color: isActive ? "black" : "grey",
                textDecoration: "none",
              })}
            >
              Cart
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink
              to="/products/man"
              style={(isActive) => ({
                color: isActive ? "black" : "grey",
                textDecoration: "none",
              })}
            >
              Man Fashion
            </NavLink>
          </ListItem>

          <ListItem>
            <NavLink
              to="/products/woman"
              style={(isActive) => ({
                color: isActive ? "black" : "grey",
                textDecoration: "none",
              })}
            >
              Woman Fashion
            </NavLink>
          </ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Contact</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Indirapuram,Ghaziabad
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +919874525471
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          akarshagarwal9863@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
