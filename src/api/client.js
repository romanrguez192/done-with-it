import { create } from "apisauce";
import cache from "../utils/cache";
import authStorage from "../auth/storage";

const apiClient = create({
  baseURL: "http://192.168.0.101:9000/api",
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (authToken) {
    request.headers["x-auth-token"] = authToken;
  }
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.set(url, response.data);
    return response;
  }

  const data = await cache.get(url);

  return data ? { ok: true, data } : response;
};

export default apiClient;
