import React, { useRef, useState, useEffect } from 'react';

/**
 * SwipeCarousel — Mobile-only horizontal carousel.
 * Always moves exactly 1 card per swipe regardless of swipe speed/force.
 * On md+ screens renders nothing (parent section uses the grid instead).
 */
export default function SwipeCarousel({ items, renderCard }) {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Touch tracking refs (don't need re-renders)
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const isSwiping = useRef(false);

  /* ── Programmatic scroll to an exact card index ── */
  const goTo = (index) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(index, items.length - 1));
    track.scrollTo({ left: clamped * track.clientWidth, behavior: 'smooth' });
    setActiveIndex(clamped);
  };

  /* ── Touch handlers: capture direction, move exactly 1 card ── */
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isSwiping.current = false;
  };

  const handleTouchMove = (e) => {
    // Prevent horizontal scroll default while deciding direction
    const dx = Math.abs(e.touches[0].clientX - touchStartX.current);
    const dy = Math.abs(e.touches[0].clientY - touchStartY.current);
    if (dx > dy && dx > 5) {
      // Horizontal swipe — lock the track in place so CSS scroll snap
      // can't race ahead of us
      e.preventDefault();
      isSwiping.current = true;
    }
  };

  const handleTouchEnd = (e) => {
    if (!isSwiping.current) return;

    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const THRESHOLD = 40; // minimum px to register as a swipe

    if (dx < -THRESHOLD) {
      // Swiped left → go forward 1
      goTo(activeIndex + 1);
    } else if (dx > THRESHOLD) {
      // Swiped right → go back 1
      goTo(activeIndex - 1);
    } else {
      // Not far enough — snap back to current card
      goTo(activeIndex);
    }

    isSwiping.current = false;
  };

  /* ── Keep activeIndex in sync when user uses dot buttons ── */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    // Just in case scroll ends up off by a pixel from programmatic scroll
    const onScrollEnd = () => {
      const idx = Math.round(track.scrollLeft / track.clientWidth);
      setActiveIndex(idx);
    };
    track.addEventListener('scrollend', onScrollEnd, { passive: true });
    return () => track.removeEventListener('scrollend', onScrollEnd);
  }, []);

  return (
    <div className="md:hidden w-full flex flex-col items-center gap-3">
      {/* Swipeable Card Track */}
      <div
        ref={trackRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="w-full flex no-scrollbar"
        style={{
          overflowX: 'hidden',   // hide scrollbar & prevent CSS-native swiping
          touchAction: 'pan-y',  // allow vertical scroll, block horizontal default
        }}
      >
        {items.map((item, idx) => (
          <div
            key={item.id ?? idx}
            style={{ minWidth: '100%' }}
            className="px-1"
          >
            {renderCard(item, idx)}
          </div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="flex items-center gap-2 pt-1">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`rounded-full border-2 border-[#111844] transition-all duration-300 ${
              activeIndex === idx
                ? 'w-5 h-2.5 bg-[#111844]'
                : 'w-2.5 h-2.5 bg-white'
            }`}
          />
        ))}
      </div>

      {/* Counter */}
      <p className="text-[10px] font-black text-[#111844]/60 uppercase tracking-widest">
        {activeIndex + 1} / {items.length}
      </p>
    </div>
  );
}
