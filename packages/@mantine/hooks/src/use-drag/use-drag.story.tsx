import { useRef, useState } from 'react';
import { useDrag, UseDragState } from './use-drag';

export default { title: 'useDrag' };

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function Usage() {
  const [state, setState] = useState<Partial<UseDragState>>({});
  const { ref, active } = useDrag((s) => setState(s));

  return (
    <div style={{ padding: 40 }}>
      <div
        ref={ref}
        style={{
          width: 200,
          height: 200,
          background: active ? '#228be6' : '#dee2e6',
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: active ? 'grabbing' : 'grab',
          touchAction: 'none',
          color: active ? '#fff' : '#000',
          fontWeight: 600,
          transition: 'background 150ms',
        }}
      >
        Drag me
      </div>
      <pre style={{ marginTop: 20, fontSize: 12 }}>
        {JSON.stringify(
          {
            active: state.active,
            first: state.first,
            last: state.last,
            movement: state.movement?.map((v) => Math.round(v)),
            velocity: state.velocity?.map((v) => +v.toFixed(3)),
            direction: state.direction,
            distance: state.distance?.map((v) => Math.round(v)),
            tap: state.tap,
          },
          null,
          2
        )}
      </pre>
    </div>
  );
}

export function AxisX() {
  const posRef = useRef({ x: 0 });
  const startPosRef = useRef({ x: 0 });
  const [pos, setPos] = useState({ x: 0 });

  const { ref, active } = useDrag(
    (state) => {
      if (state.first) {
        startPosRef.current = { ...posRef.current };
      }
      const x = startPosRef.current.x + state.movement[0];
      posRef.current = { x };
      setPos({ x });
    },
    { axis: 'x' }
  );

  return (
    <div style={{ padding: 40 }}>
      <p>Axis: x (horizontal only)</p>
      <div
        ref={ref}
        style={{
          width: 100,
          height: 100,
          background: active ? '#228be6' : '#dee2e6',
          borderRadius: 8,
          transform: `translateX(${pos.x}px)`,
          cursor: active ? 'grabbing' : 'grab',
          touchAction: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 600,
          color: active ? '#fff' : '#000',
        }}
      >
        X only
      </div>
    </div>
  );
}

export function AxisY() {
  const posRef = useRef({ y: 0 });
  const startPosRef = useRef({ y: 0 });
  const [pos, setPos] = useState({ y: 0 });

  const { ref, active } = useDrag(
    (state) => {
      if (state.first) {
        startPosRef.current = { ...posRef.current };
      }
      const y = startPosRef.current.y + state.movement[1];
      posRef.current = { y };
      setPos({ y });
    },
    { axis: 'y' }
  );

  return (
    <div style={{ padding: 40 }}>
      <p>Axis: y (vertical only)</p>
      <div
        ref={ref}
        style={{
          width: 100,
          height: 100,
          background: active ? '#228be6' : '#dee2e6',
          borderRadius: 8,
          transform: `translateY(${pos.y}px)`,
          cursor: active ? 'grabbing' : 'grab',
          touchAction: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 600,
          color: active ? '#fff' : '#000',
        }}
      >
        Y only
      </div>
    </div>
  );
}

export function AxisLock() {
  const posRef = useRef({ x: 0, y: 0 });
  const startPosRef = useRef({ x: 0, y: 0 });
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const { ref, active } = useDrag(
    (state) => {
      if (state.first) {
        startPosRef.current = { ...posRef.current };
      }
      const newPos = {
        x: startPosRef.current.x + state.movement[0],
        y: startPosRef.current.y + state.movement[1],
      };
      posRef.current = newPos;
      setPos(newPos);
    },
    { axis: 'lock', axisThreshold: 5 }
  );

  return (
    <div style={{ padding: 40 }}>
      <p>Axis: lock (locks to dominant direction after 5px)</p>
      <div
        ref={ref}
        style={{
          width: 100,
          height: 100,
          background: active ? '#228be6' : '#dee2e6',
          borderRadius: 8,
          transform: `translate(${pos.x}px, ${pos.y}px)`,
          cursor: active ? 'grabbing' : 'grab',
          touchAction: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 600,
          color: active ? '#fff' : '#000',
        }}
      >
        Lock
      </div>
    </div>
  );
}

export function Threshold() {
  const posRef = useRef({ x: 0, y: 0 });
  const startPosRef = useRef({ x: 0, y: 0 });
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const { ref, active } = useDrag(
    (state) => {
      if (state.first) {
        startPosRef.current = { ...posRef.current };
      }
      const newPos = {
        x: startPosRef.current.x + state.movement[0],
        y: startPosRef.current.y + state.movement[1],
      };
      posRef.current = newPos;
      setPos(newPos);
    },
    { threshold: 20 }
  );

  return (
    <div style={{ padding: 40 }}>
      <p>Threshold: 20px — drag must exceed 20px before activating</p>
      <div
        ref={ref}
        style={{
          width: 100,
          height: 100,
          background: active ? '#228be6' : '#dee2e6',
          borderRadius: 8,
          transform: `translate(${pos.x}px, ${pos.y}px)`,
          cursor: active ? 'grabbing' : 'grab',
          touchAction: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 600,
          color: active ? '#fff' : '#000',
        }}
      >
        {active ? 'Active' : 'Drag 20px'}
      </div>
    </div>
  );
}

export function FilterTaps() {
  const [taps, setTaps] = useState(0);
  const [drags, setDrags] = useState(0);

  const { ref, active } = useDrag(
    (state) => {
      if (state.last) {
        if (state.tap) {
          setTaps((t) => t + 1);
        } else {
          setDrags((d) => d + 1);
        }
      }
    },
    { filterTaps: true, threshold: 5 }
  );

  return (
    <div style={{ padding: 40 }}>
      <p>Click vs drag detection (threshold: 5px, filterTaps: true)</p>
      <div
        ref={ref}
        style={{
          width: 200,
          height: 100,
          background: active ? '#228be6' : '#dee2e6',
          borderRadius: 8,
          cursor: active ? 'grabbing' : 'pointer',
          touchAction: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 600,
          color: active ? '#fff' : '#000',
        }}
      >
        Click or drag me
      </div>
      <p>
        Taps: {taps} | Drags: {drags}
      </p>
    </div>
  );
}

// --- Scenario: Swipe to dismiss notifications ---

interface NotificationItem {
  id: number;
  text: string;
}

function SwipeNotification({
  notification,
  onDismiss,
}: {
  notification: NotificationItem;
  onDismiss: (id: number) => void;
}) {
  const [offset, setOffset] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  const { ref, active } = useDrag(
    (state) => {
      if (state.last) {
        const shouldDismiss = Math.abs(state.movement[0]) > 120 || state.velocity[0] > 0.5;
        if (shouldDismiss) {
          setDismissed(true);
          setTimeout(() => onDismiss(notification.id), 300);
        } else {
          setOffset(0);
        }
      } else {
        setOffset(state.movement[0]);
      }
    },
    { axis: 'x', threshold: 5, filterTaps: true }
  );

  const opacity = 1 - Math.min(Math.abs(offset) / 200, 1) * 0.6;

  return (
    <div
      ref={ref}
      style={{
        padding: '12px 16px',
        marginBottom: 8,
        background: '#fff',
        border: '1px solid #dee2e6',
        borderRadius: 8,
        transform: dismissed
          ? `translateX(${offset > 0 ? 400 : -400}px)`
          : `translateX(${offset}px)`,
        opacity: dismissed ? 0 : opacity,
        transition: active ? 'none' : 'transform 300ms ease, opacity 300ms ease',
        cursor: active ? 'grabbing' : 'grab',
        touchAction: 'pan-y',
        userSelect: 'none',
      }}
    >
      {notification.text}
    </div>
  );
}

export function SwipeToDismiss() {
  const [notifications, setNotifications] = useState<NotificationItem[]>([
    { id: 1, text: 'New message from Alice' },
    { id: 2, text: 'Build succeeded' },
    { id: 3, text: 'Deployment complete' },
    { id: 4, text: 'Review requested' },
    { id: 5, text: 'CI/CD pipeline finished' },
  ]);

  const dismiss = (id: number) => {
    setNotifications((items) => items.filter((n) => n.id !== id));
  };

  const reset = () => {
    setNotifications([
      { id: 1, text: 'New message from Alice' },
      { id: 2, text: 'Build succeeded' },
      { id: 3, text: 'Deployment complete' },
      { id: 4, text: 'Review requested' },
      { id: 5, text: 'CI/CD pipeline finished' },
    ]);
  };

  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <p>Swipe left or right to dismiss (threshold: 120px or velocity &gt; 0.5px/ms)</p>
      <div style={{ background: '#f8f9fa', padding: 16, borderRadius: 8 }}>
        {notifications.map((n) => (
          <SwipeNotification key={n.id} notification={n} onDismiss={dismiss} />
        ))}
        {notifications.length === 0 && (
          <p style={{ textAlign: 'center', color: '#868e96' }}>All cleared!</p>
        )}
      </div>
      <button onClick={reset} style={{ marginTop: 16 }}>
        Reset
      </button>
    </div>
  );
}

// --- Scenario: Drag to scroll ---

export function DragToScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { ref, active } = useDrag(
    (state) => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft -= state.delta[0];
      }
    },
    { axis: 'x', filterTaps: true, threshold: 5 }
  );

  const assignRef = (node: HTMLDivElement | null) => {
    scrollRef.current = node;
    ref(node);
  };

  return (
    <div style={{ padding: 40 }}>
      <p>Drag horizontally to scroll the container</p>
      <div
        ref={assignRef}
        style={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          cursor: active ? 'grabbing' : 'grab',
          touchAction: 'pan-y',
          userSelect: 'none',
          border: '1px solid #dee2e6',
          borderRadius: 8,
          padding: 16,
        }}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            style={{
              display: 'inline-block',
              width: 120,
              height: 80,
              marginRight: 12,
              background: `hsl(${i * 18}, 60%, 70%)`,
              borderRadius: 8,
              lineHeight: '80px',
              textAlign: 'center',
              fontWeight: 600,
              verticalAlign: 'top',
            }}
          >
            Card {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Scenario: Drawer swipe to close ---

export function DrawerSwipeToClose() {
  const [opened, setOpened] = useState(false);
  const [offset, setOffset] = useState(0);

  const drawerWidth = 320;

  const { ref, active } = useDrag(
    (state) => {
      if (state.last) {
        const shouldClose = state.movement[0] < -100 || state.velocity[0] > 0.4;
        if (shouldClose) {
          setOpened(false);
        }
        setOffset(0);
      } else {
        setOffset(Math.min(0, state.movement[0]));
      }
    },
    { axis: 'x', threshold: 10, filterTaps: true }
  );

  const drawerTranslate = opened ? offset : -drawerWidth;
  const overlayOpacity = opened ? clamp(1 + offset / drawerWidth, 0, 0.5) : 0;

  return (
    <div style={{ padding: 40 }}>
      <p>Left drawer — drag the drawer content leftward to close</p>
      <button onClick={() => setOpened(true)}>Open Drawer</button>

      {(opened || active) && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            pointerEvents: opened ? 'auto' : 'none',
          }}
        >
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
          <div
            onClick={() => {
              setOpened(false);
              setOffset(0);
            }}
            style={{
              position: 'absolute',
              inset: 0,
              background: `rgba(0,0,0,${overlayOpacity})`,
              transition: active ? 'none' : 'background 300ms ease',
            }}
          />
          <div
            ref={ref}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              width: drawerWidth,
              background: '#fff',
              boxShadow: '2px 0 12px rgba(0,0,0,0.15)',
              transform: `translateX(${drawerTranslate}px)`,
              transition: active ? 'none' : 'transform 300ms ease',
              touchAction: 'pan-y',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                padding: 16,
                borderBottom: '1px solid #dee2e6',
                fontWeight: 600,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              Drawer Title
              <button
                onClick={() => {
                  setOpened(false);
                  setOffset(0);
                }}
              >
                Close
              </button>
            </div>
            <div style={{ padding: 16, flex: 1 }}>
              <p>Swipe left to close this drawer.</p>
              <p>You can also click the overlay or the close button.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// --- Scenario: Freely draggable element ---

export function DraggableBox() {
  const posRef = useRef({ x: 100, y: 100 });
  const [pos, setPos] = useState({ x: 100, y: 100 });
  const startPosRef = useRef({ x: 100, y: 100 });

  const { ref, active } = useDrag((state) => {
    if (state.first) {
      startPosRef.current = { ...posRef.current };
    }

    const newPos = {
      x: startPosRef.current.x + state.movement[0],
      y: startPosRef.current.y + state.movement[1],
    };

    posRef.current = newPos;
    setPos(newPos);
  });

  return (
    <div style={{ padding: 40, position: 'relative', height: 400 }}>
      <p>Freely draggable element (like FloatingWindow)</p>
      <div
        ref={ref}
        style={{
          position: 'absolute',
          left: pos.x,
          top: pos.y,
          width: 140,
          height: 140,
          background: active ? '#228be6' : '#dee2e6',
          borderRadius: 12,
          cursor: active ? 'grabbing' : 'grab',
          touchAction: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 600,
          color: active ? '#fff' : '#000',
          boxShadow: active ? '0 8px 24px rgba(0,0,0,0.2)' : '0 2px 8px rgba(0,0,0,0.1)',
          transition: active ? 'none' : 'box-shadow 150ms, background 150ms',
        }}
      >
        Drag me
      </div>
    </div>
  );
}

export function Disabled() {
  const [enabled, setEnabled] = useState(true);
  const posRef = useRef({ x: 0, y: 0 });
  const startPosRef = useRef({ x: 0, y: 0 });
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const { ref, active } = useDrag(
    (state) => {
      if (state.first) {
        startPosRef.current = { ...posRef.current };
      }
      const newPos = {
        x: startPosRef.current.x + state.movement[0],
        y: startPosRef.current.y + state.movement[1],
      };
      posRef.current = newPos;
      setPos(newPos);
    },
    { enabled }
  );

  return (
    <div style={{ padding: 40 }}>
      <p>
        <label>
          <input type="checkbox" checked={enabled} onChange={(e) => setEnabled(e.target.checked)} />{' '}
          Enabled
        </label>
      </p>
      <div
        ref={ref}
        style={{
          width: 100,
          height: 100,
          background: !enabled ? '#ced4da' : active ? '#228be6' : '#dee2e6',
          borderRadius: 8,
          transform: `translate(${pos.x}px, ${pos.y}px)`,
          cursor: !enabled ? 'not-allowed' : active ? 'grabbing' : 'grab',
          touchAction: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 600,
          color: active ? '#fff' : '#000',
        }}
      >
        {enabled ? 'Enabled' : 'Disabled'}
      </div>
    </div>
  );
}
