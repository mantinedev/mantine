// Test helper: jsdom has no layout, every rect is empty and the dnd-kit keyboard sensor
// finds no row to move to. Rows get stacked rects from their position among siblings.
export function mockSortableLayout() {
  return jest
    .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
    .mockImplementation(function getRect(this: HTMLElement) {
      const siblings = this.parentElement ? Array.from(this.parentElement.children) : [this];
      const top = siblings.indexOf(this) * 50;
      return {
        x: 0,
        y: top,
        top,
        left: 0,
        right: 400,
        bottom: top + 40,
        width: 400,
        height: 40,
        toJSON: () => ({}),
      };
    });
}
