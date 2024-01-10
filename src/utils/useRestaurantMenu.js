import { useEffect, useState } from "react";
import { HEADERS, PROXY, RESTAURANT_MENU_API } from "./constants";

export default function useRestaurantMenu(resId) {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchResData();
  }, []);

  const fetchResData = async () => {
    const data = await fetch(PROXY + RESTAURANT_MENU_API + resId, HEADERS);
    const json = await data.json();
    setResMenu(json.data);
  };

  return resMenu;
}
