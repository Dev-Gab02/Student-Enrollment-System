import API from "../api/axios";

export const approve = (id) => API.patch(`/admin/enrollment/${id}`, {
  status:
  "Approved",
  admin_remark:
  "Approved"
})

export const Delete = (id) => API.delete(`/admin/enrollment/${id}`)