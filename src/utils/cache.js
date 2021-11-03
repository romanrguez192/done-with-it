import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

const expiryInMinutes = 5;

const set = async (key, value) => {
  try {
    const item = JSON.stringify({
      value,
      timestamp: Date.now(),
    });

    await AsyncStorage.setItem(key, item);
  } catch (error) {
    console.log(error);
  }
};

const isExpired = (item) => {
  const now = moment(Date.now());
  const storedTime = moment(item.timestamp);
  const diff = now.diff(storedTime, "minutes");

  return diff > expiryInMinutes;
};

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    const item = JSON.parse(value);

    if (!item) {
      return null;
    }

    if (isExpired(item)) {
      await AsyncStorage.removeItem(key);
      return null;
    }

    return item.value;
  } catch (error) {
    console.log(error);
  }
};

export default {
  set,
  get,
};
