import {
  createNotificationsStore,
  showNotification,
  updateNotification,
  hideNotification,
  cleanNotifications,
} from './notifications.store';

describe('@mantine/notifications/notifications.store', () => {
  describe('showNotification', () => {
    it('adds notification to the store', () => {
      const store = createNotificationsStore();
      const id = showNotification({ message: 'Test notification' }, store);
      const state = store.getState();
      
      expect(state.notifications).toHaveLength(1);
      expect(state.notifications[0].id).toBe(id);
      expect(state.notifications[0].message).toBe('Test notification');
    });

    it('generates id if not provided', () => {
      const store = createNotificationsStore();
      const id = showNotification({ message: 'Test' }, store);
      
      expect(id).toBeDefined();
      expect(typeof id).toBe('string');
    });

    it('uses provided id', () => {
      const store = createNotificationsStore();
      const id = showNotification({ id: 'custom-id', message: 'Test' }, store);
      
      expect(id).toBe('custom-id');
      expect(store.getState().notifications[0].id).toBe('custom-id');
    });

    it('does not add duplicate notifications with same id', () => {
      const store = createNotificationsStore();
      showNotification({ id: 'same-id', message: 'First' }, store);
      showNotification({ id: 'same-id', message: 'Second' }, store);
      
      expect(store.getState().notifications).toHaveLength(1);
      expect(store.getState().notifications[0].message).toBe('First');
    });
  });

  describe('updateNotification', () => {
    it('updates notification properties', () => {
      const store = createNotificationsStore();
      const id = showNotification({ message: 'Initial message' }, store);
      
      updateNotification({ id, message: 'Updated message', color: 'teal' }, store);
      
      const notification = store.getState().notifications[0];
      expect(notification.message).toBe('Updated message');
      expect(notification.color).toBe('teal');
    });

    it('adds __autoCloseTimestamp when resetTimeout is true', () => {
      const store = createNotificationsStore();
      const id = showNotification({ message: 'Test', autoClose: 5000 }, store);
      
      const beforeUpdate = Date.now();
      updateNotification({ id, message: 'Updated', resetTimeout: true }, store);
      const afterUpdate = Date.now();
      
      const notification = store.getState().notifications[0];
      expect(notification.__autoCloseTimestamp).toBeDefined();
      expect(notification.__autoCloseTimestamp!).toBeGreaterThanOrEqual(beforeUpdate);
      expect(notification.__autoCloseTimestamp!).toBeLessThanOrEqual(afterUpdate);
    });

    it('does not add __autoCloseTimestamp when resetTimeout is false or undefined', () => {
      const store = createNotificationsStore();
      const id = showNotification({ message: 'Test' }, store);
      
      updateNotification({ id, message: 'Updated' }, store);
      
      const notification = store.getState().notifications[0];
      expect(notification.__autoCloseTimestamp).toBeUndefined();
    });

    it('updates __autoCloseTimestamp on each update with resetTimeout', () => {
      const store = createNotificationsStore();
      const id = showNotification({ message: 'Test' }, store);
      
      updateNotification({ id, message: 'First update', resetTimeout: true }, store);
      const firstTimestamp = store.getState().notifications[0].__autoCloseTimestamp;
      
      // Wait a bit to ensure different timestamp
      const delay = new Promise(resolve => setTimeout(resolve, 10));
      return delay.then(() => {
        updateNotification({ id, message: 'Second update', resetTimeout: true }, store);
        const secondTimestamp = store.getState().notifications[0].__autoCloseTimestamp;
        
        expect(secondTimestamp).toBeGreaterThan(firstTimestamp!);
      });
    });
  });

  describe('hideNotification', () => {
    it('removes notification from store', () => {
      const store = createNotificationsStore();
      const id = showNotification({ message: 'Test' }, store);
      
      expect(store.getState().notifications).toHaveLength(1);
      
      hideNotification(id, store);
      
      expect(store.getState().notifications).toHaveLength(0);
    });

    it('calls onClose callback', () => {
      const store = createNotificationsStore();
      const onClose = jest.fn();
      const id = showNotification({ message: 'Test', onClose }, store);
      
      hideNotification(id, store);
      
      expect(onClose).toHaveBeenCalledTimes(1);
      expect(onClose).toHaveBeenCalledWith(expect.objectContaining({ id, message: 'Test' }));
    });
  });

  describe('cleanNotifications', () => {
    it('removes all notifications', () => {
      const store = createNotificationsStore();
      showNotification({ message: 'First' }, store);
      showNotification({ message: 'Second' }, store);
      showNotification({ message: 'Third' }, store);
      
      expect(store.getState().notifications).toHaveLength(3);
      
      cleanNotifications(store);
      
      expect(store.getState().notifications).toHaveLength(0);
    });
  });
});
