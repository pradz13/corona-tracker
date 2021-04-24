import axios from "axios";

class InvokeService {
    invokeCoronaSummaryApi() {
        return axios.get("https://api.covid19api.com/summary");
    }
}

export default new InvokeService();