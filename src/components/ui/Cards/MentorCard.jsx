import React from "react";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "./baseCard/card";

const MyCard = ({ imgUrl, title, description }) => {
  return (
    <Card className="max-w-sm">
      <CardHeader className="p-0">
        <img src={imgUrl} alt={title} className="w-full h-auto rounded-t-lg" />
      </CardHeader>

      <CardContent className="mt-3 pb-0">
        <CardTitle className="text-lg font-bold text-gray-700">{title}</CardTitle>
      </CardContent>

      <CardFooter>
        <h2 className="text-primary mt-0">{description}</h2>
      </CardFooter>

    </Card>
  );
};

export default MyCard;
