import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { CardList } from 'pearson-mui-theme';

/**
 * Renders/demos Cards.
 *
 * @author Hari Gangadharan
 */
const Cards = () => (
  <div>
    <CardList>
      <Typography variant="h3">Recently Visited</Typography>
    </CardList>
    <CardList>
      <Card>
        <CardContent>
          1.1-1.2 The History of Psychology
        </CardContent>
        <CardActions>
          <div>JUNE 14, 2019 03:32 PM</div>
        </CardActions>
      </Card>
      <Card>
        <CardContent>
          1.5-1.9 The Scientific Research
        </CardContent>
        <CardActions>
          <div>JUNE 14, 2019 03:37 PM</div>
        </CardActions>
      </Card>
      <Card>
        <CardContent>
          1.10-1.11 Ethics of Psychology
        </CardContent>
        <CardActions>
          <div>JUNE 14, 2019 03:39 PM</div>
        </CardActions>
      </Card>
    </CardList>
  </div>
);

export default Cards;
