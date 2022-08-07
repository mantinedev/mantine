import { useState, useEffect, useCallback } from 'react';
import { useWindowEvent } from '../use-window-event/use-window-event';

interface NetworkStatus {
  downlink?: number;
  downlinkMax?: number;
  effectiveType?: 'slow-2g' | '2g' | '3g' | '4g';
  rtt?: number;
  saveData?: boolean;
  type?: 'bluetooth' | 'cellular' | 'ethernet' | 'wifi' | 'wimax' | 'none' | 'other' | 'unknown';
}

function getConnection(): NetworkStatus {
  if (typeof navigator === 'undefined') {
    return {};
  }

  const _navigator = navigator as any;
  const connection: any =
    _navigator.connection || _navigator.mozConnection || _navigator.webkitConnection;

  if (!connection) {
    return {};
  }

  return {
    downlink: connection?.downlink,
    downlinkMax: connection?.downlinkMax,
    effectiveType: connection?.effectiveType,
    rtt: connection?.rtt,
    saveData: connection?.saveData,
    type: connection?.type,
  };
}

export function useNetwork() {
  const [status, setStatus] = useState({ online: true, ...getConnection() });
  const handleConnectionChange = useCallback(
    () => setStatus((current) => ({ ...current, ...getConnection() })),
    []
  );

  useWindowEvent('online', () => setStatus({ online: true, ...getConnection() }));
  useWindowEvent('offline', () => setStatus({ online: false, ...getConnection() }));

  useEffect(() => {
    if (navigator.connection) {
      navigator.connection.addEventListener('change', handleConnectionChange);
      return () => navigator.connection.removeEventListener('change', handleConnectionChange);
    }

    return undefined;
  }, []);

  return status;
}
