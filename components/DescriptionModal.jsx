import { Divider } from "@mui/material";
import Button from '@mui/material/Button';

export const DescriptionModal = ({ show, setShow, content}) => {
  const closeModal = () => {
    setShow(false)
  };

  if(show) {
    return(
      <div id="overlay" onClick={closeModal}>
        <div id="content" onClick={(e)=> e.stopPropagation()}>
          <p>{content}</p>
          <Button onClick={()=>closeModal()}>CLOSE</Button>
        </div>
        <Divider />
      </div>
    )
  } else {
    return null;
  }
}
