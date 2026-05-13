import API from "../api/axios"

export const enroll = (formData) => API.post("/enrollment/submit", formData)
export const selfInfo = () => API.get("/enrollment/me")