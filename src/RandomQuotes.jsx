import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import RefreshIcon from '@mui/icons-material/Refresh';

const RandomQuotes = () => {
  const [quote, setQuote] = useState({});

  const getQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((res) => setQuote(res));
  };

  useEffect(() => {
    getQuote();
  }, []);
  
  return (
    <>
      <Card sx={{ maxWidth: 345, margin:'auto', marginTop:'10rem' }}>
        <CardContent>
          <Typography variant="body1" color="text.secondary">
            "{quote.content}"
          </Typography>
          <Typography gutterBottom variant="overline" component="div" sx={{fontSize:'1rem'}}>
             <a target='_blank' href={`https://wikipedia.org/wiki/${quote.author}`}>{quote.author}</a>
          </Typography>
        </CardContent>

        <CardActions sx={
          {    justifyContent: 'space-between'
          }
        }>
          <a
          target='_blank'
            href={`https://twitter.com/intent/tweet?text="${quote.content}" ${quote.author}`}
            style={{ color: "grey" }}
          >
            <TwitterIcon
              sx={{
                "&:hover": { color: "primary.main" },
                "&:active": { color: "primary.main" },
                "&:focus": { color: "primary.main" },
              }}
            />
          </a>
          <Button onClick={()=>getQuote()} variant="contained" startIcon={<RefreshIcon />}>
        New quote
      </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default RandomQuotes;
