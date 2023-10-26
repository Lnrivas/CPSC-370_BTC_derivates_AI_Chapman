// Data Structures for CLOB

type Order = {
  id: string;
  type: 'BUY' | 'SELL';
  price: number;
  quantity: number;
};

type OrderBook = Order[];

// Functions for CLOB

function placeOrder(order: Order, orderBook: OrderBook): OrderBook {
  // TODO: Implement the function
  return orderBook;
}

function cancelOrder(id: string, orderBook: OrderBook): OrderBook {
  // TODO: Implement the function
  return orderBook;
}

function matchOrders(orderBook: OrderBook): { matchedOrders: Order[], newOrderBook: OrderBook } {
  // TODO: Implement the function
  return { matchedOrders: [], newOrderBook: orderBook };
}

// Data Structures for AMM

type Reserve = {
  tokenX: number;
  tokenY: number;
};

type Liquidity = {
  proportion: number;
};

export { Order, OrderBook, placeOrder, cancelOrder, matchOrders, Reserve, Liquidity };
