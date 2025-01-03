"use client";
import { useState } from "react";

const ExpandableNote = () => {
  const [isNoteExpanded, setIsNoteExpanded] = useState(false);

  const toggleNote = () => setIsNoteExpanded(!isNoteExpanded);

  return (
    <div 
      className="mt-4 p-2 border border-gray-300 rounded-md text-gray-600 text-sm cursor-pointer hover:bg-gray-100"
      onClick={toggleNote}
    >
      <div className="flex justify-between items-center">
        <span>Note</span>
        <span>{isNoteExpanded ? "-" : "+"}</span>
      </div>
      {isNoteExpanded && (
          <div>
            Crispy Dough Bakery will be closed from November 12th to December 15th due to medical reasons. 
            Please be patient during the recovery time, and I look forward to serving you once we are reopened.
          </div>
        // <div className="mt-2">
        //   The physical business address listed on Google is for pickup only. For other inquiries, please visit the <a className="text-blue-500 underline" href="https://thecrispydough.com/contact">contact</a> page.
        // </div>
      )}
    </div>
  );
};

export default ExpandableNote;
