import { Rating } from "@mui/material";

function StarContainer({ rating }) {
  return (
    <div className="flex items-center gap-3 ">
      <Rating
        readOnly
        size="30"
        precision={0.5}
        value={rating / 2}
        name="product-feedback"
      />

      <span className="text-primary-Black text-opacity-60 text-lg">
        {rating ? rating : "--"}/
        <span className="text-primary-Black text-opacity-100">10</span>
      </span>
    </div>
  );
}

export default StarContainer;
