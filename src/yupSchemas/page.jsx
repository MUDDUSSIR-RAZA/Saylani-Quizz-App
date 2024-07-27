import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().email().required("Please Enter Your Email"),
  password: Yup.string().required("Please Enter Your Password"),
});
// export const loginSchema = Yup.object({
//     email:Yup.string().email().required("Please Enter Your Email"),
//     password:Yup.string().min(13).max(13).required("Please Enter Your Password"),
//     name: Yup.string().min(2).max(25).required("Please Enter Your Name"),
//     fathername: Yup.string().min(2).max(25).required("Please Enter Your Name"),
//     nic: "",
//     phone: "",
//     city: "",
//     course_name: "",
//     batch: "",
// })

export const quizTitleSchema = Yup.object({
  quiz_name: Yup.string().required("Please Enter Quiz Title"),
  key: Yup.string().required("Please Enter Quiz Title"),
  course_name: Yup.string().required("Course selection is required"),
});
