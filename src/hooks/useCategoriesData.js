import { useState, useEffect } from "react";

export function useCategoriesData() {
  const [categories, setCategories] = useState(["r1", "r2", "r3", "r4", "r5"]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://petgram-server-api-24cwn2sry-jeffreyvegas.vercel.app/categories"
    )
      .then((res) => res.json())
      .then((response) => {
        setCategories(response);
        setLoading(false);
      });
  }, []);

  return { categories, loading };
}
