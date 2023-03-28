import React, { useState, useEffect } from "react";
import minifaker, { jobTitle } from "minifaker";
import "minifaker/locales/en";
import SuggestionStory from "./SuggestionStory";

export default function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestions = minifaker.array(7, (i) => ({
      userName: minifaker.username({ locale: "en" }).toLowerCase(),
      jobTitle: minifaker.jobTitle().toLowerCase(),
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      id: i,
    }));
    setSuggestions(suggestions);
    //console.log(suggestions);
  }, []);
  return (
    <div className="mt-4 ml-8">
      <div className="flex justify-between text-sm">
        <h1 className="font-bold text-gray-400">Suggestion for you</h1>
        <button className="text-gray-600 font-semibold">See all</button>
      </div>
      <div className="flex-col space-x-2 bg-white p-6 mt-6 border-1 border-gray-300 overflow-x-scroll scrollbar-none ">
        {suggestions.map((suggestion) => (
          <SuggestionStory
            key={suggestion.id}
            userName={suggestion.userName}
            img={suggestion.img}
            jobTitle={suggestion.jobTitle}
          />
        ))}
      </div>
    </div>
  );
}
