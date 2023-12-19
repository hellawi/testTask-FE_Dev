import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import './Card.css'

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard({
  status,
  statusText,
  name,
  company,
  number,
  numberHref,
  email,
  country,
}) {
  return (
    <Card sx={{ minWidth: 275 }} className='card'>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <span className={status}>{statusText}</span>
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {company}
        </Typography>
        <Typography variant="body2">
          Phone Number: {number}
          <br />
          Email: {email}
          <br />
          Country: {country}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={`tel:${numberHref}`}>
          Call
        </Button>
        <Button size="small" href={`sms:${numberHref}`}>
          SMS
        </Button>
        <Button size="small" href={`mailto:${email}`}>
          Email
        </Button>
      </CardActions>
    </Card>
  );
}
