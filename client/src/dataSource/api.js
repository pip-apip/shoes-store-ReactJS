import axios from "axios";

const BASE_URL = "http://localhost:2510/";

export const getShoes = async () => {
    try {
      const { data } = await axios.get(BASE_URL + "shoes");
      return data.data;
    } catch (error) {
      return null;
    }
};

export const getShoesById = async (id) => {
  try {
    const { data } = await axios.get(BASE_URL + "shoes/" + id);
    return data.data;
  } catch (error) {
    return null;
  }
};

export const addShoes = async (payload) => {
  try {
    await axios.post(BASE_URL + "shoes", payload);
    return "success";
  } catch (error) {
    return null;
  }
};

export const updateShoes = async (id, payload) => {
  try {
    await axios.put(BASE_URL + "shoes/" + id, payload);
    return "success";
  } catch (error) {
    return null;
  }
};

export const deleteShoes = async (id) => {
  try {
    await axios.delete(BASE_URL + "shoes/" + id);
    return "success";
  } catch (error) {
    return null;
  }
};