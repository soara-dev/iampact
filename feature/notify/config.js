export const global = {
  title: {
    error: "",
    success: "",
    warning: "",
  },
  message: {
    error: "Oops! Something went wrong",
    success: "Action performed successfully",
    warning: "This action needs attention",
  },
};

export const globalToast = {
  toast: true,
  timer: 3000,
  position: "top-end",
  showConfirmButton: false,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
};

export const globalSwal = {};

export const globalConfirm = {
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!",
};
