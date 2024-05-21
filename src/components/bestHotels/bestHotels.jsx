import React from "react";
import { useHotelsGet } from '../../shared/hooks'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

import './bestHotels.css';

export const BestHotels = () => {
    const { getHotels, allHotels } = useHotelsGet();

    return (
        <div className="card">
            {allHotels.map((hotel, index) => (
                <Card key={index} className="w-96">
                    <CardHeader shadow={false} floated={false} className="h-96">
                        <img
                            src={hotel.imageUrl}
                            alt={hotel.nameHotel}
                            className="h-full w-full object-cover"
                        />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-2 flex items-center justify-between">
                            <Typography color="blue-gray" className="font-medium">
                                {hotel.nameHotel}
                            </Typography>
                            <Typography color="blue-gray" className="font-medium">
                                ${hotel.price}
                            </Typography>
                        </div>
                        <Typography
                            variant="small"
                            color="gray"
                            className="font-normal opacity-75"
                        >
                            {hotel.description}
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button
                            ripple={false}
                            fullWidth={true}
                            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                        >
                            Add to Cart
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
};