'use client';
import moment from 'moment';
import Heading from '../components/products/Heading';
import { Avatar, Rating } from '@mui/material';

interface Review {
  reviewerEmail: string;
  reviewerName: string;
  date: string;
  rating: number;
  comment: string
}

interface ListRatingProps {
  product: {
    reviews: Review[];
  };
}

const ListRatings: React.FC<ListRatingProps> = ({ product }) => {
  return (
    <div>
      <Heading title="Product Review" />
      <div className="text-sm mt-2">
        {product.reviews &&
          product.reviews.map((review) => (
            <div key={review.reviewerEmail} className="max-w-[300px]">
              <div className="flex gap-2 items-center">
                {/* firstly add the link in the reviews and then pass it as a prop to the avatar */}
                <Avatar/>
                <div className="font-semibold">{review.reviewerName}</div>
                <div className="font-light">{moment(review.date).fromNow()}</div>
              </div>
              <div className="mt-2">
                <Rating value={review.rating} readOnly />
                <div className='ml-2'>{review.comment}</div>
                <hr className='mt-4 mb-4'/>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ListRatings;
