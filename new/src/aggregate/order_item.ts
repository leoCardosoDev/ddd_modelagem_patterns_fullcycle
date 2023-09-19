export default class OrderItem {
  _id: string;
  _productId: string;
  _unitPrice: number;

  constructor(id: string, productId: string, unitPrice: number){
    this._id = id;
    this._productId = productId;
    this._unitPrice = unitPrice;
  }
}
