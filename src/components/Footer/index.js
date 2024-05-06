'use client'
// import React from 'react'
// import style from "./footer.module.css"
// import Link from 'next/link'
// export const Footer = () => {
//   return (
//     <div className={style.container}>
//         <hr className={style.line}></hr>
//         <div className={style.footext}>made by Harsh Singh</div>
//         <li className={style.links}>
//             <ul className={style.items}><Link href="https://github.com/lives-in-virgosupercluster" className={style.linkitems}>Github</Link></ul>
//             <ul className={style.items}><Link href="https://www.linkedin.com/in/harshsingh0310/" className={style.linkitems}>Linkedin</Link></ul>
//             <ul className={style.items}><Link href="https://leetcode.com/Solar_Nebula/" className={style.linkitems}>Leetcode</Link></ul>
//             <ul className={style.items}><Link href="https://codeforces.com/profile/idonthatephy" className={style.linkitems}>Codeforces</Link></ul>
//         </li>

//     </div>
//   )
// }
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { ReactNode } from 'react';

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithSocial() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text>© 2024 made by Harsh. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Leetcode'} href={'https://leetcode.com/u/Solar_Nebula/'}>
            {/* <FaTwitter /> */}
            <SiLeetcode></SiLeetcode>
          </SocialButton>
          <SocialButton label={'Codeforces'} href={'https://codeforces.com/profile/idonthatephy'}>
            {/* <FaYoutube /> */}
            <SiCodeforces></SiCodeforces>
          </SocialButton>
          <SocialButton label={'Github'} href={'https://github.com/lives-in-virgosupercluster'}>
            <FaGithub />
          </SocialButton>
          <SocialButton label={'Linkedin'} href={'https://www.linkedin.com/in/harshsingh0310/'}>
            <FaLinkedin />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
