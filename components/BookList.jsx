import { DescriptionModal } from "./DescriptionModal"
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useState } from "react";

export const BookList = ({ book }) => {
  // モーダル
  const [ show, setShow ] = useState(false);
  const bookImage = book.Item.mediumImageUrl;

  const openModal = () => {
    setShow(true)
  }

  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <div data-aos="fade-up">
          <Card className="card">
              <Divider />
            <CardContent>
              <div className="bookZone" id="cardContents">
                <h2>{ book.Item.title }</h2>
                  <img
                    width="200"
                    alt={`TheBookTitle: ${ book.Item.title }`}
                    src={bookImage}
                  />
                <div className="modalZone">
                  <Button onClick={openModal}>詳細</Button>
                  <DescriptionModal show={show} setShow={setShow} content={book.Item.itemCaption} />
                </div>
                <p>{ book.Item.salesDate }</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Grid>
    </Grid>
  )
}
