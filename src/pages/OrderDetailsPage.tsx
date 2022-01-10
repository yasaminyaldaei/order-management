import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export function OrderDetailsPage() {
  const params = useParams();
  return (
    <div>
      <span>{params.orderId}</span>
    </div>
  );
}
