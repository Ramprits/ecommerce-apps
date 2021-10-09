import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  media: {
    height: '256px',
  },
  footerNav: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  footerLink: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(2),
  }
}));

export default function HttpCode(props) {
  const classes = useStyles();

  const content = {
    'image': 'https://images.unsplash.com/photo-1532003885409-ed84d334f6cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'header': 'Page not found',
    'description': 'The requested page couldn\'t be located. Checkout for any URL misspelling.',
    'link1': 'Homepage',
    'link2': 'Features',
    'link3': 'Enterprise',
    'link4': 'Support',
    ...props.content
  };

  return (
    <section>
      <Container maxWidth="sm">
        <Box py={8} textAlign="center">
          <Box mb={6}>
            <Card>
              <CardActionArea href="#">
                <CardMedia className={classes.media} image={content['image']} />
              </CardActionArea>
            </Card>
          </Box>
          <Typography variant="h4" component="h2" gutterBottom={true}>{content['header']}</Typography>
          <Typography variant="subtitle1" color="textSecondary">{content['description']}</Typography>
          <Box mt={4} component="nav" className={classes.footerNav}>
            <Link href="#" variant="body1" color="primary" className={classes.footerLink}>{content['link1']}</Link>
            <Link href="#" variant="body1" color="primary" className={classes.footerLink}>{content['link2']}</Link>
            <Link href="#" variant="body1" color="primary" className={classes.footerLink}>{content['link3']}</Link>
            <Link href="#" variant="body1" color="primary" className={classes.footerLink}>{content['link4']}</Link>
          </Box>
        </Box>
      </Container>
    </section>
  );
}