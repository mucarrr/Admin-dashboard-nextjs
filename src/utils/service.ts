import { Order, Product, User } from "@/types";

const BASE_URL = "http://localhost:9090";

const getOrders = async (): Promise<Order[]> => {
  const response = await fetch(`${BASE_URL}/orders`);
  return response.json();
};

const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${BASE_URL}/products`);
  const products = await response.json() as Product[];
  return products.map((product: Product) => ({
    ...product,
    price: typeof product.price === 'number' ? product.price : Number(product.price)
  }));
};

const deleteProduct = async (id: string): Promise<void> => {
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    method: "DELETE",
  });
  return response.json();
};

const createProduct = async (product: Omit<Product, "id">): Promise<Product> => {
  const response = await fetch(`${BASE_URL}/products`, {
    method: "POST",
    body: JSON.stringify(product),
  });
  return response.json();
};

const getProduct = async (id: string): Promise<Product> => {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  return response.json();
};

const updateProduct = async (id: string, product: Partial <Product>): Promise<Product> => {
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    method: "PATCH",
    body: JSON.stringify(product),
  });
  return response.json();
};

const getUsers = async ():Promise<User[]> =>{
  const response = await fetch(`${BASE_URL}/users`);
  return response.json();
}

const getUser = async (id: string):Promise<User> =>{
  const response = await fetch(`${BASE_URL}/users/${id}`);
  return response.json();
}

const updateUser = async (id: string, user: Partial<User>):Promise<User> =>{
  const response = await fetch(`${BASE_URL}/users/${id}`, {
    method: "PATCH",
    body: JSON.stringify(user),
  });
  return response.json();}

const deleteUser = async (id: string):Promise<void> =>{
  const response = await fetch(`${BASE_URL}/users/${id}`, {
    method: "DELETE",
  });
  return response.json();
}
const getValues = async ()=>{
  const users = await getUsers();
  const products = await getProducts();
  const orders = await getOrders();
  return{
    totalUsers: users.length,
    totalProducts: products.length,
    totalOrders: orders.length,
    totalPrice: orders.reduce((acc: number, order: Order) => acc + order.total_price, 0),
  }
} 
export { getOrders, getProducts, deleteProduct, createProduct, getProduct, updateProduct, getUsers, getUser, updateUser, deleteUser, getValues };