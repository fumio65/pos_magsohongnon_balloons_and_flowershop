import React, { useEffect, useRef, useState } from "react";
import profiles from "../data/profiles"; // Ensure the path is correct

const DRAG_SPEED = 1.5;
const NUM_COPIES = 3;

function duplicateProfiles(data, copies) {
  let arr = [];
  for (let i = 0; i < copies; i++) arr = arr.concat(data);
  return arr;
}

export default function Carousel() {
  const parentRef = useRef(null);
  const [allProfiles, setAllProfiles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Helper to center a card using bounding rects (accounts for scaling)
  const centerCard = (idx) => {
    const cards = parentRef.current.querySelectorAll(".profile-card");
    const card = cards[idx];
    if (card) {
      const cardRect = card.getBoundingClientRect();
      const parentRect = parentRef.current.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const parentCenter = parentRect.left + parentRect.width / 2;
      const scrollOffset = cardCenter - parentCenter;
      parentRef.current.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    setAllProfiles(duplicateProfiles(profiles, NUM_COPIES));
  }, [profiles]);

  // Center the selected card on mount and when currentIndex changes
  useEffect(() => {
    if (!parentRef.current || allProfiles.length === 0) return;
    centerCard(currentIndex);
    // eslint-disable-next-line
  }, [currentIndex, allProfiles.length]);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX;
    scrollStart.current = parentRef.current.scrollLeft;
    parentRef.current.style.cursor = "grabbing";
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    parentRef.current.scrollLeft = scrollStart.current - (e.pageX - startX.current) * DRAG_SPEED;
  };

  const onMouseUp = () => {
    isDragging.current = false;
    parentRef.current.style.cursor = "grab";
  };

  const handleCardClick = (idx) => {
    centerCard(idx);
    setCurrentIndex(idx);
  };

  return (
    <div className="w-full max-w-3xl mx-auto py-8">
      <div
        ref={parentRef}
        className="bg-white rounded-lg shadow-md overflow-x-auto scrollbar-hide cursor-grab select-none"
        style={{ WebkitOverflowScrolling: "touch" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        <div className="flex gap-5 px-5 py-6">
          {allProfiles.map((p, idx) => (
            <div
              key={idx}
              className={`profile-card flex-shrink-0 w-52 border border-gray-200 rounded-md p-4 text-center bg-white transform transition-transform duration-300 ${
                idx === currentIndex ? "scale-105 shadow-lg" : ""
              }`}
              onClick={() => handleCardClick(idx)}
            >
              <img
                src={p.imageUrl}
                alt={p.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <div className="font-bold">{p.name}</div>
              <div className="text-sm text-gray-500">{p.role}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}