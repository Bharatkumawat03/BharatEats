"use client";

import { IMG_CDN_URL2, RestaurentList } from "../config";
import RestaurentCard from "./RestaurentCard";
import React, { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import NoMatch from "./NoMatch";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import useRestaurent from "../utils/useRestaurent";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const { user, setUser } = useContext(UserContext);
  console.log("here", user);

  const [allRestaurents, setAllRestaurents] = useState([]);
  const [filteredRestaurents, setfilteredRestaurents] = useState([]);

  useEffect(() => {
    getRestaurent();
  }, []);

  async function getRestaurent() {
    try {
      console.log("hello");
      const data = await fetch(IMG_CDN_URL2, {
        headers: {
            'Origin': 'https://your-website.com', // Replace with your actual domain
            'X-Requested-With': 'XMLHttpRequest'
        }
    });
      if (!data.ok) {
        throw new Error(`HTTP error! Status: ${data.status}`);
      }
      const json = await data.json();
      console.log(json);
      setAllRestaurents(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setfilteredRestaurents(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error);
      // console.log(error);
    }
  }

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>you are offline</h1>;
  }
  if (!allRestaurents) return null;

  return allRestaurents?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container  m-5 ">
        <input
          data-testid="search-input"
          type="text"
          className="search-input bg-gray-100 p-2 rounded-s-md"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          data-testid="search-btn"
          className="search-btn bg-black text-white p-2 rounded-e-md"
          onClick={() => {
            const info = filterData(searchText, allRestaurents);
            setfilteredRestaurents(info);
          }}
        >
          search
        </button>
        <input
          value={user.name}
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
            })
          }
        ></input>
      </div>
      <div
        className="restaurent-list flex mx-auto flex-wrap"
        data-testid="res-list"
      >
        {filteredRestaurents.map((Restaurent) => {
          return filteredRestaurents.length === 0 ? (
            <NoMatch />
          ) : (
            <Link
              to={"/restaurent/" + Restaurent.info.id}
              key={Restaurent.info.id}
            >
              <RestaurentCard user={user} {...Restaurent.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
