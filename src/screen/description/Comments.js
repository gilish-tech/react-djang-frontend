import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { Addrating } from '../searchpage/Addrating';
import parse from 'html-react-parser'
import Gilberto from "../Gilberto.JPG"
const garbage_names = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Amelia",
  "Amy",
  "Andrea",
  "Angela",
  "Anna",
  "Anne",
  "Audrey",
  "Ava",
  "Bella",
  "Bernadette",
  "Carol",
  "Caroline",
  "Carolyn",
  "Chloe",
  "Claire",
  "Deirdre",
  "Diana",
  "Diane",
  "Donna",
  "Dorothy",
  "Elizabeth",
  "Ella",
  "Emily",
  "Emma",
  "Faith",
  "Felicity",
  "Fiona",
  "Gabrielle",
  "Grace",
  "Hannah",
  "Heather",
  "Irene",
  "Jan",
  "Jane",
  "Jasmine",
  "Jennifer",
  "Jessica",
  "Joan",
  "Joanne",
  "Julia",
  "Karen",
  "Katherine",
  "Kimberly",
  "Kylie",
  "Lauren",
  "Leah",
  "Lillian",
  "Lily",
  "Lisa",
  "Madeleine",
  "Maria",
  "Mary",
  "Megan",
  "Melanie",
  "Michelle",
  "Molly",
  "Natalie",
  "Nicola",
  "Olivia",
  "Penelope",
  "Pippa",
  "Rachel",
  "Rebecca",
  "Rose",
  "Ruth",
  "Sally",
  "Samantha",
  "Sarah",
  "Sonia",
  "Sophie",
  "Stephanie",
  "Sue",
  "Theresa",
  "Tracey",
  "Una",
  "Vanessa",
  "Victoria",
  "Virginia",
  "Wanda",
  "Wendy",
  "Yvonne",
  "Zoe",
  "Abraham",
  "Allan",
  "Alsop",
  "Anderson",
  "Arnold",
  "Avery",
  "Bailey",
  "Baker",
  "Ball",
  "Bell",
  "Berry",
  "Black",
  "Blake",
  "Bond",
  "Bower",
  "Brown",
  "Buckland",
  "Burgess",
  "Butler",
  "Cameron",
  "Campbell",
  "Carr",
  "Chapman",
  "Churchill",
  "Clark",
  "Clarkson",
  "Coleman",
  "Cornish",
  "Davidson",
  "Davies",
  "Dickens",
  "Dowd",
  "Duncan",
  "Dyer",
  "Edmunds",
  "Ellison",
  "Ferguson",
  "Fisher",
  "Forsyth",
  "Fraser",
  "Gibson",
  "Gill",
  "Glover",
  "Graham",
  "Grant",
  "Gray",
  "Greene",
  "Hamilton",
  "Hardacre",
  "Harris",
  "Hart",
  "Hemmings",
  "Henderson",
  "Hill",
  "Hodges",
  "Howard",
  "Hudson",
  "Hughes",
  "Hunter",
  "Ince",
  "Jackson",
  "James",
  "Johnston",
  "Jones",
  "Kelly",
  "Kerr",
  "King",
  "Knox",
  "Lambert",
  "Langdon",
  "Lawrence",
  "Lee",
  "Lewis",
  "Lyman",
  "MacDonald",
  "Mackay",
  "Mackenzie",
  "MacLeod",
  "Manning",
  "Marshall",
  "Martin",
  "Mathis",
  "May",
  "McDonald",
  "McLean",
  "McGrath",
  "Metcalfe",
  "Miller",
  "Mills",
  "Mitchell",
  "Morgan",
  "Morrison",
  "Murray",
  "Nash",
  "Newman",
  "Nolan",
  "North",
  "Ogden",
  "Oliver",
  "Paige",
  "Parr",
  "Parsons",
  "Paterson",
  "Payne",
  "Peake",
  "Peters",
  "Piper",
  "Poole",
  "Powell",
  "Pullman",
  "Quinn",
  "Rampling",
  "Randall",
  "Rees",
  "Reid",
  "Roberts",
  "Robertson",
  "Ross",
  "Russell",
  "Rutherford",
  "Sanderson",
  "Scott",
  "Sharp",
  "Short",
  "Simpson",
  "Skinner",
  "Slater",
  "Smith",
  "Springer",
  "Stewart",
  "Sutherland",
  "Taylor",
  "Terry",
  "Thomson",
  "Tucker",
  "Turner",
  "Underwood",
  "Vance",
  "Vaughan",
  "Walker",
  "Wallace",
  "Walsh",
  "Watson",
  "Welch",
  "White",
  "Wilkins",
  "Wilson",
  "Wright",
  "Young"
  ]
export function Comments({all_reviews}) {
  return (
    <List sx={{ width: '100%', display:"flex",  bgcolor: 'background.paper',alignItems:"center",justifyContent:"center"}}>

       <Box sx={{ width:"100%" , paddingTop:"20px", textAlign:"center",width:"100%" ,fontSize:"30px",background:"-webkit-linear-gradient(45deg, #FFF, #F9F9F9);",boxShadow:"0 1px 2px rgba(34, 25, 25, 0.4)", border:"2px solid #FAFAFA" }} >
       <ListItem alignItems="flex-start"  >
        <ListItemAvatar>
          <Avatar alt="Gilish-Tech" src={Gilberto} />
        </ListItemAvatar>
        <ListItemText
          primary={<Addrating rating="5"/>}          secondary={
            <React.Fragment>
              <Typography
               
                sx={{ display: 'inline',fontWeight:"100px" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Gilberto-Diamond(Admin/Senior Developer) 
              </Typography>
              -- Note.. these are scraped reviews. Nothing was purchased on this website.    Thanks
            </React.Fragment>
          }
        />
      </ListItem>

        { all_reviews ? all_reviews.length !== 0 ? all_reviews.map((review)=>{
          return(
            <>
            <ListItem alignItems="flex-start"  >
        <ListItemAvatar>
          <Avatar alt={garbage_names[(review.review_words.length % garbage_names.length) - 1 ]}  />
        </ListItemAvatar>
        <ListItemText
          primary={<Addrating rating={review.review_rating}/>}          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {garbage_names[(review.review_words.length % garbage_names.length) - 1 ]}
              </Typography>
              -- {parse(review.review_words)}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      </>

          )
        }) :  <Typography  variant="h4" component="h2" sx={{textAlign:"center", color:"#f0c14b"}}>
        No review 
    </Typography> :   <Typography  variant="h4" component="h2" sx={{textAlign:"center", color:"#f0c14b"}}>
        No review 
    </Typography> }
       


      


     
        
        </Box> 
     
    </List>
  );
}
