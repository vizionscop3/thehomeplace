'use client';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { rooms, Room } from '@/data/rooms';
import '@/styles/floor-plan.css';

interface TooltipState {
  visible: boolean;
  x: number;
  y: number;
  room: Room | null;
}

export default function FloorPlan() {
  const pathname = usePathname();
  const router = useRouter();
  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    x: 0,
    y: 0,
    room: null
  });

  const handleRoomHover = (e: React.MouseEvent, room: Room) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltip({
      visible: true,
      x: rect.left + rect.width / 2,
      y: rect.top - 10,
      room
    });
  };

  const handleRoomLeave = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  const handleRoomClick = (room: Room) => {
    router.push(room.path);
  };

  const handleKeyDown = (e: React.KeyboardEvent, room: Room) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      router.push(room.path);
    }
  };

  return (
    <div className="floor-plan-container">
      {/* Desktop SVG Floor Plan */}
      <div className="floor-plan-svg-wrapper">
        <svg
          className="floor-plan-svg"
          viewBox="0 0 600 400"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Interactive floor plan of The Home Place. Click a room to navigate."
        >
          {/* Outer walls */}
          <rect
            x="50"
            y="50"
            width="500"
            height="300"
            fill="none"
            stroke="var(--color-dark)"
            strokeWidth="4"
            rx="4"
          />

          {/* Front Porch / Entryway */}
          <g
            className="floor-plan-room"
            data-room="room-entryway"
            data-active={pathname === '/'}
            role="button"
            tabIndex={0}
            aria-label="Navigate to Front Porch - Home"
            onClick={() => handleRoomClick(rooms[0])}
            onKeyDown={(e) => handleKeyDown(e, rooms[0])}
            onMouseEnter={(e) => handleRoomHover(e, rooms[0])}
            onMouseLeave={handleRoomLeave}
          >
            <rect className="room-fill" x="50" y="50" width="150" height="120" rx="2" />
            <text className="room-label" x="125" y="115">Front Porch</text>
          </g>

          {/* Living Room */}
          <g
            className="floor-plan-room"
            data-room="room-living"
            data-active={pathname === '/about'}
            role="button"
            tabIndex={0}
            aria-label="Navigate to Living Room - About Us"
            onClick={() => handleRoomClick(rooms[1])}
            onKeyDown={(e) => handleKeyDown(e, rooms[1])}
            onMouseEnter={(e) => handleRoomHover(e, rooms[1])}
            onMouseLeave={handleRoomLeave}
          >
            <rect className="room-fill" x="200" y="50" width="180" height="150" rx="2" />
            <text className="room-label" x="290" y="130">Living Room</text>
          </g>

          {/* Kitchen */}
          <g
            className="floor-plan-room"
            data-room="room-kitchen"
            data-active={pathname === '/services'}
            role="button"
            tabIndex={0}
            aria-label="Navigate to Kitchen - Services"
            onClick={() => handleRoomClick(rooms[2])}
            onKeyDown={(e) => handleKeyDown(e, rooms[2])}
            onMouseEnter={(e) => handleRoomHover(e, rooms[2])}
            onMouseLeave={handleRoomLeave}
          >
            <rect className="room-fill" x="380" y="50" width="170" height="150" rx="2" />
            <text className="room-label" x="465" y="130">Kitchen</text>
          </g>

          {/* Backyard */}
          <g
            className="floor-plan-room"
            data-room="room-backyard"
            data-active={pathname === '/outreach'}
            role="button"
            tabIndex={0}
            aria-label="Navigate to Backyard - Outreach"
            onClick={() => handleRoomClick(rooms[3])}
            onKeyDown={(e) => handleKeyDown(e, rooms[3])}
            onMouseEnter={(e) => handleRoomHover(e, rooms[3])}
            onMouseLeave={handleRoomLeave}
          >
            <rect className="room-fill" x="50" y="200" width="250" height="150" rx="2" />
            <text className="room-label" x="175" y="280">Backyard</text>
          </g>

          {/* Study */}
          <g
            className="floor-plan-room"
            data-room="room-study"
            data-active={pathname === '/contact'}
            role="button"
            tabIndex={0}
            aria-label="Navigate to Study - Contact Us"
            onClick={() => handleRoomClick(rooms[4])}
            onKeyDown={(e) => handleKeyDown(e, rooms[4])}
            onMouseEnter={(e) => handleRoomHover(e, rooms[4])}
            onMouseLeave={handleRoomLeave}
          >
            <rect className="room-fill" x="300" y="200" width="250" height="150" rx="2" />
            <text className="room-label" x="425" y="280">Study</text>
          </g>

          {/* Door indicators */}
          <rect x="100" y="165" width="30" height="8" fill="var(--color-gold)" rx="2" />
          <rect x="260" y="195" width="30" height="8" fill="var(--color-gold)" rx="2" />
          <rect x="375" y="195" width="30" height="8" fill="var(--color-gold)" rx="2" />
        </svg>

        {/* Tooltip */}
        {tooltip.visible && tooltip.room && (
          <div
            className={`floor-plan-tooltip ${tooltip.visible ? 'visible' : ''}`}
            style={{
              position: 'fixed',
              left: tooltip.x,
              top: tooltip.y,
              transform: 'translate(-50%, -100%)'
            }}
          >
            {tooltip.room.metaphor}
          </div>
        )}
      </div>

      {/* Mobile Room Cards */}
      <div className="mobile-room-cards">
        {rooms.map((room) => (
          <Link
            key={room.id}
            href={room.path}
            className="mobile-room-card"
            style={{ borderLeftColor: room.color, borderLeftWidth: '4px' }}
          >
            <div
              className="mobile-room-icon"
              style={{ backgroundColor: `${room.color}20` }}
            >
              {room.name === 'Front Porch' && '🏠'}
              {room.name === 'Living Room' && '🛋️'}
              {room.name === 'Kitchen' && '🍽️'}
              {room.name === 'Backyard' && '🌳'}
              {room.name === 'Study' && '📚'}
            </div>
            <div className="mobile-room-content">
              <h3>{room.name}</h3>
              <p>{room.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Screen reader fallback */}
      <nav className="sr-only" aria-label="Room navigation">
        <ul>
          {rooms.map((room) => (
            <li key={room.id}>
              <Link href={room.path}>{room.name} - {room.description}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
