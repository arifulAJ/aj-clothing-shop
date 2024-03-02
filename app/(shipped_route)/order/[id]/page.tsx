// import OrderDetails from "./OrderDetails";

// export function generateMeatadata({ params }: { params: { id: string } }) {
//   return {
//     title: `Order${params.id}`,
//   };
// }
// export default function OrderDetailsPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   return (
//     <OrderDetails
//       paypalClientId={process.env.PAYPAL_CLIENT_ID || "sb"}
//       orderId={params.id}
//     />
//   );
// }
// Import OrderDetails component
import OrderDetails from "./OrderDetails";

// // Define the generateMetadata function
// export function generateMetadata({ params }: { params: { id: string } }) {
//   return {
//     title: `Order ${params.id}`,
//   };
// }

// Define the OrderDetailsPage component
export default function OrderDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <OrderDetails
      paypalClientId={process.env.PAYPAL_CLIENT_ID || "sb"}
      orderId={params.id}
    />
  );
}
