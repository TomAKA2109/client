import axiosClient from "./axiosClient";

const handleAPI = async (
    url: string,
    data?: any,
    method: "post" | "put" | "get" | "delete" = "get"
) => {
    try {
        const response = await axiosClient(url, { method, data });
        return response.data;
    } catch (error: any) {
        console.error(`❌ API Error: ${method.toUpperCase()} ${url}`, error.response?.data || error.message);

        // Trả về thông báo lỗi có cấu trúc
        return {
            success: false,
            message: error.response?.data?.message || "Something went wrong!",
        };
    }
};

export default handleAPI;