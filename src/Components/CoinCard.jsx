
import React, { useEffect,useState } from 'react'

import { Container, Heading, HStack, VStack,Image } from '@chakra-ui/react';
import { Link } from "react-router-dom";
const CoinCard=({id,name,img,symbol,price,currencySymbol="₹"})=>(
    <Link to={`/coin/${id}`}>
    <VStack
     w={"48"} 
     shadow={"lg"} 
     p={"8"} 
     borderRadius={"lg"} 
     transition={"all 0.3s"}
     m={"4"}
     css={{
      "&:hover":{
        transform:"scale(1.1)"
      }
     }}
     >
      <Image 
      src={img}
      w={"10"} 
      h={"10"} 
      objectFit={"contain"} 
      alt={"Exchange"}
      
      />
    <Heading size={"md"} noOfLines={1}>
     {symbol} 
    </Heading>
     <text  noOfLines={1}>
      {name}
      </text> 

      <text  noOfLines={1}>
      {price? `${currencySymbol}${price}` :"NA"}
      </text> 
    </VStack>
    </Link>
  )

export default CoinCard