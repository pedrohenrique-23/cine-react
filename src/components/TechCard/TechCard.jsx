import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const TechCard = ({ tech, onEdit, onDelete }) => {
  return (
    <div className="flex justify-between items-center bg-gray-200 p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">{tech.title}</h3>
      <div className="flex gap-2">
        <button onClick={() => onEdit(tech)} className="text-blue-500 hover:text-blue-600">
          <FaEdit />
        </button>
        <button onClick={() => onDelete(tech.id)} className="text-red-500 hover:text-red-600">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TechCard;