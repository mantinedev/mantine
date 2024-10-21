export class StickyTableHeader {
  private table: HTMLTableElement;
  private clone: HTMLDivElement;
  private top: { max: number };
  private headerHeight: number = 0;
  private tableRect: DOMRect | null = null;
  private scrollContainer: HTMLElement | null = null;
  private tableContainer: HTMLElement | null = null;

  constructor(
    table: HTMLTableElement,
    clone: HTMLDivElement,
    top: { max: number },
    tableContainer: HTMLElement
  ) {
    this.table = table;
    this.clone = clone;
    this.top = top;
    this.tableContainer = tableContainer;
    this.scrollContainer = this.findScrollContainer(table);
    this.init();
  }

  private init() {
    this.cloneHeader();
    this.bindEvents();
    this.updatePosition();
  }

  private findScrollContainer(element: HTMLElement): HTMLElement | null {
    let parent = element.parentElement;
    while (parent) {
      const overflowX = window.getComputedStyle(parent).overflowX;
      if (overflowX === 'auto' || overflowX === 'scroll') {
        return parent;
      }
      parent = parent.parentElement;
    }
    return null;
  }

  private cloneHeader() {
    const originalHeader = this.table.querySelector('thead');
    if (originalHeader) {
      this.clone.innerHTML = '';
      const clonedTable = this.table.cloneNode(false) as HTMLTableElement;
      const clonedHeader = originalHeader.cloneNode(true) as HTMLTableSectionElement;
      clonedTable.appendChild(clonedHeader);
      this.clone.appendChild(clonedTable);
      this.headerHeight = originalHeader.offsetHeight;

      // Copy styles from original table to cloned table
      const styles = window.getComputedStyle(this.table);
      Object.assign(clonedTable.style, {
        borderCollapse: styles.borderCollapse,
        borderSpacing: styles.borderSpacing,
        width: styles.width,
        tableLayout: 'fixed',
      });

      this.updateColumnWidths();
    }
  }

  private updateColumnWidths() {
    const originalHeader = this.table.querySelector('thead');
    const clonedTable = this.clone.querySelector('table');
    if (originalHeader && clonedTable) {
      const originalCells = originalHeader.querySelectorAll('th, td');
      const clonedCells = clonedTable.querySelectorAll('th, td');
      originalCells.forEach((cell, index) => {
        const width = (cell as HTMLElement).offsetWidth;
        (clonedCells[index] as HTMLElement).style.width = `${width}px`;
        (clonedCells[index] as HTMLElement).style.minWidth = `${width}px`;
        (clonedCells[index] as HTMLElement).style.maxWidth = `${width}px`;
      });
      clonedTable.style.width = `${this.table.offsetWidth}px`;
    }
  }

  private bindEvents() {
    window.addEventListener('scroll', this.updatePosition);
    window.addEventListener('resize', this.updatePosition);
    if (this.scrollContainer) {
      this.scrollContainer.addEventListener('scroll', this.updatePosition);
    }
  }

  public updatePosition = () => {
    if (!this.tableContainer) return;
    const containerRect = this.tableContainer.getBoundingClientRect();
    const tableRect = this.table.getBoundingClientRect();

    if (
      containerRect.top - this.top.max <= 0 &&
      containerRect.bottom - this.headerHeight - this.top.max >= 0
    ) {
      this.clone.style.display = 'block';
      this.clone.style.position = 'absolute';
      this.clone.style.top = `${Math.max(0, this.top.max - containerRect.top)}px`;
      this.clone.style.left = `${tableRect.left - containerRect.left}px`;
      this.clone.style.width = `${tableRect.width}px`;

      // Adjust horizontal scroll
      if (this.scrollContainer) {
        const scrollLeft = this.scrollContainer.scrollLeft;
        const clonedTable = this.clone.querySelector('table') as HTMLTableElement;
        if (clonedTable) {
          clonedTable.style.marginLeft = `-${scrollLeft}px`;
        }
      }

      this.updateColumnWidths(); // Update column widths on each position update
    } else {
      this.clone.style.display = 'none';
    }

    this.tableRect = tableRect;
  };

  public destroy() {
    window.removeEventListener('scroll', this.updatePosition);
    window.removeEventListener('resize', this.updatePosition);
    if (this.scrollContainer) {
      this.scrollContainer.removeEventListener('scroll', this.updatePosition);
    }
  }
}
