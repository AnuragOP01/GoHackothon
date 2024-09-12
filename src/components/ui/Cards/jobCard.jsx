import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./baseCard/card";

const JobCard = ({ jobTitle, location, description }) => {
  return (
    <Card className="flex flex-col p-4 max-w-md border-slate-900 border-opacity-70">
      <CardHeader>
        <CardTitle className="font-bold">{jobTitle}</CardTitle>
        <CardDescription className="text-base text-gray-500">
          Location: {location}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-base text-gray-500">{description}</p>
      </CardContent>
      <CardFooter className="pt-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
          Apply Now
        </button>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
