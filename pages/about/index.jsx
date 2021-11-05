import * as React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "../../src/components/link/Link";

export default function About() {
  return (
    <Container maxWidth="sm">
      <Grid container justifyContent="center">
        <Grid item>
          <Button variant="contained" component={Link} noLinkStyle href="/">
            🏠 Home
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}


// import * as React from "react";
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import Header from "../../src/components/header/Header";
// import Trending from "../../src/components/trending/Trending";
// import Auctions from "../../src/components/auctions/Auctions"
// import Footer from "../../src/components/footer/Footer";
// import How from "../../src/components/how/How";
// import Featured from "../../src/components/featured/Featured";
// import TopCollectors from "../../src/components/collectors/TopCollectors";

// export default function About() {

//   const cards = [
//     {
//         name : 'Ivy',
//         likes : 1100,
//         mediaUrl : 'images/nft.jpg',
//         user : {
//           avatarUrl : 'images/avatar.png',
//           verified : true,
//         },
//         price : '~1',
//         currency : 'ETH',
//     },
//     {
//         name : 'Judie',
//         likes : 1100,
//         mediaUrl : 'images/nft.jpg',
//         user : {
//             avatarUrl : 'images/avatar.png',
//             verified : true,
//         },
//         price : '~2.3',
//         currency : 'ETH',
//     },
//     {
//         name : 'Juniper',
//         likes : 1100,
//         mediaUrl : 'images/nft.jpg',
//         user : {
//             avatarUrl : 'images/avatar.png',
//             verified : true,
//         },
//         price : '5',
//         currency : 'ETH',
//     },
//     {
//         name : 'Maple',
//         likes : 1100,
//         mediaUrl : 'images/nft.jpg',
//         user : {
//             avatarUrl : 'images/avatar.png',
//             verified : true,
//         },
//         price : '10',
//         currency : 'ETH',
//     }
// ]

// const liveCards = [
//   {
//       name : 'Ivy',
//       likes : 1100,
//       mediaUrl : 'images/nft.jpg',
//       user : {
//         avatarUrl : 'images/avatar.png',
//         verified : true,
//       },
//       price : '~1',
//       currency : 'ETH',
//       timeLeft : 50,
//   },
//   {
//       name : 'Judie',
//       likes : 1100,
//       mediaUrl : 'images/nft.jpg',
//       user : {
//           avatarUrl : 'images/avatar.png',
//           verified : true,
//       },
//       price : '~2.3',
//       currency : 'ETH',
//       timeLeft : 30,
//   },
//   {
//       name : 'Juniper',
//       likes : 1100,
//       mediaUrl : 'images/nft.jpg',
//       user : {
//           avatarUrl : 'images/avatar.png',
//           verified : true,
//       },
//       price : '5',
//       currency : 'ETH',
//       timeLeft : 60,
//   },
//   {
//       name : 'Maple',
//       likes : 1100,
//       mediaUrl : 'images/nft.jpg',
//       user : {
//           avatarUrl : 'images/avatar.png',
//           verified : true,
//       },
//       price : '10',
//       currency : 'ETH',
//       timeLeft : 20,
//   }
// ]

// const steps = [
//   {
//     number : 1,
//     title : 'DIGITAL CURRENCY',
//     description: 'You can get ETH, the digital currency' + 
//     ' that fuels transactions on the Ethereum ' + 
//     'blockchain, from a digital currency exchange.'
//   },
//   {
//     number : 2,
//     title : 'CRYPTO WALLET',
//     description: 'A crypto wallet, such as MetaMask, ' + 
//     'stores your ETH and processes transactions ' + 
//     'on the Ethereum blockchain.'
//   },
//   {
//     number : 3,
//     title : 'BUM.',
//     description: 'Let\'s connect yout wallet to BUM, edit ' + 
//     'your profile, and begin interacting in ' + 
//     'tha space.'
//   },
// ]

// const how = {
//   title : 'HOW IT WORKS',
//   description : 'Discover, collect, and sell extraordinary NFT\'s on the world\'s first & ' +
//   'largest NFT marketplace. There are three things you\'ll need in place ' +
//   'to open your account and start bying or selling NFT\'s on BUM.',
//   items : steps,
//   link: 'href',
// }



const collectors = [
  {
    name: 'terika77',
    nftCounts: 134,
    avatar: 'images/avatar.png',
    verified: true,
    id: 1,
  },
  {
    name: 'brendan_1',
    nftCounts: 98,
    avatar: 'images/avatar.png',
    verified: false,
    id: 2,
  },
  {
    name: 'damiann',
    nftCounts: 97,
    avatar: 'images/avatar.png',
    verified: false,
    id: 3,
  },
  {
    name: 'terika77',
    nftCounts: 134,
    avatar: 'images/avatar.png',
    verified: true,
    id: 4,
  },
  {
    name: 'brendan_1',
    nftCounts: 98,
    avatar: 'images/avatar.png',
    verified: false,
    id: 5,
  },
  {
    name: 'damiann',
    nftCounts: 97,
    avatar: 'images/avatar.png',
    verified: false,
    id: 6,
  },
  {
    name: 'terika77',
    nftCounts: 134,
    avatar: 'images/avatar.png',
    verified: true,
    id: 7,
  },
  {
    name: 'brendan_1',
    nftCounts: 98,
    avatar: 'images/avatar.png',
    verified: false,
    id: 8,
  },
  {
    name: 'damiann',
    nftCounts: 97,
    avatar: 'images/avatar.png',
    verified: false,
    id: 9,
  },

]

//   return (
//     <Container maxWidth="sm">
//       <Grid container justifyContent="center">
//         <Grid item>
//           <Header />
//           <Trending cards={cards} />
//           <Auctions cards={liveCards} />
//           <How title={how.title} description={how.description} items={how.items} link={how.items} />
//           <Featured items={itemData} />
//           <TopCollectors collectors={collectors} />
//           <Footer />
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }
 