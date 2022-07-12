export abstract class ProductComponent {
  abstract getPrice(): number;
}

export class ProductLeaf extends ProductComponent {
  constructor(public name: string, public price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = [];

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }

  add(...products: ProductComponent[]): void {
    this.children.push(...products);
  }

  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);
    if (productIndex !== -1) {
      this.children.splice(productIndex, 1);
    }
  }
}

const pen = new ProductLeaf('Pen', 1);
const smarthphone = new ProductLeaf('Smarthphone', 1_000);
const tShirt = new ProductLeaf('TShirt', 40);
const productBox = new ProductComposite();
productBox.add(pen, smarthphone, tShirt);

const tablet = new ProductLeaf('Tablet', 2_000);
const kindle = new ProductLeaf('Kindle', 300);
const anotherProductBox = new ProductComposite();
anotherProductBox.add(tablet, kindle);
productBox.add(anotherProductBox);
productBox.remove(pen);

console.log(productBox);
console.log(productBox.getPrice());
