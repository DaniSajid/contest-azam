import { Button } from "@mui/material";

const BtnComp = ({ variant, onClick, name ,className,size}) => {
  return (
    <Button size={size} className={className} variant={variant} onClick={onClick}>
      {name}
    </Button>
  );
};

export default BtnComp;
